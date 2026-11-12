---
title: "Research Design Document - NexTrium Milestone 1 (CPC-26-0015)"
sidebar_label: "Research Design Document"
---

**NEXTRIUM**

Global Innovations Ltd

**Research Design Document**

*L2 Adoption and Interoperability Demand in African Emerging Markets:  
A Builder-Embedded Research Study*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D-M1-01                                                                         |
| **Version**               | 1.1                                                                             |
| **Date**                  | 1 August 2026                                                                   |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This Research Design Document governs all research activity conducted under Project CPC-26-0015. It establishes the confirmed research objectives, respondent categories, recruitment strategy, interview instruments structure, blocker classification model, value-flow classification model, evidence standards, data handling approach, treatment of applicant-supplied conflicted evidence, and public summary boundaries.

It is a formal M1 deliverable required by the grant agreement and must be read alongside the submitted proposal and RFP 07 in the order of priority established by the grant agreement: (1) Grant Agreement, (2) NexTrium Submitted Proposal, (3) RFP 07.

A third-party reviewer should be able to understand and replicate the research design from this document alone without requiring additional explanation.

**1. Research Objectives and Decision Gate Mapping**

This research addresses a specific evidence gap identified by the Cardano Product Committee: Cardano stakeholders do not currently have a decision-ready map of what is blocking Layer 2 dependent application deployment, which interoperability capabilities are required, and which cross-chain pathways create durable Cardano-side value rather than primarily increasing dependency on larger or more liquid ecosystems.

The research is scoped to the African informal economy builder population. This segment accounts for a substantial share of economic activity across sub-Saharan Africa, employs the majority of the workforce in markets like Nigeria and Ghana, and operates almost entirely outside formal financial infrastructure. Despite this scale, it remains underrepresented in existing Cardano L2 and interoperability research, which has focused primarily on DeFi, enterprise, and general developer tooling contexts. Closing this evidence gap is the primary differentiated contribution of this research to the broader RFP 07 evidence portfolio.

**The ten research objectives are:**

- **1.** Identify which Cardano applications, workflows, or use cases are genuinely blocked by missing L2 or interoperability capability.

- **2.** Classify L2 and interoperability blockers by type, severity, adoption impact, urgency, owner or workstream, and evidence confidence.

- **3.** Determine which L2 capabilities would unlock the most immediate adoption value.

- **4.** Produce a demand map of applications and use cases waiting on L2 or interoperability, with indicative scale ranges, timing assumptions, and confidence levels.

- **5.** Identify and rank interoperability features requested by builders, operators, bridge providers, infrastructure teams, and other relevant stakeholders.

- **6.** Assess why bridge, interoperability, partner-chain, wallet, or infrastructure providers do or do not prioritise Cardano.

- **7.** Classify priority interoperability pathways as value-accretive, mutual-value, neutral-access, dependency-risk, or value-leakage risk.

- **8.** Recommend which L2 and interoperability actions should be funded now, coordinated, partnered, monitored, deferred, or rejected.

- **9.** Produce an evidence threshold framework for future L2 and interoperability grant, partnership, and roadmap decisions.

- **10.** Identify dependencies and hand off findings for adjacent RFPs or workstreams.

**1.1 Decision Gate Mapping**

The research is designed around eleven CPC decision gates. Every method, respondent category, and deliverable maps to one or more of these gates.

