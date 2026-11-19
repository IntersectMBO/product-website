---
title: "Independent Technical Review - NexTrium Milestone 1 (CPC-26-0015)"
sidebar_label: "Independent Technical Review"
---

**NEXTRIUM**

Global Innovations Ltd

**Independent Technical Review**

*Independent verification of VAL-003 and VAL-006 applicant-supplied validation evidence*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D-M1-03                                                                         |
| **Version**               | 1.0                                                                             |
| **Date**                  | 6 August 2026                                                                   |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Reviewer Statement**

This review was conducted and issued by Samir Idris as an independent technical reviewer engaged under Milestone 1 of Project CPC-26-0015. The reviewer holds no interest in NexTrium Global Innovations Ltd or Zivana Protocol and was engaged specifically to verify applicant-supplied technical claims.

| **Item**          | **VAL-003**                                                       | **VAL-006**                                |
|-------------------|-------------------------------------------------------------------|--------------------------------------------|
| Review date       | 6 August 2026                                                     | 5 August 2026                              |
| Scope             | identus-setup/ and cardano-preprod/                               | celo-minipay/                              |
| Reviewer position | Independent source review and live clean-environment reproduction | Independent reproduction and source review |
| Review status     | Final                                                             | Final                                      |
| Overall result    | Pass                                                              | Pass with limitations                      |

**Scope of Validation**

The VAL exercises validate whether specified technology stacks function for the Zivana Protocol use cases described in the Preliminary VAL-Case Evidence Set. They are feasibility validations, not production deployments. Production readiness was not a validation objective and is not assessed as a pass or fail condition in this review.

Where this review records production-security or operational hardening observations, they are recorded as out-of-scope observations for the applicant engineering team and do not affect the functional verdict. They are carried in a separate engineering document and are not part of this deliverable.

**Part A. VAL-003 Hyperledger Identus on Cardano**

**A1. Executive Conclusion**

Functional verdict: Pass.

The core VAL-003 claim was reproduced from a fresh local setup.

- A Cardano-backed issuer created and published a new did:prism on Cardano preprod.

- Cardano Wallet confirmed the publication transaction, and the local DB Sync database placed it at block 5,020,242.

- A schema was registered and a JWT credential was issued over DIDComm.

- The holder received the credential and later sent it to a separate verifier as a presentation.

- The verifier resolved the issuer DID from its own PRISM-node database.

- The verifier returned PresentationVerified with no recorded failure.

Clean-environment reproducibility verdict: Weak as documented. The flow worked only after missing environment variables were supplied, Docker Desktop networking was changed, an issuer DID with an assertionMethod key was created, and both Cardano indexing stages were allowed to run for many hours. The current README does not provide a reliable one-command or quick-start setup.

Production-readiness verdict: Not established. This was a local technical test. The fixed application passwords, HTTP-only services, development Vault setup, and unpinned Cardano node image were not validated for production use. Production readiness was not a validation objective.

**A2. Evidence Standard**

The review covered all tracked operational source and configuration files under identus-setup/, the shared Cardano stack under cardano-preprod/, relevant Git history, and a live reproduction on Docker Desktop with WSL2.

README claims were confirmed only when they matched the source code or a result observed during this reproduction, such as an API response, database query, command output, or screenshot. The report contains no seeds, mnemonics, wallet passphrases, database passwords, Vault tokens, administrator tokens, or private keys. Screenshots were redacted only to hide local paths and API keys. Validation results were not changed.

**A3. Architecture and Execution Flow**

| **Service** | **Purpose**                                                       | **Confirmed configuration**                               |
|-------------|-------------------------------------------------------------------|-----------------------------------------------------------|
| Cloud Agent | REST API, DID management, DIDComm, credentials, and presentations | Defined in all three role Compose files                   |
| PRISM node  | Publishes or resolves PRISM DID operations                        | Issuer and verifier use Cardano; holder uses in-memory    |
| PostgreSQL  | Stores Cloud Agent and PRISM-node state                           | Initializes pollux, connect, agent, and node_db databases |
| Vault       | Stores wallet secrets and private key material                    | Uses Raft storage and KV v2                               |

