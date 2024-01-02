# Create an Oracle Blockchain Network

#### Table of Contents  
[Introduction](#Introduction)  
[Prerequisites](#Prerequisites)  
[Creation of the Founder instance](#createFounder)  
[Create a Channel](#channelCreate)
[Create User Accounts](#createAcconts)  
[Create Enrollments in the REST Proxy nodes](#createEnrollments)  

<a name="Introduction"/>

## Introduction

For the creation of an Hyperledger Fabric network based in Oracle Blockchain, you can use two different kinds of Oracle Blockchain instances:
- [Oracle Blockchain Cloud Service](https://www.oracle.com/es/blockchain/ "Oracle Blockchain Cloud Service")
- [Oracle Blockchain Platform Enterprise Edition](https://www.oracle.com/blockchain/blockchain-platform-enterprise-edition/ "Oracle Blockchain Platform Enterprise Edition")

For simplicity in this HoL we are going to use the first option, the Cloud Version. 

Also for simplicity, we are going to create a single instance HLF network, as per the use case we can show the functionality within one single organization belonging to the network. In case you want to extend the interchangeability of the expedients among departments from different organizations, you can add a new participant member to the network following the instructions in the following link:
- [How to create an HLF network with a founder instance, and a participant instance](https://github.com/jvillenap/Using-NFT-and-FT-Tokens-in-Oracle-Blockchain/blob/main/01-Create-The-Network/README.md "How to create an HLF network with a founder instance, and a participant instance").

As a preassembled PaaS, Oracle Blockchain Platform includes all the dependencies required to provision and manage a blockchain network: compute, storage, containers, identity services, event services, and management services. Oracle Blockchain Platform also includes the blockchain network console to support integrated operations. This helps you start developing applications within minutes.

<a name="Prerequisites"/>

## Prerequisites
- Access to an Oracle Cloud tenancy

<a name="createFounder"/>

## Creation of the Founder instance
1. In the OCI services menu, select ***Developer Services*** and click on ***Blockchain Platform***.
![Select Blockchain Service from the OCI console](https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-1.png "Select Blockchain Service from the OCI console")

2. From the compartment combo selector located in the left side of the OCI Console, ensure the compartment where you want to create the instance is selected:
<p align="center"  alt="Select The compartment where the instance of the founder organization will be created">
<img width="283" height="257" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-2.png"/>
</p>

3. Press the button Create Blockchain Platform.
![Press the button Create Blockchain Platform](https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-3.png "Press the button Create Blockchain Platform")

4. Give your platform a Display Name (e.g. ***org1***), optionally add a Description, and keep the remaining default selections, as they are the settings to create a Founder instance, which will be the founder of a new Hyperledger Fabric Network, and using the standard shape, which has exactly the same functionality as the Enterprise shape but at a lower cost, but perfectly valid for development work. Click ***Create***.
<p align="center">
<img width="727" height="848" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-4.png"/>
</p>

5. Once pushed the ***Create*** button, the creation of the instance for this Organization (org1) has been submited, and will be ready in a few minutes:
<p align="center">
<img width="834" height="415" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-5.png"/>
</p>

6. When the Founder instance gets created, you will be able to access to the Oracle Blockchain console for this instance by pushing the ***Service Console*** button:
<p align="center">
<img width="833" height="417" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-6.png"/>
</p>


<a name="channelCreate"/>

## Create a Channel

We need to join the organizations at the channel level to allow communication between the founder and the participant.

1. From the founder (***org1***) console, select the ***Channels*** tab. Click ***Create a New Channel***.
<p align="center">
<img width="641" height="271" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-20.png"/>
</p>

2. Fill out the form as shown and click ***Submit***.
- Set ***wedocms*** as your Channel Name
- Select both ***peer0*** and ***peer1*** under Peers to Join Channel
<p align="center">
<img width="642" height="523" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-21.png"/>
</p>

3. Confirm the creation by clicking ***Yes*** in the confirmation popup.
<p align="center">
<img width="639" height="519" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-22.png"/>
</p>

4. Check that the channel table displays the new channel. Click on ***wedocms*** to view channel details.
<p align="center">
<img width="644" height="292" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-23.png"/>
</p>

5. In this details page you can see all the details about the channel, like transactions saved into the blocks of the ledger, chaincodes deployed in the channel, configured Orderers and Peers, organizations belonging to the channel, ...
<p align="center">
<img width="839" height="375" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-24.png"/>
</p>


<a name="createAcconts"/>

## Create User Accounts
We are going to use Oracle Identity Cloud (IDCS) to create at least one user for each of the departments among the expedients can be interchanged. To each of those users an account will be created to hold in it the different expedients they own.

We are going to create the users ***cmsrsk1***, who belongs to the Risks Department, the user ***cmsfin001*** who belongs to the Finance Department, and the user ***cmsleg001*** who belongs to the Legal Department.

1. From the OCI console, select the burger menu icon in the top left-hand corner and click on ***Identity & Security*** menu option, and into this option, select the ***Federation*** option from the ***Identity*** section.
<p align="center">
<img width="773" height="402" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-32.png"/>
</p>

2. Click in the link ***OracleIdentityCloudService***.
<p align="center">
<img width="770" height="345" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-33.png"/>
</p>

3. Push the button ***Create User***.
<p align="center">
<img width="958" height="378" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-34.png"/>
</p>

3. Set as username the value you want to use for login into the console or as the authorization username to execute the REST APIs of our smartcontract. In the email field set the email of your OCI account, so you will receive the email to reset the password for this user, and push the ***Create*** button:
<p align="center">
<img width="652" height="331" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-35.png"/>
</p>

4. In the next step you are asked to assign roles to recently created user, to do that push the ***Assign Roles*** Button.
<p align="center">
<img width="1148" height="324" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-36.png"/>
</p>

5. In the three dots of the ***AUTOBLKCHAIN*** Service, select the option to ***Manage Instance Access***:
<p align="center">
<img width="695" height="373" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-37.png"/>
</p>

6. As the HLF network is a single organization networ, all the users will belong to the same organization, so all of them will be granted to the single blockchain instance we have created. In case we add more instances to the network, each existing organization/instance will have its own users. After assign the correct roles, push the ***Update Instance Settings*** Button:

| username        | Instance      | Roles              |
| --------------- |:-------------:| ------------------ |
| cmsrsk001       | org1-....     | ADMIN, REST_CLIENT |
| cmsfin001       | org1-....     | ADMIN, REST_CLIENT |
| cmsleg001       | org1-....     | ADMIN, REST_CLIENT |

<p align="center">
<img width="950" height="466" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-38.png"/>
</p>

7. You should see the roles properly assgined.
<p align="center">
<img width="721" height="378" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-39.png"/>
</p>

8. You will be asked to send an email to the email address to the user informing the roles for which has been granted. It's up to you sending or not the email
<p align="center">
<img width="691" height="357" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-40.png"/>
</p>

9. During the user creation process, you should receive to the email account associated with the recently created user, an email to reset the password for this user. Use the link provided to set the password of the user just created.
<p align="center">
<img width="610" height="900" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-41.png"/>
</p>


<a name="createEnrollments"/>

## Create Enrollments in the REST Proxy nodes
Oracle Blockchain Platform supports enrollments to the REST proxy. These enrollments are used in chaincodes where FT or NFT tokens exist, to map the identity of the caller to the role executing the transaction. To do this, you just need to create the relation of the user to the role defined in blockchain, and for simplicity you can name the role as the user.

Each enrollment must be created in the instance where the user with such role are allowed to execute transactions trhough the REST Proxy on that Blockchain instance, so enrollment ***cmsrsk1*** assigned to the user ***cmsrsk001*** needs to be created in the REST Proxy node of the org1  (founder) instance, and the same for the other two users:
| username        | enrollment    | Instance      |
| --------------- |:-------------:| ------------- |
| cmsrsk001       | cmsrsk001     |     org1      |
| cmsfin001       | cmsfin001     |     org1      |
| cmsleg001       | cmsleg001     |     org1      |



1. While logged into the org1 founder instance, navigate to ***Nodes*** tab in the Blockchain console.

2. Click on the hamburger menu besides restproxy and select 'View or manage enrollments.'
<p align="center">
<img width="658" height="216" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-42.png"/>
</p>

3. Select ***Create New Enrollment***.
<p align="center">
<img width="501" height="243" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-43.png"/>
</p>

4. Set Enrollment ID as ***cmsrsk001***, User ID as ***cmsrsk001***, and push the ***Enroll*** button.
<p align="center">
<img width="503" height="328" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-44.png"/>
</p>

This last step must be repited to create the enrollments for all the three users: ***cmsrsk001***, ***cmsfin001***, and ***cmsleg001***. And in case other users from other organization were created, the enrollments for those users should be created in the REST Proxy of the blockchain instance to which they belong.
<p align="center">
<img width="503" height="327" src="https://github.com/jvillenap/CMS-Secured-by-Blockchain/blob/main/1-create-network/images/1-obp-2-45.png"/>
</p>