| **Decision Gate** | **Question**                                                                        | **Primary Categories** | **Primary Deliverable**                                     |
|-------------------|-------------------------------------------------------------------------------------|------------------------|-------------------------------------------------------------|
| Gate 1            | Which applications or use cases are actually blocked by missing L2 capability?      | Cat 1, Cat 2           | Blocked-Demand Case Register, L2 Demand Map                 |
| Gate 2            | What type of L2 capability would unlock the most immediate adoption value?          | Cat 1, Cat 2           | L2 Barrier Analysis, Interoperability Requirements Register |
| Gate 3            | Which L2 blockers are technical, commercial, ecosystem, or coordination problems?   | Cat 1, Cat 2, Cat 3    | L2 Barrier Analysis, Blocker Taxonomy                       |
| Gate 4            | Which applications waiting on L2 represent meaningful demand at scale?              | Cat 1                  | L2 Demand Map                                               |
| Gate 5            | What interoperability features do builders and operators actually need?             | Cat 1, Cat 2, Cat 3    | Interoperability Requirements Register                      |
| Gate 6            | Which interoperability pathways are net-positive for Cardano?                       | Cat 2, Cat 3, Cat 4    | Interoperability Value-Flow Assessment                      |
| Gate 7            | Which interoperability pathways create asymmetric dependency or value-leakage risk? | Cat 3, Cat 4           | Value-Flow Assessment, Negative-Case Summary                |
| Gate 8            | Which bridge, partner-chain, or cross-chain partners should Cardano prioritise?     | Cat 3                  | Provider and Partner Opportunity Analysis                   |
| Gate 9            | What is preventing bridge and interoperability providers from prioritising Cardano? | Cat 3, Cat 4           | Provider Analysis, Negative-Case Summary                    |
| Gate 10           | What evidence should be required before funding L2 or interoperability proposals?   | All categories         | Evidence Threshold Framework                                |
| Gate 11           | Which findings should be handed to adjacent RFPs or workstreams?                    | All categories         | Cross-RFP Handoff Memo                                      |

**2. Research Methodology**

This research follows a screening-first, mixed-method design. The approach moves from a documented internal evidence baseline through a structured screening phase into targeted primary research with builders, operators, and infrastructure providers across the African ecosystem. Desk research alone is not sufficient for this RFP and this document does not rely on it as a primary evidence source.

**2.1 Overview of Research Phases**

| **Phase** | **Name**                            | **Timing**    | **Description**                                                                                                                                                                                                                                         |
|-----------|-------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Phase 1   | Evidence Baseline and Desk Research | Weeks 1 to 2  | Documentation of Zivana Protocol VAL cases as applicant-supplied conflicted evidence. Desk research on the L2 and interoperability landscape.                                                                                                           |
| Phase 2   | Screening                           | Weeks 2 to 3  | All candidate use cases, pathways, and respondents screened against a thirteen-criterion model. Shortlist produced with documented rationale for all exclusions.                                                                                        |
| Phase 3   | Primary Research                    | Weeks 3 to 7  | 30 to 44 interviews across four respondent categories. Builder and operator interviews run Weeks 3 to 5. Infrastructure and provider interviews Weeks 4 to 6. Non-Cardano interviews Weeks 5 to 7. Phases overlap deliberately for schedule resilience. |
| Phase 4   | Analysis and Classification         | Weeks 7 to 9  | All findings analysed against eleven decision gates. Every blocker classified using full nine-type taxonomy. All pathways receive final value-flow classifications.                                                                                     |
| Phase 5   | Deliverables and Reporting          | Weeks 9 to 12 | All sixteen required deliverables produced, reviewed at Draft Deliverables Review checkpoint, refined, and submitted for final acceptance.                                                                                                              |

**2.2 Seven Core Research Hypotheses**

The primary research is designed to test, refine, or reject the following seven hypotheses. No hypothesis is assumed to be true at the outset.

