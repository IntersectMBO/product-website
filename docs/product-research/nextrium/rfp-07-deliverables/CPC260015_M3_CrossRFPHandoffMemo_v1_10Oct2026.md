---
title: "Cross-RFP Handoff Memo - NexTrium Milestone 3 (CPC-26-0015)"
sidebar_label: "Cross-RFP Handoff Memo"
---

**NEXTRIUM**

Global Innovations Ltd

**Cross-RFP Handoff Memo**

*Routing of findings that belong to adjacent RFPs and workstreams*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D12 (Proposal Section 13)                                                       |
| **Status**                | Compiled through Milestone 3; final at Milestone 4                              |
| **Version**               | 1.0                                                                             |
| **Date**                  | 10 October 2026                                                                 |
| **Confidentiality**       | Fully public                                                                    |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This is the Cross-RFP Handoff Memo (D12), compiled through Milestone 3. It routes findings that are real but fall outside RFP 07's scope to the adjacent RFP or workstream that owns them, so they are not lost and are not absorbed into this study. It also records where this study's own recommendations depend on work owned elsewhere. It answers Decision Gate 11.

Findings from respondents who chose confidential treatment are counted but not described.

**1. Summary**

| Destination | Findings routed | Main themes |
|---|---|---|
| RFP 02: Use-Case Landscape and Competitive Positioning | 4 | Why builders choose, ignore or leave Cardano; awareness and users |
| RFP 03: Stablecoin Liquidity Incentive and Activation Strategy | 7 | Liquidity depth; single-chain stablecoin exposure; distribution liquidity |
| RFP 05: Government and Emerging Markets Entry Strategy | 8 | Licensing and regulation, national identity, infrastructure cost, local delivery capacity, builder funding as a regional requirement |
| RFP 06: Enterprise and RWA Readiness Assessment | 3 | Enterprise onboarding; real-world asset liquidity |
| RFP 08: Enterprise Delivery Partner Network | 1 | Missing service-provider ecosystem |
| RFP 09: AI Commercial Positioning | 2 | Inference compute; agent infrastructure positioning |
| DevX workstream | 9 | Learning curve, transaction-building tools, documentation, fragmentation, developer cost and supply |
| Wallets workstream | 4 | Wallet access channels; collateral for stablecoin-only holders; wallet migration |
| Liquidity workstream | 4 | Liquidity depth for applications |
| Governance workstream | 8 | Access to decision-makers; governance experienced as political; builder funding access |
| Technical roadmap workstream | 6 | Layer 2 stewardship; hard-fork notice and compatibility; fee parameters |

Some findings go to more than one destination, so the counts add up to more than the number of findings.

**2. Method**

