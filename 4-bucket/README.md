# Creation and Configuration of the OCI Storage Bucket
In this chapter we will configure the Oracle Cloud (OCI) Object Storage Bucket that will allow you to store and retrieve the documents by our Oracle Visual Builder Web application. This actions are executed by the Web Application in sync with the creation of the HASH of the document which will be stored in Blockchain during the upload of the document to the Bucket, and the verification of the validity of the hash when the document is downloaded.

> Note: If you have more interest in know how to code a Visual Builder application to upload/download files from an OCI Storage Bucket, check this interesting blog entry: [Upload / Download files from OCI Storage in a Visual Builder app](https://blogs.oracle.com/vbcs/post/upload-download-files-from-oci-storage-visual-builder).

To enable the usage of the Buckets through the API REST offered by Oracle Cloud (OCI) Object Storage Buckets, we will need to create an OCI API Key related with user allowed to execute the REST API, so here below the two configuration tasks to be executed to be able to use the OCI Buckets in our VBCS Web Application:

<details>
  <summary>1.- Creating the OCI API Key (click to show)</summary>
  
## Creating the API Key

---
To be able to use the OCI Object Storage Buckets from your Visual Builder App you must create an OCI API Key to get access to the OCI Services via API REST 

---
  
First Sign in [OCI web console](https://cloud.oracle.com) with your credentials 

Write your tenancy name and click **Next** Button.

![](./images/oci-signin-01.png)

Then click Continue leaving the Identity Providers as *oracleidentitycloudservice*

![](./images/oci-signin-02.png)

Next write you *User Name* and *Password* and click in **Connect** Button to access to OCI web console.

![](./images/oci-signin-03.png)

![](./images/oci-signin-04.png)

Then click in the **Profile icon** at the top right of the console to access to the user **Settings**.

![](./images/oci-apikey-01.png)

Scroll down and click **API Keys** in the *Resources menu*

![](./images/oci-apikey-02.png)

Next click **Add API Key** button to add a new API Key.

![](./images/oci-apikey-03.png)

Select **Generate API Key Pair**. 
> Note: you could use your own public and private keys in pem format, but in this workshop and for academical purposes we'll use the auto generathed keys.

![](./images/oci-apikey-04.png)

Next you must to download the *Private* and *Public* Keys to your laptop/desktop.

![](./images/oci-apikey-05.png)

After that, you might have two **.pem** files one mark as public.

![](./images/oci-apikey-06.png)

Then click in **Add** button.

![](./images/oci-apikey-07.png)

Next window is the summary or **Configuration File Preview**. Click in the **copy** link to copy your OCI API credentials to a text file in your local computer as you will need them in future steps in the workshop. Then click **Close** Button to finish the process.

> IMPORTANT: save this details as you will need some of them together with the private key in next steps of the HoL.

![](./images/oci-apikey-08.png)

You should have a new API key created and you should see the Fingerprint key in the OCI web console. 

![](./images/oci-apikey-09.png)

You have access to the Config file that you copied before to your desktop by clicking in the ***three vertical*** dots in the ***Fingerprint*** row and select ***View Config File***.

![](./images/oci-apikey-10.png)

 And that's all. Congratulations. You successfully generated your API keys.

</details>
<details>
  <summary>2.- Creating the OCI Storage Bucket (click to show)</summary>

## Create a Bucket in OCI Storage
  
---
OCI Object Storage is a versatile service which is very commonly used to store application data like images, files etc. Here, we will show how to create a OCI Storage Bucket to be used to upload and download PDF documents in it from our Visual Builder app.

---

First we need to create a bucket where our objects will be stored. To do it, from the OCI Console, navigate to ***Storage → Buckets***. For simplicity it can be createdas Public, so that it doesn't require authentication, but you could achieve the same with Private visibility buckets as well.

![](./images/oci-bucket-01.png)

Then, select a compartment where you want to create the Bucket, and click the ***Create Bucket*** button.

![](./images/oci-bucket-02.png)

Next, give a name to the bucet, leave the other configuration parameters as default, and click in the **Create** Button to finish the creation of the bucket.

![](./images/oci-bucket-03.png)

The new bucket should appear in the selected compartment.

![](./images/oci-bucket-04.png)

Selecting the created bucket, you can see all its details.

![](./images/oci-bucket-05.png)

And finally, pushing in the Objects menu option in the lef menu, you can see the objects uploaded to it.

![](./images/oci-bucket-06.png)

And that's all. Congratulations. You have successfully created the OCI Storage Bucket.

</details>