| **Ref** | **Hypothesis**                                                                                | **What Must Be Tested**                                                                                                                                                           |
|---------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| H1      | Some Cardano applications are genuinely blocked by missing L2 capability.                     | Whether named applications or operator categories can identify specific L2 requirements and deployment blockers tied to a concrete deployment decision.                           |
| H2      | L2 demand is not uniform across use cases.                                                    | Whether different use cases need different combinations of throughput, latency, cost, privacy, settlement, state management, composability, developer tooling, or UX support.     |
| H3      | Some apparent L2 blockers are actually non-L2 blockers.                                       | Whether delays are caused by liquidity, wallets, integrations, tooling, commercial uncertainty, compliance, or partner access rather than scaling capability itself.              |
| H4      | Interoperability demand is feature-specific.                                                  | Whether operators need asset bridging, message passing, liquidity routing, partner-chain integration, wallet UX, identity and data portability, or settlement interoperability.   |
| H5      | Interoperability pathways differ in Cardano-side value.                                       | Whether specific corridors or partnerships bring net-new users, liquidity, or strategic access to Cardano, or mainly increase dependence on larger ecosystems.                    |
| H6      | Bridge and interoperability providers have identifiable reasons for not prioritising Cardano. | Whether blockers are demand, integration cost, technical complexity, liquidity, security risk, incentive misalignment, commercial opportunity cost, or lack of ecosystem support. |
| H7      | A reusable evidence standard can improve future funding decisions.                            | Whether proposal quality can be assessed through validated demand, blocker severity, expected Cardano-side value, and measurable adoption outcomes.                               |

Nine further questions arising from desk research are incorporated into the interview instruments. They cover whether stated Layer 2 requirements would be satisfied by base-layer throughput increases currently in testnet; what capability respondents required and could not locate, asked open before any inventory is referenced; whether relevant initiatives are absent from the Layer 2 inventory; awareness of delivered Critical Integrations and any resulting change to architecture or deployment plans; infrastructure cost if current funded free-access periods end; whether respondents have paid for infrastructure on Cardano and under what conditions they would; per-transaction cost against alternatives for the same workflow; whether Cardano was evaluated for a given deployment and what determined the outcome; and whether a foundational national identity credential creates verification demand an organisation cannot currently serve.

**3. Respondent Categories and Recruitment Strategy**

Primary research targets 30 to 44 interviews across four respondent categories. The research is scoped to the African informal economy builder population and to the Cardano infrastructure providers, bridge and interoperability providers, and non-Cardano builders most relevant to that population's deployment context.

Respondents primarily seeking funding for L2 or interoperability work may be included in any category but their claims are separated from independent demand evidence throughout all analysis and deliverables.

**3.1 Category 1: African Informal Economy Builders and Operators on Cardano**

**Target range: 10 to 15 interviews.**

Purpose: Validate which applications are blocked, what requirements builders and operators have, what deployment decisions are pending, and what workarounds are currently in use. Primary source of evidence for Decision Gates 1, 2, 3, and 4.

Recruitment pathways:

- Wada community builders: direct access through NexTrium's active Wada Hub partnership.

- Cardano Catalyst funded teams with African focus: direct access through the African Cardano Catalyst community network.

- UCSC Nigeria alumni network: direct access through Abdulbasit Adigun Abdulrahman's former Vice President role at the Unified Cardano Student Club Nigeria.

- Web3Bridge Africa: community access through the Lagos Web3 builder community including developers working across multiple chains.

- African Cardano Intersect community members: community access through NexTrium's active Cardano Intersect participation and governance network.

Bias control: All Category 1 evidence is labelled as Cardano-adjacent and separated from Category 4 external evidence in all deliverables. Seven non-L2 blocker alternatives are tested before any blocker is classified as an L2 blocker.

**3.2 Category 2: Infrastructure, Tooling, Identity, and Application Protocol Teams**

**Target range: 6 to 10 interviews, per Section 5 of the submitted proposal. Recruitment is weighted toward the upper bound following desk research, which located the majority of documented barriers in this layer.**

Purpose: Understand current capabilities, known integration friction, roadmap assumptions, and Cardano adoption constraints from teams actively building infrastructure and application protocols on Cardano. Primary source of evidence for Decision Gates 2, 3, and 5.

Recruitment pathways:

- Orcfax: direct access established through VAL-004 schema work. Time-critical. Its announcement of 27 March 2026 stated the project was unfunded and prepared a wind-down of the network for 31 July 2026.

- Charli3: ecosystem access through the Cardano community. Can corroborate or contradict the account of cooperation requests to core entities.