The holder in-memory setting describes its local PRISM ledger mode. It does not mean the credential is kept only in temporary RAM. PostgreSQL stores credential and protocol records, while Vault handles protected key material.

**A4. Independent Reproduction Results**

| **Validation step**                 | **Observed result**                                                             | **Assessment**                 |
|-------------------------------------|---------------------------------------------------------------------------------|--------------------------------|
| Identus Compose parsing             | Issuer, holder, and verifier files passed no-interpolation configuration checks | Pass                           |
| Cardano node and Wallet             | Wallet network endpoint reached status=ready in node mode                       | Pass                           |
| Holder, issuer, and verifier health | Each Cloud Agent returned version 2.2.0 with HTTP 200                           | Pass                           |
| API-key registration                | Holder, issuer, and verifier registrations returned HTTP 201                    | Pass                           |
| Holder DID                          | Long-form did:prism creation returned HTTP 201                                  | Pass                           |
| Issuer DID                          | Replacement DID with authentication and assertion-method keys returned HTTP 201 | Pass                           |
| DID publication request             | Publication returned HTTP 202                                                   | Pass                           |
| Cardano Wallet confirmation         | Transaction became outgoing in_ledger with metadata label 21325                 | Pass                           |
| Independent DB Sync confirmation    | Transaction was found at Cardano block 5,020,242                                | Pass                           |
| Schema registration                 | Version 1.0.1 schema returned HTTP 201                                          | Pass                           |
| Issuer-to-holder DIDComm            | Records reached ConnectionResponseSent and ConnectionResponseReceived           | Pass after networking override |
| Credential issuance                 | Issuer reached CredentialSent; holder reached CredentialReceived                | Pass                           |
| Verifier-to-holder DIDComm          | Records reached ConnectionResponseSent and ConnectionResponseReceived           | Pass after networking override |
| Verifier DID resolution             | Fresh issuer DID suffix appeared in verifier node_db.did_data                   | Pass                           |
| Holder presentation                 | Holder record reached PresentationSent with no failure                          | Pass                           |
| Verifier result                     | Verifier record reached PresentationVerified with no failure                    | Pass                           |

**A5. Public Identifiers From This Reproduction**

| **Item**                     | **Identifier**                                                             |
|------------------------------|----------------------------------------------------------------------------|
| Issuer DID                   | did:prism:3f4aa98cbc44c7439b207d5018b752ef2be371cc24a7a4438b9b73b4fbb85f14 |
| Publication transaction      | 80b879760c1eb887542d64ab064f7c16c0a50c8ea474f102b52fe4fb6559f821           |
| Publication block            | 5,020,242                                                                  |
| Schema GUID                  | 90802def-98c2-3a23-afe4-d0621ec47e6f                                       |
| Issuer credential record     | bc8dd08e-a481-4433-9eb9-bee7d89d0e8c                                       |
| Holder credential record     | 9a236935-f52e-43e1-b78e-8b8ae543ba9f                                       |
| Presentation thread          | 512a261d-7b5a-4231-87c8-4b4b778a0d78                                       |
| Holder presentation record   | ed813ec1-bd9c-492c-87b2-9af488555750                                       |
| Verifier presentation record | 0a5ea099-bff6-4704-9d4c-bacd9bc30d2d                                       |

**A6. Synchronisation Behaviour Observed**

The reproduction involved three separate synchronisation steps.

- The Cardano node downloaded and followed Cardano preprod. Mithril bootstrap made the node and Cardano Wallet usable much earlier than a full genesis replay would.

- Cardano DB Sync imported and indexed historical blocks into its PostgreSQL database. It required many active hours across multiple sessions before reaching epoch 305 and reporting Consistent.

- The verifier PRISM node then scanned the Cardano DB Sync database and built its own PRISM state in node_db. Logs showed it reading individual Cardano blocks. The verifier DID query remained empty until this second scan reached the publication block.

During one stable interval, the PRISM scan processed about 113 to 116 Cardano blocks per second. This explains why a ready Cardano Wallet and a consistent DB Sync database do not mean that a new verifier can resolve DIDs immediately.

**A7. Original Failure Evidence and Resolution History**

