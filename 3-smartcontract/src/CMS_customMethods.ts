
  @Validator(yup.string(), yup.string(), yup.string(), yup.string(), yup.string(), yup.array().of(yup.string()), yup.array().of(yup.string()))
  public async attachDocument(tokenId: string, docName: string, docURL: string, docHASH: string, docType: string, docProps: string[], docVals: string[]) {
    try {
        const token = await this.Ctx.ERC721Token.get(tokenId);
        const t = new FolderNFT(token);

        const d = new Document({
            docName: docName,
            docURL: docURL,
            docHASH: docHASH,
            docType: docType,
            docProperties: []
        });
        
        for (var i = 0; i < docProps.length; i++) {
            const dp = new DocProperty({
                propName: docProps[i],
                propValue: docVals[i]
            })
            d.docProperties.push(dp);
        }
        
        //Save the new document in BC
        await this.Ctx.Model.save(d);
        
        //Add the document to the array of documents belonging to the Folder
        t.documents.push(d);
        await this.Ctx.ERC721Token.updateToken(t);
        
        var msg = `Document : '${docName}' has been attached to folder : '${tokenId}`;
        
        return msg;
    }
    catch (error) {
        throw new Error(error.message);
    }
  }
  @Validator(yup.string())
  public async retrieveDocuments(tokenId: string) {
    try {
        const token = await this.Ctx.ERC721Token.get(tokenId);
        return token.documents;
    }
    catch (error) {
        throw new Error(error.message);
    }
}
  @Validator(yup.string(), yup.string(), yup.string(), yup.string(), yup.string())
  public async transferFolder(tokenId: string, fromOrgId: string, fromUserId: string, toOrgId: string, toUserId: string) {
    try {
        const token = await this.Ctx.ERC721Token.get(tokenId);
        const t = new FolderNFT(token);
        //t.contractStartTime = contractStartTime;
        //t.contractEndTime = contractEndTime;
        var msg = `Folder Token ID : '${tokenId}' has not been transferred'`;
        
        const from_account_id = await this.Ctx.ERC721Account.generateAccountId(fromOrgId, fromUserId);
        const to_account_id = await this.Ctx.ERC721Account.generateAccountId(toOrgId, toUserId);
        
        await this.Ctx.ERC721Token.transferFrom(from_account_id, to_account_id, t);
        
        msg = `Folder Token ID : '${tokenId}' has been successfully transferred to UserID : '${toUserId}'`;
        return msg;
    }
    catch (error) {
        throw new Error(error.message);
    }
  }