- **What is routed.** Findings that do not tie to a named Layer 2 or interoperability workflow, and blockers that the seven non-Layer 2 alternatives attribute to something other than Layer 2 or interoperability: liquidity, wallet support, bridge or provider access, tooling, commercial uncertainty, compliance or partner access ([Screening Report](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_ScreeningReport_v1_05Aug2026.md) Section 1.3).
- **Sources.** The 57 classified blocker tests from primary research routed to this memo; the four cases routed out of the [Blocked-Demand Case Register](https://github.com/Nextrium/cpc-product-website/blob/milestone-2-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M2_BlockedDemandCaseRegister_v1_09Oct2026.md) at Milestone 2; the six routings set in the [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) (Section 10.6); and the routings made in the Milestone 3 deliverables.
- **Destinations** are those RFP 07 names for handoff: RFPs 02, 03, 05, 06, 08 and 09, and the DevX, wallets, liquidity, governance and technical roadmap workstreams. Each finding was checked against the published scope of its destination RFP.
- **RFP numbers and titles** follow the Cardano Product Committee's published list of research initiatives. Our proposal (Gate 11) paired some numbers with the wrong topics: stablecoin liquidity is RFP 03, use-case positioning is RFP 02, government and emerging market entry is RFP 05, and enterprise and RWA readiness is RFP 06. The topics are unchanged.
- **No absorption.** This memo states the finding, its evidence and why it belongs elsewhere. It does not analyse or recommend within another RFP's scope.
- **Test IDs** (T-) refer to the classified tests published in the [Barrier Classification, redacted](./CPC260015_M3_BarrierClassificationRedacted_v1_10Oct2026.md); extract IDs (E-) to the evidence extracts published at Milestone 2.

**3. Routed Findings by Destination**

### RFP 02: Use-Case Landscape and Competitive Positioning

RFP 02 asks where Cardano wins or loses against peer ecosystems and why operators choose, reject, pause, leave or ignore Cardano.

| Finding | Evidence | Why it belongs here |
|---|---|---|
| Builders on other chains mostly never evaluated Cardano, and chose for users, sponsorship, developer experience and fees | [Negative-Case and Non-Cardano Evidence Summary](./CPC260015_M3_NegativeCaseNonCardanoEvidenceSummary_v1_10Oct2026.md), Section 3 | Why operators ignore or reject Cardano |
| Too few users across Cardano platforms, with some projects moving to Ethereum or Solana | T-073 (E-408) | Why operators leave |
| Cardano tokens are hard for average users to buy, and the ecosystem is little known | T-045 (E-184) | Competitive position and awareness |
| The main blocker is visibility and validation from established ecosystem figures, not technology | T-071 (E-375) | Competitive position |

### RFP 03: Stablecoin Liquidity Incentive and Activation Strategy

RFP 03 asks what stablecoin liquidity Cardano should pay to create, where it is missing, and for which use cases.

| Finding | Evidence | Why it belongs here |
|---|---|---|
| Liquidity is the biggest issue across Cardano applications | T-072 (E-393); T-014 (E-066) | Missing liquidity for applications |
| A provider's main barrier at build time was the absence of stablecoin liquidity on Cardano (historical) | Case-009; T-076 (E-472) | Stablecoin liquidity; routed at Milestone 2 |
| An earlier product failed on liquidity | T-089 (E-394) | Missing liquidity |
| A real-world asset product lacks liquidity | T-052 (E-211) | RWA-related liquidity; also RFP 06 |
| Liquidity depth and multi-chain availability of the stablecoin issued on Cardano | [Interoperability Value-Flow Assessment](./CPC260015_M3_InteroperabilityValueFlowAssessment_v1_10Oct2026.md), pathway 1; [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 8.5, 10.6 | Stablecoin liquidity depth |
| Distribution liquidity behind Celo MiniPay routing | Proposal Gate 11 starting evidence; [Preliminary VAL-Case Evidence Set](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_PreliminaryVALCaseEvidenceSet_v1.1_06Aug2026.md) (VAL-006, our own validation work) | Liquidity for emerging-market payments |
| The liquidity increase from the stablecoin launch fell short of a builder's expectations | E-396 | Stablecoin liquidity |

### RFP 05: Government and Emerging Markets Entry Strategy

RFP 05 asks how Cardano should enter emerging markets by region, use case, partner model and regulatory pathway. Its published scope names regulatory uncertainty, identity, infrastructure constraints and local delivery capacity.

| Finding | Evidence | Why it belongs here |
|---|---|---|
| SAPro paused on Cardano for bank licensing, and cannot afford the operating licence | Case-003; T-077 (E-487); T-078 (E-488) | Regulatory pathway; routed at Milestone 2 |
| A central bank prohibits crypto for transactions | T-004 (E-011) | Regulatory pathway |
| National identity system changes create licensing and approval problems | T-054 (E-239) | Identity |
| Automated identity verification providers do not support regions with weaker national identity systems | T-065 (E-338) | Identity |
| National identity market entry | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 10.6 | Identity; set in desk research |
| Running a stake pool relay is unaffordable in the region because of IP address and hosting costs | T-002 (E-006); T-003 (E-007) | Infrastructure constraints |
| Shortage of Nigeria-based developers, forcing reliance on foreign development | T-050 (E-209); T-051 (E-210) | Local delivery capacity |
| Builder funding access as a requirement of a regional playbook | See Governance workstream | Secondary destination |

### RFP 06: Enterprise and RWA Readiness Assessment

RFP 06 asks whether Cardano is ready for production enterprise and real-world asset adoption, including support models and integration support.

| Finding | Evidence | Why it belongs here |
|---|---|---|
| Enterprise onboarding blocked by unclear technical and commercial support channels and a proposal-based process | T-015 (E-079) | Enterprise support model |
| Strict decentralisation is a barrier for corporate adoption against centralised alternatives | T-017 (E-084) | Enterprise readiness |
| A real-world asset product lacks liquidity | T-052 (E-211) | RWA readiness; also RFP 03 |

### RFP 08: Enterprise Delivery Partner Network

RFP 08 asks what delivery partner network would convert enterprise interest into deployments, given the absence of a visible channel of delivery partners and system integrators.

| Finding | Evidence | Why it belongs here |
|---|---|---|
| Integrating with Cardano was harder than any EVM chain because Cardano lacks the plug-and-play tooling and service-provider ecosystem common on EVM chains | E-468 (also in the [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md)) | Missing service and delivery providers |

### RFP 09: AI Commercial Positioning

| Finding | Evidence | Why it belongs here |
|---|---|---|
| No Cardano-native decentralised inference compute | DR-09; [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 6.8, 6.10 | AI commercial positioning |
| Commercial positioning of agent infrastructure (Fetch.ai, ASI Cloud, Masumi) | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 10.6; [Interoperability Value-Flow Assessment](./CPC260015_M3_InteroperabilityValueFlowAssessment_v1_10Oct2026.md), pathway 12 | AI commercial positioning |

### DevX workstream

| Finding | Evidence |
|---|---|
| Smart contract languages and the functional and UTxO model are hard to learn | T-001 (E-005); T-007 (E-033); T-044 (E-180); T-057 (E-265); T-059 (E-319) |
| Off-chain transaction building is tedious and hard to debug; libraries change often or are too opinionated | T-010 (E-049); T-011 (E-050); T-026 (E-108); T-063 (E-325) |
| No single documentation source of truth, and documentation goes stale | T-061 (E-322); T-087 (E-323) |
| Tooling fragmentation and no standard chain-level RPC | T-031 (E-128); T-033 (E-131) |
| Integrating Cardano with common web stacks, and minting reassignable assets, are hard | T-055 (E-248); T-058 (E-266) |
| Hard forks break compatibility and arrive without adequate notice | T-022 (E-103); T-084 (E-122) |
| Development costs above Solana and EVM chains, and a smaller developer community | T-032 (E-129); T-070 (E-363) |
| Identity documentation path, configuration barriers and publication cost | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 10.6; VAL-003 (our own validation work), set in our proposal |
| Two further findings from a confidential respondent on front-end integration and smart contract language | Counted only |

### Wallets workstream

| Finding | Evidence |
|---|---|
| Wallet access channels: low-cost phone-number payments, basic-phone and offline access, consistent mobile wallet connection | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 10.6; [Interoperability Requirements Register](./CPC260015_M3_InteroperabilityRequirementsRegister_v1_10Oct2026.md); [Blocked-Demand Case Register](https://github.com/Nextrium/cpc-product-website/blob/milestone-2-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M2_BlockedDemandCaseRegister_v1_09Oct2026.md), Case-014 |
| Stablecoin-only holders cannot use smart contracts without holding ADA as collateral | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 8.6, 10.6; [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), rank 1 |
| An app migration after infrastructure changes forced users to switch wallets, eroding trust | T-069 (E-354) |
| Exchange wallet-infrastructure partners do not support Cardano | [Provider and Partner Opportunity Analysis](./CPC260015_M3_ProviderPartnerOpportunityAnalysis_v1_10Oct2026.md), entry 11 |

### Liquidity workstream

| Finding | Evidence |
|---|---|
| Liquidity to interact with applications | T-014 (E-066) |
| Deep liquidity as the biggest ecosystem issue | T-072 (E-393) |
| Earlier product failure on liquidity | T-089 (E-394) |
| Stablecoin liquidity depth and multi-chain exposure | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 10.6 |

### Governance workstream

| Finding | Evidence |
|---|---|
| Providers cannot influence core network decisions | T-025 (E-107) |
| No clear route for proposing protocol parameter changes | T-066 (E-341) |
| Governance bodies experienced as political, deterring large liquidity providers | T-079 (E-081) |
| Core development without customer discovery | T-081 (E-086) |
| The hardest part of building was political, not technical | T-083 (E-095) |
| No access to decision-makers and capital allocators | T-102 (E-481) |
| Builder funding access blocks testnet-to-mainnet moves and continued development | Case-007, Case-008; T-008 (E-034); T-056 (E-250); T-068 (E-349); T-088 (E-350); T-092 (E-425); T-093 (E-427) |
| One further finding from a confidential statement | Counted only |

### Technical roadmap workstream

| Finding | Evidence |
|---|---|
| Layer 2 stewardship is moving to a dedicated entity by end of 2026 | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 6.9, 10.6 |
| A core component was an uninfluenceable dependency | T-035 (E-135) |
| Stack components cause costly infrastructure duplication during hard forks | T-062 (E-324) |
| Hard forks arrive without adequate notice; builders want a network status interface | T-084 (E-122) |
| App migration after infrastructure changes | T-069 (E-354) |
| Small-value stablecoin transfer cost and collateral rules are a fee-parameter and wallet question, not a Layer 2 one | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 8.6; [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), ranks 1 and 2 |

**4. Where RFP 07 Depends on Other Work**

| This study's finding or recommendation | Depends on | Owner |
|---|---|---|
| Layer 2 barriers tied to base-layer throughput | Ouroboros Leios delivery, targeted for late 2026 | Technical roadmap workstream |
| Recommendations on Layer 2 investment | Who owns Layer 2 infrastructure after the stewardship transition | Technical roadmap workstream |
| Access-channel and mobile wallet requirements, the leading interoperability need | Wallet teams' roadmaps | Wallets workstream |
| Whether USDCx becomes value-accretive | Stablecoin liquidity depth and multi-chain availability | RFP 03; liquidity workstream |
| Whether blocked builders reach mainnet | Funding access and licensing | Governance workstream; RFP 05 |

**5. Answer to Decision Gate 11 (preliminary)**

| Gate | Preliminary answer | Confidence |
|---|---|---|
| 11. Which findings should be handed to adjacent RFPs or workstreams? | Why builders choose or leave Cardano to RFP 02; liquidity to RFP 03 and the liquidity workstream; licensing, identity and local capacity to RFP 05; enterprise readiness to RFP 06; the missing service-provider ecosystem to RFP 08; AI positioning to RFP 09; developer experience to the DevX workstream; wallet access to the wallets workstream; governance and builder funding access to the governance workstream; Layer 2 stewardship, hard-fork practice and fee parameters to the technical roadmap workstream. | Medium |

**6. Limitations**

- Most routed findings rest on one respondent each; the receiving RFP or workstream should treat them as leads, not settled conclusions.

**7. AI Use Disclaimer**

AI tools were used in the analysis and drafting behind this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.

**Document Version History**

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 10 October 2026 | Abdulbasit Adigun Abdulrahman | Compiled through Milestone 3 |