Historical JVM initialisation problem. The README states that PRISM node 2.6.0 accepts testnet or mainnet and that using NODE_CARDANO_NETWORK=preprod causes a NoSuchElementException during startup. This fits a Scala or JVM application failing to map an unsupported enum value. The current issuer and verifier Compose files use NODE_CARDANO_NETWORK: testnet. Both PRISM nodes started in this reproduction. The old failure was not recreated, so the exact stack trace is supported only by the repository historical account.

False in-memory publication behaviour. The README states that omitting NODE_LEDGER=cardano can produce an apparent PUBLISHED result without a Cardano transaction. Current issuer and verifier files set NODE_LEDGER: cardano; the holder intentionally uses in-memory. A real Cardano publication transaction was observed, so this test did not use the false in-memory publication path.

| **Commit** | **Repository change**                                                                                                                                                      | **Review interpretation**                                                                              |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| d7d55fe    | Added the comprehensive VAL-003 README and engineering findings                                                                                                            | Documents the proposed operational solution                                                            |
| 66e0eec    | Changed PRISM network configuration from preprod to testnet, added NODE_LEDGER=cardano, added required Cardano credentials, and introduced persistent Vault initialisation | Strongest direct source evidence for how the false publication and JVM startup problems were corrected |
| f9fafcf    | Added pinned Docker subnets, required passwords, passphrase variables, and restart-safe Vault token handling                                                               | Shows fixes introduced after review feedback                                                           |
| 8a5979e    | Declared VAL-003 complete and added the three role stacks through the final PR history                                                                                     | Source of the current end-to-end success claim; its tree matches f9fafcf                               |

**A8. Findings Relevant to Research Scope**

Findings below bear on infrastructure barriers and developer experience within the research scope. Repository hygiene and production-security findings are carried separately and are not reproduced here.

F-01: Cardano environment template is missing. Severity high for clean-environment reproducibility. The README instructs users to copy cardano-preprod/.env.example, but that file does not exist. The Cardano Compose file requires DBSYNC_POSTGRES_PASSWORD. The first Cardano Compose configuration check failed because the variable was missing.

F-02: Issuer and verifier templates omit a required DB Sync password. Severity high for clean-environment reproducibility. Both Cardano-backed PRISM nodes require DBSYNC_POSTGRES_PASSWORD. Neither related .env.example defines it. The copied role templates were insufficient for normal interpolation and the shared DB Sync password had to be added manually.

F-03: Default DIDComm URLs failed on Docker Desktop and WSL2. Severity high for the tested environment. The issuer, holder, and verifier advertise fixed bridge-gateway URLs. The holder timed out while sending to the issuer advertised address. Recreating only the Cloud Agents with host.docker.internal URLs and published host ports restored delivery. Both credential and presentation DIDComm flows then completed. Fixed subnets kept Docker addresses predictable, but the cross-network gateway addresses were still unreachable on Docker Desktop with WSL2. The working override is not documented.

F-04: The total synchronisation requirement is understated. Severity high for planning and developer experience. The README Cardano quick-start section says to wait 15 to 30 minutes. The Cardano node became usable earlier through Mithril, but Cardano DB Sync required many additional hours. A fresh verifier then performed its own PRISM scan over the DB Sync database. The README separately warns that verifier PRISM sync can take two to three hours, but it does not clearly explain the two indexing stages or the total clean-start time.

F-06: Historical JVM failure is documented but not preserved as direct evidence. The README describes the NoSuchElementException and the testnet correction, but the current tree contains no old stack trace, failing Compose file, test, or log. The corrected configuration started successfully.

F-09: The README overstates JWT request-time schema and issuer filtering. Severity medium for verification-policy claims. The README sends schemaId and trustIssuers inside proofs. Cloud Agent 2.2.0 accepted that request, but its stored record contained an empty proofs list and a presentation definition with no input descriptors. The extra filters were silently omitted. The official Cloud Agent 2.2.0 JWT present-proof guide uses an empty proofs list and has the holder select a credential record through proofId. The live flow followed that behaviour and returned PresentationVerified. This test proves that the selected JWT credential was presented and cryptographically verified. It does not prove that Cloud Agent enforced the README schema or trusted-issuer filters. Applications that need those checks should enforce them separately.

