# CMS-Secured-by-Blockchain

[![License: UPL](https://img.shields.io/badge/license-UPL-green)](https://img.shields.io/badge/license-UPL-green) [![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=oracle-devrel_CMS-Secured-by-Blockchain)](https://sonarcloud.io/dashboard?id=oracle-devrel_CMS-Secured-by-Blockchain)

## THIS IS A NEW, BLANK REPO THAT IS NOT READY FOR USE YET.  PLEASE CHECK BACK SOON!

## Introduction

If you are interested in learn how easily you can implement a custom CMS enriched with a verification of non-tampering of the documents by using blockchain as a certifier of the integrity of the documents, here you will see how it ca be easily done thanks to some of the PaaS solution offered by Oracle Cloud Infrastructure (OCI).

The whole solution is created using just three Oracle Cloud Services we depict in the following diagram:

<p align="center">
<img width="416" height="307" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain-oracle-devrel/blob/main/images/0_WEDO_CMS_LogicalArchitecture.jpg"/>
</p>

As you can see in the picture, we are using two different persistence solutions, it is:
1. First of all [Oracle Blockchain](https://www.oracle.com/es/blockchain/ "Oracle Blockchain Cloud Service"), it is the core piece of the solution, here is where the metadata of the documents are stored, like its name, kind of file, URL to be able to locate the document, or a hash generated based on the binary content of the document.

2. We are also using [OCI Object Storage](https://www.oracle.com/es/cloud/storage/object-storage/ "Oracle Cloud Infrastructure (OCI) Object Storage"), where documents itself, are stored.
	This is probably the best choice for those who needs the cheapest and most reliable storage solution. 
	OCI Object Storage allows you to store thousands of documents at a negligible cost.

We are also using [Oracle Integration Cloud](https://www.oracle.com/es/integration/application-integration/ "Oracle Integration Cloud"), not only for its integration capabilities, also because its extremely powerful Web & Mobile Low-Code development environment embedded in it, it is: [Oracle Visual Builder](https://www.oracle.com/es/integration/application-integration/#rc30p3 "Oracle Visual Builder"). It makes possible the development of a web or mobile interface in hours instead of weeks!

As you will see during the lab execution, Oracle Visual Builder (VBCS) does not need to be instantiated to execute the demo. We have used VBCS to develope the web application, but once developed, you can just deploy the provided web application in whatever server which can server a the Web application. So in case you do not need some of the features offered by Visual Builder, you can decide whether execute the Web application in VBCS or in any other kind of server.

And finally, we are also using the Identity Management solution offered by OCI, it is [Identity Cloud Service (IDCS)](https://www.oracle.com/es/security/cloud-security/identity-cloud/ "Oracle Identity Cloud Service"), where all the users who need to access to the solution, have been created, and granted to access with the proper privileges depending on their role.

it is important to highlight that, among the information stored in blockchain for each document, there is a hash generated based on the binary content of the document, here we can see how this hash is included among the metadata information of each document to be stored into the blockchain ledger:
<p align="center">
<img width="620" height="530" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain-oracle-devrel/blob/main/images/1_PostmanDocHash2.png"/>
</p>

if someone modifies the document from its external location, in our case a bucket in OCI Storage, next time someone tries to retrieve the document, the verfication based on validity of the hash will fail, so the user will be notified for the tampering of the document.

Regarding with the functional use case, the assets we are going to develop simulates a content management solution for a financial institution, in which each folder represents a financial operation for a customer, and the folder is acting as an archive where a sort of documents related with the operation are managed as a whole. 
	
The folder is represented into blockchain as a non fungible token (NFT), because this kind of tokens fit really well in situations where one key aspect is the ownership of the asset. It means we can define the different kind of actions which can be executed against it, depending on the role of the user accessing to the folder, so the documents are child elements of the NFT entity who acts as an archive. 

<p align="center">
<img width="785" height="510" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain-oracle-devrel/blob/main/images/2_documentWorkflow.png"/>
</p>

There will be two different roles to access to the documents through the application:
* ***Folder Manager***: Users accessing to a folder are owner (or custodian), so the user will be able to update documents on the folder, and also will be granted to perform a transfer of the folder to a different user/department.

* ***Document Reviewer***: Users accessing with this role can review documentation of a folder without being capable to do any change on them.

If you are interested in know a little bit more about NFTs, check the [Using NFT and FT Tokens in Oracle Blockchain](https://github.com/jvillenap/Using-NFT-and-FT-Tokens-in-Oracle-Blockchain/blob/main/README.md "Using NFT and FT Tokens in Oracle Blockchain") HoL, in which you can deploy your first Smartcontract handling Fungible and Non-Fungible tokens on Hyperledger Fabric, and test them really easily.

<a name="Products"/>

---


## Getting Started
To implement a solution like the one exposed in this HoL, there are three main areas to work:
   1. Blockchain infrastructure preparation.  
   2. Development and Deployment of the Smartcontract.  
   3. Creation of the application(s) which will make use of our Smartcontract.  
  <p align="center">
<img width="584" height="532" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain-oracle-devrel/blob/main/images/8-bc-arquitecture.png"/>
</p>

First of all we will create an Hyperledger Fabric network, which initially will be composed of one single organization, but can be easily scaled to as many members as you need. You can follow the instructions in the first labs of the [Using NFT and FT Tokens in Oracle Blockchain](https://github.com/jvillenap/Using-NFT-and-FT-Tokens-in-Oracle-Blockchain/blob/main/README.md "Using NFT and FT Tokens in Oracle Blockchain") HoL to see how you can do it.

Then, we will proceed to create the smartcontract to handle the logic needed to persist and manage into blockchain the entities required by our business use case. 

Once the smartcontract project gets created, we will install and deploy it into the blockchain network we created before, then we will configure the accounts, enrollments, and finally we will execute the initialization of the smartcontract and its NFTs.

At this point, the smartcontract methods have already been published through the API Gateway of our Oracle Blockchain instance, so they are ready to be used by the client applications, in our case the Web Application we have already created with VBCS, and we will provide in the corresponding chapter of the HoL.

Next to last step is the creation of the OCI Storage Bucket where the documents itself will be stored, and finally, last step is reconfiguration the provided VBCS application to point to our newly created Blockchain Network and the new bucket configured in our tenancy. Once all the re-configuration is done, application will be deployed into our tenancy.

<a name="Steps"/>

Here you have the links to each of the labs to fulfill this HoL:  

   [1. Create an Oracle Blockchain Network](../../blob/main/1-create-network/README.md)  
   [2. Preparation of Oracle App Builder development environment](../../blob/main/2-install-AppBuilder/README.md)  
   [3. Creation, Installation, Deployment and Initialization of the SmartContract](../../blob/main/3-smartcontract/README.md)  
   [4. Creation and Configuration of the OCI Storage Bucket](../../blob/main/4-bucket/README.md)   
   [5. Configuration, Deployment, and Test of the Web Application](../../blob/main/5-webbApp/README.md)  


### Prerequisites

<details>
  <summary>Oracle Blockchain</summary>

### Oracle Blockchain  

Leveraging in Oracle Blockchain we can create in minutes an Hyperledger Fabric network as a founder, or join whatever existing Hyperledger Fabric network as a new participant. For the purpose of this HoL, we are going to create the most simple network where there is one single participant, obviously the founder of the network. This single organization network, does not have too much sense, but after the initial creation it can be easily extended by adding new organizations to the network. So, the topology of the network will be something like: 

<p align="center">
<img width="371" height="392" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain-oracle-devrel/blob/main/images/3-bc_topology.png"/>
</p>


In this Hyperledger Fabric network we will create a dedicated channel to be used only for the smartcontracts related with our use case. In my case I've named the channel ***wedocms***, and obviously the only existing participant of the network will join this channel:

<p align="center">
<img width="834" height="153" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain-oracle-devrel/blob/main/images/4-bc-channel.png"/>
</p>

All the administrative taks will be easily executed thanks to the Service Console present for any Oracle Blockchain instances, one for the founder, and the other for the participant:

<p align="center">
<img width="960" height="540" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain-oracle-devrel/blob/main/images/5-bc-adminconsole.png"/>
</p>

</details>
<details>
  <summary>Oracle Blockchain AppBuilder</summary>

### Oracle Blockchain AppBuilder

In the other hand, Oracle App Builder is a low-code development tool created by Oracle to help you in the development of your Smartcontracts, abstracting you from all the intrinsic technical complexities, also if you need to implement a NFT token. So, leveraging Oracle Blockchain and Oracle AppBuilder you will reduce considerably the time and effort required to create your Smartcontract, even more when you need to implement a Smartcontract based in NFTs and/or FTs.

<p align="center">
<img width="960" height="540" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain-oracle-devrel/blob/main/images/6-appbuilder1.png"/>
</p>

AppBuilder will help you to reduce considerably the complexity of the development, packaging, testing, and deployment of Hyperledger Fabric chaincodes, giving you the option to create them in different languages (TypeScript or Go).

<p align="center">
<img width="814" height="392" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain-oracle-devrel/blob/main/images/7-appbuilder2.png"/>
</p>

</details>
<details>
  <summary>Oracle Visual Builder Studio</summary>

### Oracle Visual Builder Studio

Oracle Visual Builder Studio allows you to rapidly create and extend applications using a visual development environment with integrated agile and collaborative development, version control, and continuous delivery automation.
In this HoL we will use this tool only to configure and deploy a precreated web aplication used as a main application to manage our documents. This application is the one who will interact with blockchain and the buckets where documents will be stored.

If you want to know more about Visual Builder Studio please click [here](https://www.oracle.com/application-development/visual-builder-studio/)

If you want to know more about the low-code development tool used to create the web aplication, please click [here](https://docs.oracle.com/en/cloud/paas/app-builder-cloud/visual-builder-developer/index.html) 

</details>
<details>
  <summary>Oracle Storage Buckets</summary>

### Oracle Storage Buckets

Oracle Cloud Infrastructure (OCI) has a huge catalog of storage services. In this HoL we are going to use one of this services, Oracle Object Storage buckets, where the content of our documents will be stored, while its metadata will be stored and managed in blockchain.
Documents will be stored and retrieved directly by our Web Application, which will make use of the API REST offered by OCI Storage buckets. 
</details>

---

## Notes/Issues
MISSING

## URLs
* Nothing at this time

## Contributing
This project is open source.  Please submit your contributions by forking this repository and submitting a pull request!  Oracle appreciates any contributions that are made by the open source community.

## License
Copyright (c) 2022 Oracle and/or its affiliates.

Licensed under the Universal Permissive License (UPL), Version 1.0.

See [LICENSE](LICENSE) for more details.

ORACLE AND ITS AFFILIATES DO NOT PROVIDE ANY WARRANTY WHATSOEVER, EXPRESS OR IMPLIED, FOR ANY SOFTWARE, MATERIAL OR CONTENT OF ANY KIND CONTAINED OR PRODUCED WITHIN THIS REPOSITORY, AND IN PARTICULAR SPECIFICALLY DISCLAIM ANY AND ALL IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE.  FURTHERMORE, ORACLE AND ITS AFFILIATES DO NOT REPRESENT THAT ANY CUSTOMARY SECURITY REVIEW HAS BEEN PERFORMED WITH RESPECT TO ANY SOFTWARE, MATERIAL OR CONTENT CONTAINED OR PRODUCED WITHIN THIS REPOSITORY. IN ADDITION, AND WITHOUT LIMITING THE FOREGOING, THIRD PARTIES MAY HAVE POSTED SOFTWARE, MATERIAL OR CONTENT TO THIS REPOSITORY WITHOUT ANY REVIEW. USE AT YOUR OWN RISK. 