- Hyperledger Identus maintainer community: direct access established through VAL-003 diagnostic work. Weekly public community calls provide a defined access route.

- Blockfrost: structured outreach. Hosted API provider named in two documented barriers, being the Hydra roadmap item to remove the local Cardano node requirement, and the identity issuance constraint under which DID creation and publication are not supported and the full node, wallet and database requirement is therefore retained.

- Midnight Network developer community: direct access established through VAL-002 devnet work.

- Masumi Network: structured outreach. Cardano-native protocol for agent payments, identity and decision logging, with mainnet contracts and a planned Layer 2 for agent settlement.

- Demeter and TxPipe: structured outreach. Managed cloud services for database synchronisation, indexing, and transaction submission, addressing the infrastructure cost documented in the VAL evidence baseline.

- Maestro: structured outreach. Enterprise API and transaction infrastructure with transaction management, accelerated submission, and support across Cardano, Bitcoin and Dogecoin.

- Koios: structured outreach. Community-run API provider requiring no API key for basic use. Included as the provider builders use when they do not pay, which bears on the willingness to pay question.

- Blink Labs: structured outreach. Node client and audit provider, developer of a production-grade block producer supporting multi-client diversity.

- Anastasia Labs: structured outreach. Builder of the first optimistic rollup on Cardano, recorded in the Layer 2 inventory and interviewed as a Layer 2 builder.

- zkFold: structured outreach. Zero-knowledge rollup and wrapper builder, recorded in the Layer 2 inventory and interviewed as a Layer 2 builder.

- Input Output infrastructure teams: ecosystem access through Cardano Intersect participation.

- Intersect: ecosystem access. Administrator of the Critical Integrations Budget, holding execution status across the five integration pillars. Interviewed as a respondent distinct from its role as commissioning body for this research; that distinction is recorded in the Research Methodology Appendix.

Bias control: Evidence from providers seeking funding or market advantage is labelled separately. Samir Idris reviews technically complex provider claims during M3 analysis.

**3.3 Category 3: Bridge, Interoperability, and Wallet Providers**

**Target range: 5 to 8 interviews.**

Purpose: Identify why Cardano is or is not prioritised by bridge and interoperability providers, what would change that decision, and what integration requirements and commercial incentives are relevant. Primary source of evidence for Decision Gates 8 and 9.

Recruitment pathways:

- Wanchain: structured outreach. Decentralised bridge that prioritised Cardano and operated across dozens of chains for over eight years without a major incident. Its Cardano bridge has been offline since 21 July 2026 following an exploit traced to a Cardano-side Plutus V2 contract. Its account of Cardano tooling, documentation and audit conditions is direct evidence for Decision Gates 3, 7 and 9. Starting classification: Dependency-Risk.

- Rosen Bridge: structured outreach. Active UTxO-native bridge connecting Cardano and Ergo with expansion to additional chains. Starting classification: Mutual-Value.

- Cardinal: structured outreach. Trust-minimised bridge connecting Bitcoin to Cardano, completed December 2025. Starting classification: Mutual-Value.

- Bifrost: structured outreach. Stake-pool-secured Bitcoin to Cardano bridge led by FluidTokens with zkFold and Lantr. Starting classification: Mutual-Value, pending delivery.

- Lantr: structured outreach. Watchtower design contributor to Bifrost.

- LayerZero: structured outreach. Omnichain messaging protocol, recorded as the one Critical Integrations pillar in active development. Starting classification: Neutral-Access, pending delivery.

- Circle: structured outreach. Issuer of the tier-one stablecoin deployed on Cardano in February 2026 through xReserve infrastructure. Starting classification: Value-accretive, subsidy-dependent.

- Celo and MiniPay team: structured outreach. Ethereum Layer 2 operating a phone-number-addressed stablecoin distribution rail relevant to the value-leakage question. Starting classification: Dependency-Risk to Value-Leakage Risk.

- Lace: structured outreach. Cardano wallet.