F-10: Holder DID documentation mixes two different DID roles. Severity low for function, medium for developer understanding. The holder environment template says the holder DID is a Peer DID. The README separately instructs the holder to create a long-form did:prism and use it when accepting the credential offer. Both DID types appeared in the live flow but served different purposes. The DIDComm connection used did:peer identifiers for private agent-to-agent messaging. The credential subject used the holder long-form did:prism. Because the holder PRISM node uses in-memory, that holder DID was not anchored on Cardano during this review.

**A9. Comparison With Repository Claims**

| **Repository claim**                                                          | **Independent result**                                                                                                | **Assessment**                                        |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| DID publication, credential issuance, and presentation verification succeeded | All three stages were reproduced with a fresh issuer DID and final PresentationVerified state                         | Confirmed functionally                                |
| Cardano setup starts by copying .env.example                                  | The referenced Cardano template is absent                                                                             | Incorrect                                             |
| Initial node sync takes 15 to 30 minutes                                      | Node readiness was faster than full verification readiness; DB Sync and verifier PRISM required many additional hours | Incomplete                                            |
| Pinned gateway addresses make DIDComm stable                                  | Default addresses timed out on Docker Desktop and WSL2; a host-address override was required                          | Not reproducible as documented on the tested platform |
| Verifier PRISM sync takes roughly two to three hours                          | A separate verifier scan was directly observed and took hours across sessions                                         | Confirmed directionally                               |
| Holder uses an in-memory ledger                                               | Holder Compose uses NODE_LEDGER: in-memory                                                                            | Confirmed                                             |
| Holder DID is only a Peer DID                                                 | DIDComm used Peer DIDs, but the credential subject used a long-form PRISM DID as instructed elsewhere                 | Inconsistent terminology                              |
| Issuer and verifier use Cardano                                               | Both set NODE_LEDGER: cardano; a real Cardano transaction and verifier resolution were observed                       | Confirmed                                             |
| Presentation request filters by schema and trusted issuer                     | Cloud Agent omitted those fields from the stored JWT request                                                          | Misleading for version 2.2.0                          |

**A10. Reproducibility Assessment**

| **Area**                  | **Assessment**                         | **Reason**                                                                                 |
|---------------------------|----------------------------------------|--------------------------------------------------------------------------------------------|
| Cardano node and Wallet   | Moderate                               | Functional after manual environment setup; node image is not pinned                        |
| Cardano DB Sync           | Weak for time-constrained review       | Complete historical indexing requires many hours and substantial disk activity             |
| Holder stack              | Moderate                               | Booted and persisted state, but the documented JavaScript seed path lacks its dependency   |
| Issuer stack              | Moderate                               | Published successfully after missing variables and key-purpose requirements were corrected |
| DIDComm networking        | Weak by default on Docker Desktop      | Runtime host-address override was required                                                 |
| Verifier DID resolution   | Functional but slow from a clean state | Requires both DB Sync catch-up and a second PRISM scan                                     |
| Presentation verification | Functional                             | Holder reached PresentationSent; verifier reached PresentationVerified                     |

**A11. VAL-003 Verdict**

VAL-003 passes its core functional validation with significant reproducibility and documentation limitations.

The main functional claim is supported by the live test. A new issuer DID was anchored on Cardano preprod, the issuer sent a JWT credential to the holder, and a separate verifier resolved the DID and returned PresentationVerified.

A new user still cannot reproduce the flow reliably from the README alone. Missing environment variables, host-specific DIDComm routing, long sync times, the undeclared seed-generator dependency, unclear holder DID terminology, and the JWT proof-filter mismatch remain.

| **Decision area**                                                       | **Result**                                       |
|-------------------------------------------------------------------------|--------------------------------------------------|
| Core functional proof                                                   | Pass                                             |
| Reproducible exactly from the current README on Docker Desktop and WSL2 | Fail                                             |
| Production-security readiness                                           | Not demonstrated, and not a validation objective |

**Part B. VAL-006 Celo MiniPay Stablecoin Distribution**

**B1. Executive Conclusion**

Overall result: Pass with limitations.

The core VAL-006 payment flow passed in this review.

- The stablecoin splitter compiled and all seven local tests passed.

