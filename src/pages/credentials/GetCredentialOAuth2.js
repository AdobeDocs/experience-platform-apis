import React from 'react'
import { GetCredential } from '@adobe/gatsby-theme-aio/src/components/GetCredential';
import platform from "./images/platform.png";

const GetCredentialOAuthS2s = () => {
  return (

    <GetCredential className="getCredentialContainer" templateId="667b0b6a6547797329d24f0d" >

      <GetCredential.SignIn title="Get credentials" paragraph="Create unique credentials that you will use to call multiple APIs from your application." buttonText="Sign in to create credentials" />

      <GetCredential.Form title="Get credentials" paragraph="Create unique credentials that you will use to call multiple APIs from your application." className="formClass">

        <GetCredential.Form.CredentialName label="Credential name" description="Credential name must be unique and between 6 and 45 characters long. A project will be automatically created with the same name in Adobe Developer Console." range="45" />

        <GetCredential.Form.Products label="Included products and services">
          <GetCredential.Form.Product label="Adobe Experience Platform" icon={platform} />
        </GetCredential.Form.Products>

        <GetCredential.Form.AdobeDeveloperConsole label='By checking this box, you agree to' linkText="Adobe Developer Terms of Use" href="https://wwwimages2.adobe.com/content/dam/cc/en/legal/servicetou/Adobe-Developer-Additional-Terms_en-US_20230822.pdf" />

        <GetCredential.Form.Side>
          <div style={{ display: "flex", gap: "32px", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
              <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header">
                OAuth server-to-server credential
              </h3>
              <p className="spectrum-Body spectrum-Body--sizeM">
                This credential allows you to use industry standard OAuth2.0
                libraries to generate access tokens using the OAuth 2.0 client
                credentials grant type.
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
              <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header">
                Learn more
              </h3>
              <a style={{ color: "#0265DC" }} href="https://experienceleague.adobe.com/en/docs/experience-platform/landing/platform-apis/api-authentication">
                Authentication documentation
              </a>
              <a style={{ color: "#0265DC" }} href="https://experienceleague.adobe.com/en/docs/experience-platform/landing/platform-apis/api-guide">
                Adobe Experience Platform API documentation
              </a>
              <a style={{ color: "#0265DC" }} href="https://experienceleague.adobe.com/en/docs/experience-platform">
                Adobe Experience Platform documentation
              </a>
            </div>
          </div>
        </GetCredential.Form.Side>

      </GetCredential.Form>

      <GetCredential.UnknownError helpLink="https://some_help_link" helpLinkText="Get Help" className="unKnownError" />

      <GetCredential.Card title="Your credential is ready to use" developerConsoleManage="Manage on Developer Console" className="card_developer_console" devConsoleDirection="/console">

        <GetCredential.Card.Side>
          <div style={{ display: "flex", gap: "32px", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
              <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header">
                OAuth server-to-server credential
              </h3>
              <p className="spectrum-Body spectrum-Body--sizeM">
                This credential allows you to use industry standard OAuth2.0 libraries to generate access tokens using the OAuth 2.0 client credentials grant type.
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
              <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header">
                Learn more
              </h3>
              <a style={{ color: "#0265DC" }} href="https://experienceleague.adobe.com/en/docs/experience-platform/landing/platform-apis/api-authentication">
                Authentication documentation
              </a>
              <a style={{ color: "#0265DC" }} href="https://experienceleague.adobe.com/en/docs/experience-platform/landing/platform-apis/api-guide">
                Adobe Experience Platform API documentation
              </a>
              <a style={{ color: "#0265DC" }} href="https://experienceleague.adobe.com/en/docs/experience-platform">
                Adobe Experience Platform documentation
              </a>
            </div>
          </div>
        </GetCredential.Card.Side>

        <GetCredential.Card.Products label="Included products and services">
          <GetCredential.Card.Product label="Adobe Experience Platform" icon={platform} />
        </GetCredential.Card.Products>

        <GetCredential.Card.ProjectsDropdown label="Projects" subHeading="Only your projects that contain credentials are shown" />

        <GetCredential.Card.ManageDeveloperConsole label="Manage all your projects and credentials on Adobe Developer Console" direction='/console' />

        <GetCredential.Card.DevConsoleLink heading="Developer Console Project" />

        <GetCredential.Card.AccessToken helpText="" buttonLabel="Generate and copy token" heading="Access Token" />

        <GetCredential.Card.CredentialDetails heading="Credential details">
          <GetCredential.Card.CredentialDetails.ClientId heading="ClientId" />
          <GetCredential.Card.CredentialDetails.ClientSecret heading="Client Secret" buttonLabel="Retrieve and copy client secret" />
          <GetCredential.Card.CredentialDetails.Scopes heading="Scopes" scope="openid,session,AdobeID,read_organizations,additional_info.projectedProductContext" />
        </GetCredential.Card.CredentialDetails>

      </GetCredential.Card>

      <GetCredential.Return title="Previously created projects" paragraph="Select a project and access your existing credentials for Adobe Experience Platform." className="card_developer_console">

        <GetCredential.Return.Side>
          <GetCredential.Return.Side.Custom>
            <div style={{ display: "flex", gap: "30px", flexDirection: "column", width: "100%" }}>
              <h3 className='spectrum-Heading spectrum-Heading--sizeM'>Welcome back</h3>
              <p className="spectrum-Body spectrum-Body--sizeM">You can either re-use an existing credential or create a new credential.</p>
            </div>
          </GetCredential.Return.Side.Custom>
          <GetCredential.Return.Side.NewCredential heading="Need another credential?" buttonLabel="Create new credential" />
        </GetCredential.Return.Side>

        <GetCredential.Return.CredentialDetails heading="Credential details">
          <GetCredential.Return.CredentialDetails.ClientId heading="ClientId" />
          <GetCredential.Return.CredentialDetails.ClientSecret heading="Client Secret" buttonLabel="Retrieve and copy client secret" />
          <GetCredential.Return.CredentialDetails.Scopes heading="Scopes" scope="openid,session,AdobeID,read_organizations,additional_info.projectedProductContext" />
        </GetCredential.Return.CredentialDetails>

        <GetCredential.Return.ProjectsDropdown label="Projects" subHeading="Only your projects that contain credentials are shown" />

        <GetCredential.Return.ManageDeveloperConsole label="Manage all your projects and credentials on Adobe Developer Console" direction='/console/projects' />

        <GetCredential.Return.AccessToken helpText="" buttonLabel="Generate and copy token" heading="Access Token" />

        <GetCredential.Return.DevConsoleLink heading="Developer Console Project" />

        <GetCredential.Return.Products label="Included products and services">
          <GetCredential.Return.Product label="Adobe Experience Platform" icon={platform} />
        </GetCredential.Return.Products>

      </GetCredential.Return>

      <GetCredential.NoDeveloperAccessError title='Get Credentials' docsLinkText="How do I get developer permissions for the [Firefly - Firefly and Creative Cloud Automation API]?" docsLink="" />

      <GetCredential.RequestAccess
        title="Get credentials"
        paragraph="Create unique credentials that you will use to call multiple APIs from your application."
      >
        <GetCredential.RequestAccess.EdgeCase>
          <GetCredential.RequestAccess.EdgeCase.NoProduct title="Your organization does not have access to Adobe Experience Platform." />
          <GetCredential.RequestAccess.EdgeCase.Type1User title="You do not have access to Adobe Experience Platform. Please use another organization and try again." />
          <GetCredential.RequestAccess.EdgeCase.NotMember title="You do not have access to Adobe Experience Platform. Please use another organization and try again." />
        </GetCredential.RequestAccess.EdgeCase>

        <GetCredential.RequestAccess.RestrictedAccess
          title="Restricted Access"
          buttonLabel="Request access"
        >
          <GetCredential.RequestAccess.RestrictedAccess.Products label="Included products and services">
            <GetCredential.RequestAccess.RestrictedAccess.Products.Product
              icon={platform}
              label="Adobe Experience Platform"
            />
          </GetCredential.RequestAccess.RestrictedAccess.Products>
        </GetCredential.RequestAccess.RestrictedAccess>
        <GetCredential.RequestAccess.RequestAccessSide>
          <div style={{ display: "flex", gap: "32px", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
              <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header">
                OAuth server-to-server credential
              </h3>
              <p className="spectrum-Body spectrum-Body--sizeM">
                This credential allows you to use industry standard OAuth2.0 libraries to generate access tokens using the OAuth 2.0 client credentials grant type.
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
              <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header">
                Learn more
              </h3>
              <a style={{ color: "#0265DC" }} href="https://experienceleague.adobe.com/en/docs/experience-platform/landing/platform-apis/api-authentication">
                Authentication documentation
              </a>
              <a style={{ color: "#0265DC" }} href="https://experienceleague.adobe.com/en/docs/experience-platform/landing/platform-apis/api-guide">
                Adobe Experience Platform API documentation
              </a>
              <a style={{ color: "#0265DC" }} href="https://experienceleague.adobe.com/en/docs/experience-platform">
                Adobe Experience Platform documentation
              </a>
            </div>
          </div>
        </GetCredential.RequestAccess.RequestAccessSide>
      </GetCredential.RequestAccess>

      <GetCredential.ErrorCode helpLink="Get help" title="Error code ###" description="Your personal account does not have Developer role permission to access the [Org Name, Inc.] organization in the Adobe Developer Console." buttonLabel="Contact Adobe" buttonLink="https://some_help_link" />

    </GetCredential>

  )
}

export default GetCredentialOAuthS2s;