- Eternl: structured outreach. Cardano wallet.

- VESPR: structured outreach. Cardano wallet.

- Typhon Wallet: structured outreach. Cardano wallet.

Wallet providers are included because Decision Gate 5 requires assessment of wallet user experience as an interoperability feature type, and because desk research identified the access channel and wallet layer as the location of the distribution gap recorded in the VAL evidence baseline. No Cardano wallet identified supports phone-number addressing or USSD access.

Removed from this category following desk research: Milkomeda, deprecated and shut down in September 2025; Swifin and Reltime, which operate their own Layer 1 Proof of Authority chain and have no documented Cardano relationship, and are reclassified to Category 4.

Access limitation: Category 3 has the weakest existing relationship base and its composition changed materially during desk research. Three candidates in the original design were removed as invalid and five added. If outreach does not yield the target range of 5 to 8 interviews, this will be disclosed proactively at the Stakeholder Access Check with confidence level implications stated explicitly. Provider-side findings will not be presented at medium or high confidence if Category 3 access falls below target.

**3.4 Category 4: Non-Cardano and Negative-Case Respondents**

**Target range: 4 to 6 interviews.**

Purpose: Provide external reference points for deployment decisions made outside Cardano. Primary structural safeguard against Cardano insider bias. Required, not optional. Primary source of evidence for Decision Gates 6, 7, and 9.

Recruitment pathways:

- Celo ecosystem builders in Africa: structured outreach through Celo community networks.

- Tron ecosystem builders serving African corridors: structured outreach. Desk research establishes Tron rather than Polygon as the incumbent route for African stablecoin remittance.

- Stellar and Soroban builders in Africa: community access through African fintech networks.

- Polygon builders in Africa: community access through Lagos Web3 community.

- Web3Bridge Africa builders on other chains: community access through Web3Bridge.

- Swifin and Reltime: structured outreach. Operate a Web3 financial platform on Reltime's own Layer 1 Proof of Authority chain, supporting all 54 African currencies with approximately two million migrated users. Built comparable African financial infrastructure and did not select Cardano.

- Hedera ecosystem builders: structured outreach. African deployment presence was not verified during desk research and is confirmed at first contact.

- Algorand builders: structured outreach. African deployment presence was not verified during desk research and is confirmed at first contact.

- African DeFi builders on non-Cardano chains: community access through Lagos and Accra Web3 networks.

Milkomeda is recorded as a documented historical negative case from public record. Its deprecation in September 2025 is evidenced without interview and it is not pursued as a respondent. SecondFi, the rebranded Yoroi wallet, ceased operations on 27 July 2026 and is recorded on the same basis.

Bias control: Category 4 evidence is presented without positive filtering. Findings indicating Cardano's infrastructure does not meet specific needs are reported accurately and completely.

**3.5 Consent and Ethics Protocol**

All respondents are informed of the research purpose, the commissioning body (Cardano Product Committee, Intersect, Project CPC-26-0015), and how their input may be used. Before any research question is asked, the consent disclosure statement is read to the respondent. Respondents choose named attribution, anonymised attribution, or fully confidential treatment. No respondent is recorded without explicit verbal consent. All consent decisions are logged in the Consent Tracking Register on the day of contact.

**3.6 Screening Candidates Arising from Desk Research**

Five organisations were identified during desk research and are carried to the screening phase for assessment against the screening criteria rather than added to the respondent list. Each has a documented chain selection excluding Cardano and is relevant to Decision Gate 9.

- cNGN: Nigeria's regulated naira stablecoin, deployed on seven chains with three further testnet deployments.

- Flutterwave: Africa's largest payments infrastructure provider, which selected Polygon as its default for cross-border payments.

- Zone: Nigerian interbank blockchain settlement network.

- Routefusion: multi-rail infrastructure operating across eleven African countries.

- IOTA Foundation ADAPT programme: African digital trade identity built on IOTA.

They are not counted toward category targets until screened.

**4. Blocker Classification Model**