- A fresh CusdPaySplitter was deployed and verified on Celo Sepolia.

- The test wallet approved and deposited 1 USDC.

- The contract sent 0.4 USDC to a real MiniPay testnet wallet and returned 0.6 USDC to the test wallet.

- No USDC remained in the contract.

- MiniPay showed the incoming payment of 0.40 dollars, and its blockchain receipt marked the distribute call as successful on testnet.

The test showed contract execution on Celo Sepolia and delivery to a MiniPay wallet address. It did not show a working MiniPay Mini App, MiniPay signing the contract calls, or phone-number lookup. The repository only documents those features and provides sample code.

The earliest VAL-006 README in Git history, commit f690496, calls MiniPay SDK integration and phone-number transfers an Extension. No RFP or acceptance document in the repository makes that extension required. The current README links only to the conceptual MiniPay guide.

VAL-006 passes for the core stablecoin splitter and successful delivery to MiniPay. The optional MiniPay SDK and phone-number transfer extension is not complete. This is a technical validation result, not approval for production use.

**B2. Evidence Observed in the Live Test**

- Celo Sepolia chain ID 11142220 and RPC configuration worked as configured.

- USDC at 0x01C5C0122039549AD1493B8220cABEdD739BC44E behaved as a six-decimal ERC-20.

- npm ci installed the locked dependency tree; npm run compile compiled three Solidity files; npm test passed all seven cases.

- Fresh deployment address 0xdAF349fc5E94CCAD7Ee6a627d0d73D7C66671e20, confirmed fully verified on Blockscout and identified as CusdPaySplitter.

- The live approve, deposit, and distribute sequence completed successfully.

- MiniPay developer mode and Use test net were enabled in the normal iOS MiniPay application.

- MiniPay accepted USDC deposits on the Celo network and displayed the public testnet wallet address 0x7Ce5C1E4c65B4762C5d9C04311E2E722DEf68F01.

- The MiniPay Activity screen recorded the payment received, and the in-app blockchain receipt identified the transaction as testnet, method distribute, status Success.

**B3. Evidence in Source but Not Executed End to End**

- The contract fixes the token address at deployment.

- Only the owner can call distribute.

- Deposits require prior ERC-20 approval.

- The script calculates a fixed 40 to 60 split between exactly two recipients.

- The repository describes MiniPay provider detection and SocialConnect or ODIS phone lookup, but does not implement or test them.

**B4. Not Tested**

- The older deployment and transaction set recorded in the README was not needed because a separate fresh deployment was made.

- The claimed MiniPay outbound fee-currency gas failure was not reproduced. Git history shows that claim entered in commit 858fce5, but the reviewed commit contains no supporting screenshot or machine-readable log.

- Phone-number lookup, SocialConnect or ODIS resolution, invitation and escrow fallback, and phone-number-based payment were not executed.

- A Mini App was not loaded inside MiniPay because the repository contains no runnable Mini App frontend.

- Mainnet MiniPay behaviour was not tested.

**B5. Live Transaction Record**

| **Step**            | **Transaction**                                                    | **Result**              |
|---------------------|--------------------------------------------------------------------|-------------------------|
| Approve 1 USDC      | 0xa454814165e371457606ccab5c7d96d3ee4bbd3d70540666cd477c3cee159171 | Completed               |
| Deposit 1 USDC      | 0xa03a36c64b03f2e7856431997f66c2c9cb0e1e58438372966570420d532844e8 | Completed               |
| Distribute 40 to 60 | 0x563b11450fcf7ecf910554a63634a326a8e47be671a83a405d0cc5952cd6c18e | Success; block 32676979 |

Final reported balances: MiniPay wallet 0.4 USDC, test EOA 18.6 USDC total, splitter 0 USDC. The output matches the fixed split calculation in the simulation script.

**B6. Privacy Check on Preserved Evidence**

Five screenshots were checked for personal or secret information. None shows a phone number, Apple ID, email, recovery phrase, private key, one-time password, or passcode. Wallet addresses and transaction hashes are public blockchain data, but they can be linked to this test and should only be published intentionally.

**B7. Comparison With Repository Claims**

| **Repository claim**                                               | **Independent result**                                                                                                                   | **Assessment**                                                      |
|--------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| Celo Sepolia replaces the named Alfajores target                   | Celo Sepolia worked with chain ID 11142220                                                                                               | Confirmed                                                           |
| Default stablecoin is Sepolia USDC                                 | 20 faucet USDC was received and used successfully                                                                                        | Confirmed                                                           |
| Local flow is approve, deposit, distribute                         | Seven tests passed                                                                                                                       | Confirmed                                                           |
| Live script logs hashes and balances                               | Both live simulations completed                                                                                                          | Confirmed                                                           |
| Payment can be delivered to MiniPay                                | A real MiniPay iOS testnet wallet received 0.4 USDC                                                                                      | Confirmed for receiving funds only                                  |
| The README links to MiniPay SDK and phone-number transfer guidance | Prose and a small code example exist; there is no runnable Mini App or SocialConnect implementation                                      | Documentation exists, but the optional extension is not implemented |
| There is no shipping consumer testnet build                        | The normal iOS app exposes a hidden developer and testnet toggle, and current official MiniPay documentation describes this testnet mode | Repository documentation is outdated and misleading                 |
| MiniPay testnet transfers fail                                     | Receiving worked; outbound sending from MiniPay was not tested                                                                           | Unverified                                                          |

**B8. Findings Relevant to Research Scope**

F-01: Optional MiniPay integration is documentation only. The repository has no Mini App frontend and no SocialConnect or ODIS implementation. The guide provides conceptual steps and a small example, but the dependency list contains only Hardhat development dependencies. The test proves that a MiniPay-controlled EVM address received funds. It does not prove MiniPay SDK use, signing through MiniPay, or phone-number payments. This does not change the core result because the earliest task description marked those features as an extension.

F-10: MiniPay documentation is incomplete and partly stale. Severity medium. The repository guide says there is no shipping consumer testnet build and points readers toward an in-app dApp tester or mainnet. The normal standalone iOS app used in this review exposed Developer mode and Use test net. The same guide describes MiniPay mainly as the Opera Mini built-in wallet, although a standalone iOS app was used successfully. A reviewer could wrongly conclude that direct Sepolia testing in the consumer app is impossible.

F-11: Historical gas-bug evidence is not stored in the repository. Severity medium for auditability. The friction report records precise gas values and an Android failure, introduced in commit 858fce5, but the reviewed commit contains no screenshot or log file supporting it. The claim may be genuine, but a new reviewer cannot inspect its original evidence. Until it is reproduced, the report should describe it as historical and specific to that device and version.

F-12: The simulation only supports two recipients. Severity low to medium. The contract accepts arrays, but the script takes only the first two supplied addresses and silently ignores any extra entries, then hardcodes a 40 to 60 split. The automated demonstration does not validate the broader many-recipients description in the README.

**B9. Acceptance Matrix**

| **Validation target**                         | **Result**                          | **Evidence**                                                     |
|-----------------------------------------------|-------------------------------------|------------------------------------------------------------------|
| Stablecoin splitter compiles                  | Pass                                | Independent Hardhat compile                                      |
| Contract logic tests                          | Pass                                | Seven of seven tests                                             |
| Deploy to current Celo testnet                | Pass                                | Fresh Celo Sepolia contract                                      |
| Explorer verification                         | Pass                                | Blockscout verified source                                       |
| Stablecoin approve and deposit                | Pass                                | Independent transaction links                                    |
| 40 to 60 distribution                         | Pass                                | 0.4 and 0.6 USDC results                                         |
| Zero residual                                 | Pass                                | Script and later balance read                                    |
| Actual MiniPay wallet receives payout         | Pass                                | MiniPay Activity and blockchain receipt                          |
| MiniPay test interface evidence               | Pass                                | Developer and testnet settings, and receipt screenshots          |
| MiniPay signs contract calls                  | Optional extension, not tested      | Calls were signed by the throwaway Hardhat EOA                   |
| MiniPay Mini App runs from this repository    | Optional extension, not implemented | No frontend implementation                                       |
| Phone-number transfer                         | Optional extension, not implemented | Documentation only                                               |
| Outbound send from MiniPay                    | Not required and not tested         | Historical failure claim not repeated                            |
| Production-ready multi-recipient distribution | Outside validation scope            | Custodial owner and unbounded loop remain production limitations |