All blockers identified through primary research are classified using the nine-type taxonomy from Appendix B of the RFP before being recorded in any deliverable. No blocker is recorded without first passing a relevance test confirming it directly ties to a named L2 or interoperability use case.

**4.1 The Nine Blocker Types**

| **Blocker Type** | **Definition**                                                                                                                         |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Technical        | Protocol gaps, smart contract limitations, missing cryptographic primitives, or infrastructure failures preventing deployment.         |
| Commercial       | Business model uncertainty, revenue risk, pricing gaps, or insufficient commercial incentive for a provider or builder to proceed.     |
| Ecosystem        | Missing wallet support, insufficient developer community presence, weak business development coverage, or absent partner integrations. |
| Liquidity        | Insufficient on-chain liquidity, stablecoin availability gaps, or bridge liquidity depth preventing viable deployment.                 |
| UX               | User experience barriers including wallet friction, onboarding complexity, language limitations, or interface design gaps.             |
| Tooling          | SDK gaps, documentation failures, developer experience issues, or missing testing infrastructure.                                      |
| Coordination     | Multi-party dependency problems where no single actor can resolve the blocker without others acting first.                             |
| Compliance       | Regulatory uncertainty, licensing requirements, or legal constraints blocking deployment.                                              |
| Unknown          | Insufficient evidence to classify. Disclosed explicitly with the evidence limitation stated.                                           |

**4.2 Blocker Entry Requirements**

Every blocker entry in the L2 Barrier Analysis must state: the barrier, the affected use case or application, the barrier type, severity (High, Medium, or Low), evidence source, confidence level (High, Medium, or Low), owner or workstream, and recommended action.

The full recommended action set is: fund engineering, improve documentation, pursue wallet support, establish bridge or provider partnerships, coordinate liquidity, provide commercial incentives, activate builders, or reject.

**4.3 Non-L2 Blocker Testing Requirement**

Before any blocker is classified as an L2 type, the following seven non-L2 alternatives must be explicitly tested and eliminated: liquidity gaps, wallet support gaps, bridge or provider access gaps, tooling failures, commercial uncertainty, compliance constraints, and partner access barriers. This test is applied during every primary research interview and documented in the interview notes.

**5. Value-Flow Classification Model**

All interoperability pathways receive a value-flow classification using the five agreed categories from Section 4 of the RFP. Classifications are demand and value-flow assessments, not architecture recommendations or roadmap prescriptions.

**5.1 The Five Classification Categories**

| **Category**       | **Meaning**                                                                                                     | **Decision Consequence**                                            |
|--------------------|-----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| Value-Accretive    | Likely to bring net-new users, liquidity, applications, transactions, or strategic access into Cardano.         | Prioritise for funding, business development, or technical support. |
| Mutual-Value       | Creates credible bidirectional benefit for Cardano and another ecosystem.                                       | Explore partnership, shared incentives, or co-development.          |
| Neutral-Access     | Improves connectivity but has unclear or limited adoption impact for Cardano.                                   | Monitor or support only if low-cost or strategically necessary.     |
| Dependency-Risk    | Increases Cardano's reliance on a larger or more liquid ecosystem without clear Cardano-side retention.         | Redesign, sequence later, or require stronger safeguards.           |
| Value-Leakage Risk | Likely to enable outflow of users, liquidity, or activity from Cardano without sufficient compensating benefit. | Deprioritise unless mitigations or strategic rationale are strong.  |

**5.2 Required Elements per Classification**

Every pathway classification must state all six required elements: expected inflows into Cardano; potential outflows from Cardano; the retention mechanism or Cardano-side benefit; the dependency risk level; the evidence supporting the classification; and the confidence level applied.

No pathway is classified as Value-Accretive or Mutual-Value on the basis of technical possibility, roadmap existence, community sentiment, or interoperability for its own sake.

**5.3 Confidence Labelling**