**B10. Reproducibility Assessment**

| **Area**                                      | **Assessment**                        | **Reason**                                                                                                                   |
|-----------------------------------------------|---------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Local contract testing                        | Good                                  | Lockfile, mock token, compile script and seven tests make local testing straightforward from a clean checkout                |
| Live Celo Sepolia deployment                  | Moderate                              | Depends on public RPC, faucets, current token addresses, a supported Node version, and explorer availability                 |
| MiniPay receipt                               | Moderate                              | Reproducible on iOS after enabling hidden developer and testnet settings, which are not documented clearly in the repository |
| Optional MiniPay and phone-number integration | Not reproducible from this repository | No runnable Mini App or phone-number resolution code exists                                                                  |

**B11. VAL-006 Verdict**

Pass with limitations.

A fresh verified contract sent 0.4 test USDC to an actual MiniPay iOS testnet wallet. MiniPay showed the payment in its Activity screen and displayed a successful testnet blockchain receipt.

This repository is a Hardhat contract project, not a MiniPay application. It proves the on-chain split and that a MiniPay address can receive the payment. It does not implement the optional MiniPay SDK or phone-number transfer flow, and outbound sending from MiniPay was not tested. No acceptance document in the repository makes those extensions required, so these gaps do not change the core pass result.

**Part C. Review Coverage Against the Commissioned Mandate**

The commissioned mandate specified a five-tier evidence-graded review of nine VAL-003 findings plus a soundness assessment of the reframed infrastructure barrier. This review took a different and broader approach, conducting a full clean-environment reproduction rather than assessing individual documented findings in isolation. Coverage against the original mandate is recorded here for transparency.

| **Mandate tier**                                                        | **Coverage**                       | **Position**                                                                                                                                                                                    |
|-------------------------------------------------------------------------|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tier A, full reproducibility on three findings with exact error strings | One of three addressed             | The network enum failure was assessed as historical and not reproduced. The two Vault findings were not separately assessed; the current Raft and KV v2 configuration was confirmed operational |
| Tier B, inspectability on two findings with partial error strings       | One of two addressed, and exceeded | The DIDComm gateway failure was independently reproduced rather than only inspected. The out-of-band encoding finding was not assessed                                                          |
| Tier C, labelling review on three behavioural descriptions              | One of three addressed             | The in-memory ledger default was assessed. The credential status registry and connectionless issuance findings were not assessed                                                                |
| Tier D, architectural review of the publication cost finding            | Not addressed                      | The repeated-publication cost finding was not assessed in this review                                                                                                                           |
| Tier E, soundness of the reframed infrastructure barrier                | Not addressed directly             | The lightweight resolution path was not assessed. The review independently confirms and strengthens the underlying barrier through direct observation of two-stage indexing                     |

Where the mandate was not addressed, the affected findings retain the confidence levels assigned in the Preliminary VAL-Case Evidence Set and are not elevated on the basis of this review. Two items are carried to primary research: the repeated-publication cost behaviour, and whether the lightweight resolution component can replace the legacy indexer behind an existing Cloud Agent deployment.

**Part D. Consolidated Verdict**

| **Validation** | **Core functional result** | **Reproducibility from documentation** | **Production readiness**                     |
|----------------|----------------------------|----------------------------------------|----------------------------------------------|
| VAL-003        | Pass                       | Fail on the tested platform            | Not demonstrated, not a validation objective |
| VAL-006        | Pass with limitations      | Moderate                               | Not demonstrated, not a validation objective |

Both validations demonstrate that the specified stacks function for the Zivana Protocol use cases they were designed to test. Neither demonstrates that the stacks are ready for production deployment, which was not a validation objective and was not assessed as a pass condition.

**Document Version History**

| **Version** | **Date**      | **Author**                    | **Change**                                                                  |
|-------------|---------------|-------------------------------|-----------------------------------------------------------------------------|
| 1.0         | 6 August 2026 | Abdulbasit Adigun Abdulrahman | Independent technical review of VAL-003 and VAL-006. Issued by Samir Idris. |