All pre-classifications derived from NexTrium's Zivana Protocol validation work are treated as applicant-supplied conflicted evidence at Low confidence. Confidence levels are upgraded from Low to Medium only following triangulation with independent builder, provider, public data, or negative-case evidence from primary research in M2.

**6. Evidence Standards**

**6.1 Adoption Signal versus Cosmetic Signal**

Adoption signal means evidence that an L2 or interoperability capability would support measurable deployment, recurring usage, transaction activity, retained users, retained liquidity, commercial integration, partner commitment, or another decision-relevant outcome.

The following do not count as sufficient evidence on their own and are classified as cosmetic signal: roadmap existence, technical possibility, community sentiment, conference or event interest, informal messaging platform enthusiasm, unverified capability claims without triangulation, single-team self-attestation, generic market-size statistics, total value locked without user-flow interpretation, bridge volume without source and destination and retention analysis, and interoperability for its own sake.

**6.2 Confidence Levels**

| **Level** | **Definition**                                                                                                                              |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| High      | Finding supported by multiple independent evidence types with no material contradicting evidence.                                           |
| Medium    | Finding supported by at least two evidence types or by one strong independent source, with limited contradicting evidence.                  |
| Low       | Finding supported by a single source, by applicant-supplied conflicted evidence only, or by evidence that cannot be independently verified. |

All scale estimates, timing assumptions, and adoption forecasts are presented as indicative ranges with stated assumptions and confidence levels. Precise market sizing is not produced where the evidence does not support that precision.

**6.3 Triangulation Requirement**

Major findings are triangulated across more than one evidence type where feasible. Where triangulation is not possible, the finding is labelled with its confidence level and the limitation is stated explicitly. Bridge volume data is used only where source, destination, and retention analysis accompanies it.

**6.4 Treatment of Applicant-Supplied Conflicted Evidence**

All six Zivana Protocol validation cases (VAL-001 through VAL-006) are treated as applicant-supplied conflicted evidence throughout this research. They are clearly separated from independent evidence in all analysis and deliverables. No applicant-supplied finding is used to establish segment-level demand or value-flow classifications above Low confidence without independent triangulation. Findings derived from NexTrium's own architecture that do not support Cardano infrastructure investment are reported without filtering.

**7. Data Handling and Confidentiality**

**7.1 Informed Consent**

Every respondent is informed of the research purpose, the commissioning body, and how their input will be used before any interview question is asked. Respondents choose named attribution, anonymised attribution, or fully confidential treatment. This choice is confirmed at the start of the interview and logged in the Consent Tracking Register before the interview proceeds. No respondent is recorded without explicit verbal consent.

**7.2 Data Storage and Access**

All raw interview notes, transcripts, and research data are stored in a password-protected project documentation system accessible only to Abdulbasit Adigun Abdulrahman, Yuguda Muhammad, and Samir Idris for files within his technical review scope. Raw notes are not shared outside the research team without the respondent's explicit permission. All data is retained for a minimum of 12 months following project completion per clause 4.3 of the grant agreement.

**7.3 Publication Tiers**

| **Tier**       | **Content and Access**                                                                                                                                                                      |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Confidential   | Full research report and supporting deliverables. Accessible to CPC and approved reviewers only.                                                                                            |
| Summary Public | Deliverable summaries excluding confidential respondent identities, unreleased roadmap details, commercially sensitive provider information, and security-sensitive infrastructure details. |
| Fully Public   | Public summary, evidence threshold framework, technical and commercial blocker taxonomy, and cross-RFP handoff memo.                                                                        |

**7.4 Proprietary and Paid Data**

No proprietary datasets are planned for this research. If any proprietary, paid, or respondent-provided data becomes necessary, NexTrium will immediately disclose to CPC: the source, access conditions, whether CPC can inspect it, whether it can be cited publicly, what limitations apply, and whether it can be retained after project completion.

**7.5 AI Tool Disclosure**

Per clause 4.2 of the grant agreement, any use of AI tools in producing research outputs is disclosed in the AI Disclosure Log immediately upon use. The researcher using the tool is responsible for accuracy. AI tool usage is disclosed in each relevant deliverable and in the Research Methodology Appendix.

**8. Public Summary Boundaries**

The public summary is produced following CPC approval at the Public Summary Review checkpoint in M4.

**8.1 What the Public Summary Includes**

- Methodology overview including respondent category summary and interview range.

- High-level demand findings covering which application categories showed validated blocked demand and at what confidence level.

- High-level L2 blocker findings covering blocker types identified and their distribution across the nine-type taxonomy.

- High-level interoperability requirements covering which features builders and operators most frequently requested.

- Publishable value-flow themes covering which pathway categories showed the strongest evidence of Cardano-side value.

- Investment sequencing recommendations where publishable without exposing confidential evidence.

- Limitations and evidence caveats including scope boundaries, access gaps, and confidence level distribution.

**8.2 What the Public Summary Excludes**

- Confidential respondent identities or any detail that could identify a confidential respondent through context or combination of information.

- Unreleased technical roadmap details from provider or infrastructure team interviews.

- Commercially sensitive provider information including integration pricing, partnership terms, or internal prioritisation decisions.

- Security-sensitive bridge or infrastructure details that could create exploit or competitive risk if published.

- Raw interview data or transcripts in any form.

**8.3 Confidentiality Review Process**

Before publication, the public summary is reviewed with CPC at the Public Summary Review checkpoint to confirm what can be published and what must remain in the confidential tier. Publication does not proceed without CPC sign-off.

**9. Milestone and Checkpoint Schedule**

**9.1 Milestone Overview**

| **Milestone** | **Description**                    | **Deadline**     | **Payment** |
|---------------|------------------------------------|------------------|-------------|
| M1            | Foundation and Screening           | 13 August 2026   | 6,250 ADA   |
| M2            | Primary Research                   | 3 September 2026 | 6,250 ADA   |
| M3            | Analysis and Draft Deliverables    | 1 October 2026   | 7,500 ADA   |
| M4            | Final Deliverables and Publication | 19 October 2026  | 5,000 ADA   |

**9.2 CPC Checkpoints**

| **Checkpoint**                                | **Purpose**                                                          |
|-----------------------------------------------|----------------------------------------------------------------------|
| Kickoff Meeting                               | Confirm objectives, scope, workplan, and communication cadence.      |
| Research Design Review                        | Align on instruments, classification models, and evidence standards. |
| Screening Review and Stakeholder Access Check | Review shortlist and confirm respondent access status.               |
| Early Demand Signal Review                    | Review initial blocked-demand cases and early evidence gaps.         |
| Interim Findings Review                       | Assess whether evidence is answering the decision gates.             |
| Draft Deliverables Review                     | Review all draft deliverables before finalisation.                   |
| Final Presentation                            | Present findings, confidence levels, and recommended actions.        |
| Public Summary Review                         | Confirm publication boundaries before release.                       |

**9.3 Biweekly Reporting**

Progress updates are submitted to CPC every two weeks from 27 July 2026. Each update covers completed work, work in progress, risks, issues requiring CPC input, upcoming milestones, and timeline status. This is a mandatory grant agreement obligation.

**Document Version History**

| **Version** | **Date**      | **Author**                    | **Change**                                                                                                                                                                                                                                                                                                                                                                                    |
|-------------|---------------|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.0         | 27 July 2026  | Abdulbasit Adigun Abdulrahman | Initial document produced for CPC Research Design Review checkpoint.                                                                                                                                                                                                                                                                                                                          |
| 1.1         | 1 August 2026 | Abdulbasit Adigun Abdulrahman | Respondent categories revised following desk research. Category 2 recruitment weighted toward the upper bound of the proposal range. Category 3 composition changed and wallet providers added. Category 4 additions. Screening candidates recorded. Interview instrument additions noted. All category targets confirmed within the ranges committed in Section 5 of the submitted proposal. |
