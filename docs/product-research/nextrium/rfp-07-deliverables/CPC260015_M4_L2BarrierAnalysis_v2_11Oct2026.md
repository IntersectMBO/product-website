---
title: "L2 Barrier Analysis (Final) - NexTrium Milestone 4 (CPC-26-0015)"
sidebar_label: "L2 Barrier Analysis"
---

**NEXTRIUM**

Global Innovations Ltd

**L2 Barrier Analysis**

*Ranked analysis of what blocks Layer 2 and interoperability deployment on Cardano*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D1 (Proposal Section 13)                                                        |
| **Status**                | Final for Milestone 4                                                           |
| **Version**               | 2.0                                                                             |
| **Date**                  | 11 October 2026                                                                 |
| **Confidentiality**       | Summary public; this full version is redacted for publication |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This is the final L2 Barrier Analysis (D1). It ranks what is blocking Layer 2 and interoperability deployment for the builders and operators in this research, classifies each barrier, and recommends an action and owner. It answers Decision Gates 1, 2 and 3.

Respondents who chose anonymised or confidential treatment are identified by category only.

**1. Summary**

**Main findings**

1. **The most severe barriers are not Layer 2 throughput.** The highest-ranked barriers are the cost of small stablecoin transfers and the requirement to hold ADA to use smart contracts. Both are Ecosystem and UX barriers in how fees and assets work, not missing Layer 2 capability.
2. **Genuine Layer 2 barriers exist but are narrow.** They concern oracle data publication, high-frequency order matching, micropayments with native tokens, continuous sensor data and fast transactions between parties not known in advance. Most rest on infrastructure builders and providers. An independent technical review confirmed four of these claims and qualified the rest.
3. **Reach and access matter as much as capability.** Reaching users without internet or on basic phones needs significant extra work, phone-number payments exist but are not low-cost, and mobile wallet connection is fragmented.
4. **Commercial sustainability is a recurring barrier.** Native oracle and integration services are not sustainable while free or subsidised alternatives exist and builders do not pay.

**Decisions this supports**

Gates 1, 2 and 3: which applications are blocked by missing Layer 2 capability, which capability matters most, and whether each blocker calls for engineering, documentation, partnerships, wallet support, commercial incentives, builder activation or no action.

**2. Method**

**How to read this analysis**

- Each barrier passed the relevance test: it blocks a named Layer 2 or interoperability workflow. Blockers that did not pass are routed to the [Cross-RFP Handoff Memo](./CPC260015_M4_CrossRFPHandoffMemo_v2_11Oct2026.md) or recorded as negative-case evidence (57 and 15 tests respectively).
- Every barrier is classified with our [Technical and Commercial Blocker Taxonomy](./CPC260015_M4_TechnicalCommercialBlockerTaxonomy_v2_11Oct2026.md) (D10): type, severity, adoption impact, urgency, owner, confidence, affected use case and evidence source.
- Barriers are ranked by severity, then urgency, then confidence. Barriers with identical ratings share a rank. Where the evidence behind one barrier differs, the range is shown.
- **Direct evidence and our assessment.** The evidence source and tests are direct evidence. Type, severity, urgency, owner and action are our assessment, made under D10.
- **Insider and external evidence.** "Evidence base" shows whether a barrier rests on Cardano builders and providers (insider), on non-Cardano operators or desk research (external), or on both.
- **Technical feasibility and demand.** A barrier records that a deployment is blocked. Whether a technical claim is accurate was tested separately in a technical review by Samir Idris (Section 6). A confirmed claim counts as an additional evidence type when rating confidence.
- Barriers from our own validation work are listed separately in Section 4 and are not ranked with independent evidence.

**3. Ranked Barriers (independent evidence)**

| Rank | Barrier | Type | Severity | Urgency | Confidence | Recommended action |
|---|---|---|---|---|---|---|
| 1 | Stablecoin-only users cannot use smart contracts without holding ADA | UX | High | High | High | Pursue wallet support |
| 2 | Small-value stablecoin transfers cost several times the routes African users already use | Ecosystem | High | High | Medium | Fund engineering |
| 3 | Providers depend on core components they cannot influence | Coordination | High | Low | Medium | Establish bridge or provider partnerships |
| 4 | Exchange wallet-infrastructure partners do not support Cardano | Ecosystem | High | Low | Low | Establish bridge or provider partnerships |
| 4 | Bulk refunds to many recipients were not possible at the time | Technical | High | Low | Low | Reject |
| 6 | High-frequency on-chain order matching faces concurrency and throughput limits | Technical | Medium to High | Medium | Medium | Fund engineering |
| 7 | Native oracle and integration services are not commercially sustainable | Commercial | Medium to High | Low to Medium | Medium | Provide commercial incentives |
| 8 | Mobile wallet connection for Cardano applications is fragmented | Ecosystem | Medium | High | Medium | Pursue wallet support |
| 9 | Users without smartphones or internet cannot be reached through Cardano wallets, and phone-number payments are not low-cost | Ecosystem | Medium | Medium to High | Medium | Pursue wallet support |
| 10 | Fees rise for users who receive many small payments | UX | Medium | Medium | High | Pursue wallet support |
| 10 | Layer 2 options cannot be reliably found or assessed | Coordination | Medium | Medium | High | Improve documentation |
| 10 | Micropayments carrying native tokens are costly | Technical | Medium | Medium | High | Fund engineering |
| 10 | Continuous sensor data cannot be recorded on-chain | Technical | Medium | Medium | High | Fund engineering |
| 10 | Fast transactions between parties not known in advance | Technical | Medium | Medium | High | Fund engineering |
| 15 | Seed-phrase wallets are a barrier for users used to mobile money | UX | Medium | Medium | Medium | Pursue wallet support |
| 15 | Custom data cannot be published through a native oracle without a sponsored arrangement | Ecosystem | Medium | Medium | Medium | Establish bridge or provider partnerships |
| 15 | On-chain compute limits block processing of large lists | Technical | Medium | Medium | Medium | Fund engineering |
| 18 | Oracle data cannot be published at the speed and cost clients need | Technical | Medium | Medium | Low to Medium | Fund engineering |
| 19 | No tier-one messaging layer on Cardano testnets | Ecosystem | Medium | Medium | Low | Establish bridge or provider partnerships |
| 19 | Cross-chain bridging robustness is weak | Ecosystem | Medium | Medium | Low | Establish bridge or provider partnerships |
| 19 | Partner-chain projects are not commercially self-sustaining | Commercial | Medium | Medium | Low | Provide commercial incentives |
| 22 | Providers build their own tools when upstream tooling stops | Tooling | Medium | Low | Low | Improve documentation |
| 23 | Integrating a partner chain or bridge with Cardano takes far longer than with EVM chains | Tooling | Low to Medium | Low to Medium | Low | Improve documentation |
| 24 | Publishing identity credentials needs extra setup | Tooling | Low | Low | Medium | Improve documentation |

### 1. Stablecoin-only users cannot use smart contracts without holding ADA

| Field | Detail |
|---|---|
| Blocker and adoption impact | A user who holds only stablecoins cannot interact with a Cardano smart contract without first acquiring ADA for fees and collateral, which blocks first-time and informal-economy users. |
| Affected use case | Stablecoin-only users interacting with smart contracts |
| Relevance | Interoperability workflow (wallet user experience) |
| Type | UX |
| Severity | High |
| Urgency | High |
| Evidence confidence | High |
| Owner or workstream | Wallets workstream |
| Recommended action | Pursue wallet support |
| Evidence base | Desk research (external) |
| Respondents | Not applicable |
| Evidence source | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 8.6 |
| Tests | DR-07 |
| Technical review (Samir Idris) | Not in technical review scope |

### 2. Small-value stablecoin transfers cost several times the routes African users already use

| Field | Detail |
|---|---|
| Blocker and adoption impact | A Cardano stablecoin transfer costs about six to nine times the routes now serving African users, so payment builders and users have little reason to choose Cardano for small transfers. |
| Affected use case | Small-value stablecoin transfers |
| Relevance | Layer 2 workflow |
| Type | Ecosystem |
| Severity | High |
| Urgency | High |
| Evidence confidence | Medium |
| Owner or workstream | Technical roadmap workstream; wallets workstream |
| Recommended action | Fund engineering |
| Evidence base | Desk research (external); Cardano builders (insider) |
| Respondents | Not applicable |
| Evidence source | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 8.6 (Cardano fee documentation; Tron and Celo cost data); contradicting: E-017 (R-001), E-036 (R-002), E-491 (R-031) |
| Tests | DR-05 |
| Technical review (Samir Idris) | Not in technical review scope |
| Note | The gap is cost structure, not throughput ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 8.6). Three Cardano builders say Cardano fees are low and not their main cost, which is set by mobile money operators and local payment providers (E-017, E-036, E-491); the desk comparison is against Tron and Celo. Confidence is therefore Medium. |

### 3. Providers depend on core components they cannot influence

| Field | Detail |
|---|---|
| Blocker and adoption impact | An oracle provider's feed went offline for two months when a core component it relied on was discontinued. Providers carry the risk of upstream decisions they cannot affect. |
| Affected use case | Orcfax oracle feed dependent on a core component (R-006) |
| Relevance | Interoperability workflow (identity and data portability: oracle data) |
| Type | Coordination |
| Severity | High |
| Urgency | Low |
| Evidence confidence | Medium |
| Owner or workstream | Input Output (party the dependency rested on); governance |
| Recommended action | Establish bridge or provider partnerships |
| Evidence base | Cardano infrastructure provider (insider); desk research (external) |
| Respondents | R-006 Orcfax / Ross Spencer (Technical Lead) (Category 2) |
| Evidence source | E-109 (T-027); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 6.2 |
| Tests | T-027 |
| Technical review (Samir Idris) | Not in technical review scope |
| Note | Historical (2024); the provider moved to community-maintained tools. |

### 4. Exchange wallet-infrastructure partners do not support Cardano

| Field | Detail |
|---|---|
| Blocker and adoption impact | A non-Cardano exchange does not list Cardano assets because the wallet-infrastructure partners it relies on do not support Cardano. |
| Affected use case | Exxon Exchange listing Cardano assets (R-009) |
| Relevance | Interoperability workflow (wallet user experience: wallet infrastructure) |
| Type | Ecosystem |
| Severity | High |
| Urgency | Low |
| Evidence confidence | Low |
| Owner or workstream | Business development teams; wallets workstream |
| Recommended action | Establish bridge or provider partnerships |
| Evidence base | Non-Cardano operator (external) |
| Respondents | R-009 Exxon Exchange / Void Walker (Founder) (Category 4) |
| Evidence source | E-157 (T-039); E-158 |
| Tests | T-039 |
| Technical review (Samir Idris) | Not in technical review scope |
| Note | No decision is pending; the respondent says it is 'just not time yet'. |

### 4. Bulk refunds to many recipients were not possible at the time

| Field | Detail |
|---|---|
| Blocker and adoption impact | A crowdfunding refund to many contributors in one operation could not be built on a past hackathon project. |
| Affected use case | 8pod bulk refunds to many contributors (R-003) |
| Relevance | Layer 2 workflow |
| Type | Technical |
| Severity | High |
| Urgency | Low |
| Evidence confidence | Low |
| Owner or workstream | Technical roadmap workstream |
| Recommended action | Reject |
| Evidence base | Cardano builder (insider) |
| Respondents | R-003 Kadiri Ahmed Tunde (Cardano Bounties) (Category 1) |
| Evidence source | E-051 (T-012); E-053 |
| Tests | T-012 |
| Technical review (Samir Idris) | A8: cannot assess. Cardano supports many recipients in one transaction within the maximum transaction size, so larger refund sets are split into batches; this is solvable today. |
| Note | Historical. No action now; solvable today by batching recipients (technical review item A8). |

### 6. High-frequency on-chain order matching faces concurrency and throughput limits

| Field | Detail |
|---|---|
| Blocker and adoption impact | High-frequency order books face genuine concurrency and throughput limits on Cardano. Projects work around them with off-chain batchers or routers and parallel UTxO designs, and one order-book DEX has not moved beyond prototype. |
| Affected use case | On-chain order matching for order-book DEXs (R-007); True-orderbook DEX prototype (R-027) |
| Relevance | Layer 2 workflow |
| Type | Technical |
| Severity | Medium to High |
| Urgency | Medium |
| Evidence confidence | Medium |
| Owner or workstream | Technical roadmap workstream |
| Recommended action | Fund engineering |
| Evidence base | Cardano infrastructure builders (insider) |
| Respondents | R-007 Vladimir Kalnitsky (Independent Cardano tooling developer / consultant, former builder) (Category 2); R-027 (Category 2, anonymised) |
| Evidence source | E-126 (T-030); E-426 (R-027, T-074); E-137; E-426 (T-074); E-126 (R-007, T-030) |
| Tests | T-030, T-074 |
| Technical review (Samir Idris) | A3: partially confirmed. The reviewer declared a conflict (prior Cardano DEX experience). Matching is not universally limited to one match per transaction and a centralised batcher is not forced; Leios may raise throughput but does not remove application-level matching constraints. |
| Note | One respondent states a 30 to 65 times throughput increase would not change this (E-137); another expects Leios to help. |

### 7. Native oracle and integration services are not commercially sustainable

| Field | Detail |
|---|---|
| Blocker and adoption impact | Native oracle providers cannot charge while a subsidised competitor is free, and builders will not or cannot pay for data and integrations once free periods end. One provider ceased Cardano-focused operations and another became inactive. |
| Affected use case | Native oracle provision on Cardano (R-005); Native oracle provision on Cardano (R-006); Decentralised oracle data services (R-006); Integrating the subsidised oracle (R-021); Paying for ecosystem integrations after free periods (R-027) |
| Relevance | Interoperability workflow (identity and data portability: oracle data) |
| Type | Commercial |
| Severity | Medium to High |
| Urgency | Low to Medium |
| Evidence confidence | Medium |
| Owner or workstream | Grant allocators (Critical Integrations budget) |
| Recommended action | Provide commercial incentives |
| Evidence base | Cardano infrastructure providers and builders (insider); desk research (external) |
| Respondents | R-005 Charli3 / Robert Hever (Category 2); R-006 Orcfax / Ross Spencer (Technical Lead) (Category 2); R-021 Adam Dean (DripDropz, and multiple other Cardano tooling projects: Onboard Ninja, Veraraglyph, Buffybot Publishing, Hydra Events, Ecclesia) (Category 2); R-027 (Category 2, anonymised) |
| Evidence source | E-091 (T-019); E-075; E-100 (R-006); E-336 (R-021); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 6.1, 6.5, 9.1; E-117 (T-029); R-005 E-091 (T-019); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 6.1; E-098 (T-020); E-331, E-333 (R-021); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 9.2; E-335 (T-064); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 6.5, 9.1; E-436 (T-094); E-335 (T-064); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 9.2 |
| Tests | T-019, T-029, T-020, T-064, T-094 |
| Technical review (Samir Idris) | Not in technical review scope |
| Note | Free access to the subsidised oracle ends around June 2027 ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 6.5). |

### 8. Mobile wallet connection for Cardano applications is fragmented

| Field | Detail |
|---|---|
| Blocker and adoption impact | Phone-first users cannot use an escrow marketplace that is limited to computers. Mobile dApp connectivity exists (CIP-45) and some mobile wallets support it, but support is uneven across wallets and integration patterns, so builders report the mobile path as harder than on other chains. |
| Affected use case | Wednesday marketplace mobile access (R-002) |
| Relevance | Interoperability workflow (wallet user experience) |
| Type | Ecosystem |
| Severity | Medium |
| Urgency | High |
| Evidence confidence | Medium |
| Owner or workstream | Wallets workstream |
| Recommended action | Pursue wallet support |
| Evidence base | Cardano builders (insider) |
| Respondents | R-002 Olivier MWATSIMULAMO (Wednesday marketplace) (Category 1) |
| Evidence source | E-038 (T-009); E-071 (R-004); E-432 (R-027) |
| Tests | T-009 |
| Technical review (Samir Idris) | C1: partially confirmed. Mobile connectivity is available today but fragmented. |
| Note | Lead respondent is seeking funding; corroborated by two respondents who are not (E-071, E-432). A duplicate test recorded as T-106 is merged into T-009. |

### 9. Users without smartphones or internet cannot be reached through Cardano wallets, and phone-number payments are not low-cost

| Field | Detail |
|---|---|
| Blocker and adoption impact | Users without smartphones or internet cannot be reached through Cardano wallets; builders who need this must build their own USSD layer. Phone-number payments now exist on Cardano through ChatterPay, but cost 0.45 ADA per send (1.6 ADA when the recipient does not yet hold the token), far above the sub-cent routes African users already use. |
| Affected use case | Reaching users by phone number on Cardano; Reaching basic-phone and offline users (R-001) |
| Relevance | Interoperability workflow (wallet user experience) |
| Type | Ecosystem |
| Severity | Medium |
| Urgency | Medium to High |
| Evidence confidence | Medium |
| Owner or workstream | Wallets workstream |
| Recommended action | Pursue wallet support |
| Evidence base | Cardano builders (insider); desk research (external) |
| Respondents | R-001 Paul Mupenda (Category 1) |
| Evidence source | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 3.13, 8.3; E-256, E-489 (qualifying); E-022 (T-006); E-041, E-237, E-257, E-276, E-351; counter-evidence E-256, E-489; [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 3.13 |
| Tests | DR-01, T-006 |
| Technical review (Samir Idris) | Related item D2: partially confirmed. Phone-number-addressed payments are now available on Cardano; no sub-cent rail exists. |
| Note | Two respondents have built USSD access at the application layer (E-256, E-489), so the workflow is possible with significant extra work. The earlier desk finding that no Cardano wallet supports phone-number addressing is superseded (Section 6). |

### 10. Fees rise for users who receive many small payments

| Field | Detail |
|---|---|
| Blocker and adoption impact | Fees scale with the number of small outputs a wallet holds, so the most active informal-economy users pay more per transfer. |
| Affected use case | Frequent small payments to one wallet |
| Relevance | Interoperability workflow (wallet user experience) |
| Type | UX |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | High |
| Owner or workstream | Wallets workstream |
| Recommended action | Pursue wallet support |
| Evidence base | Desk research (external) |
| Respondents | Not applicable |
| Evidence source | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 8.6 |
| Tests | DR-06 |
| Technical review (Samir Idris) | Not in technical review scope |

### 10. Layer 2 options cannot be reliably found or assessed

| Field | Detail |
|---|---|
| Blocker and adoption impact | No authoritative, current registry of Cardano Layer 2 options exists, so builders cannot assess or adopt capability that already exists. |
| Affected use case | Finding and assessing Cardano Layer 2 options |
| Relevance | Layer 2 workflow |
| Type | Coordination |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | High |
| Owner or workstream | Technical roadmap workstream; Layer 2 stewardship entity (Desk 6.9) |
| Recommended action | Improve documentation |
| Evidence base | Desk research (external) |
| Respondents | Not applicable |
| Evidence source | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 3.2, 3.14, 9.5 |
| Tests | DR-08 |
| Technical review (Samir Idris) | Not in technical review scope |

### 10. Micropayments carrying native tokens are costly

| Field | Detail |
|---|---|
| Blocker and adoption impact | Sending tokens to many recipients or making micropayments costs more than intended, so products batch claims or build multi-signature workarounds. |
| Affected use case | DripDropz micropayments and token distribution (R-021); DripDropz micropayments (R-021) |
| Relevance | Layer 2 workflow |
| Type | Technical |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | High |
| Owner or workstream | Technical roadmap workstream |
| Recommended action | Fund engineering |
| Evidence base | Cardano infrastructure builder (insider); Cardano ledger documentation |
| Respondents | R-021 Adam Dean (DripDropz, and multiple other Cardano tooling projects: Onboard Ninja, Veraraglyph, Buffybot Publishing, Hydra Events, Ecclesia) (Category 2) |
| Evidence source | E-321 (T-060); E-320 (T-086); E-326; Cardano ledger documentation (minimum ada value); E-320 (T-086); E-321 (T-060); ledger documentation |
| Tests | T-060, T-086 |
| Technical review (Samir Idris) | A5: confirmed. Every native-token output must carry minimum ADA. CIP-0118 Nested Transactions would let a batch share minimum-ADA requirements; it is proposed, not active on mainnet. |
| Note | The minimum-ada rule works as designed; the respondent expects a planned protocol feature to ease it. |

### 10. Continuous sensor data cannot be recorded on-chain

| Field | Detail |
|---|---|
| Blocker and adoption impact | Sensor-driven applications cannot record every reading on-chain and must design hybrid off-chain systems. |
| Affected use case | Smart Hatch IoT sensor data (R-022) |
| Relevance | Layer 2 workflow |
| Type | Technical |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | High |
| Owner or workstream | Technical roadmap workstream |
| Recommended action | Fund engineering |
| Evidence base | Cardano builder (insider); Cardano infrastructure provider (insider) |
| Respondents | R-022 Solomon Salifu (North Bits / Tamil Hub - Smart Hatch poultry value-chain platform, northern Ghana) (Category 1) |
| Evidence source | E-348 (T-067); E-099, E-102 (R-006) |
| Tests | T-067 |
| Technical review (Samir Idris) | A7: confirmed. A hybrid design that keeps rapid readings off-chain and anchors selected results on-chain is technically appropriate; no roadmap dependency. |
| Note | Lead respondent is seeking funding; corroborated by a provider reporting builder requests for real-time sensor data. |

### 10. Fast transactions between parties not known in advance

| Field | Detail |
|---|---|
| Blocker and adoption impact | Applications that need fast transactions among strangers cannot use Hydra, where participants are fixed before a head opens. |
| Affected use case | UTXOS fast transactions between parties not known in advance (R-004) |
| Relevance | Layer 2 workflow |
| Type | Technical |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | High |
| Owner or workstream | Technical roadmap workstream |
| Recommended action | Fund engineering |
| Evidence base | Cardano builder (insider); desk research (external) |
| Respondents | R-004 Emmanuel Asaolu (UTXOS) (Category 1) |
| Evidence source | E-064, E-074 (T-013); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 3.6 (participant set fixed before a head opens); contrast E-329 |
| Tests | T-013 |
| Technical review (Samir Idris) | A6: confirmed. Hydra Heads use a static participant set; Midgard, a permissionless rollup, is at pre-alpha testnet. |
| Note | The constraint is documented ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 3.6); demand rests on one respondent. |

### 15. Seed-phrase wallets are a barrier for users used to mobile money

| Field | Detail |
|---|---|
| Blocker and adoption impact | Users used to mobile money (a phone and a four-digit PIN) find seed-phrase wallets too technical, which slows onboarding. |
| Affected use case | Crypto-to-mobile-money exchange onboarding (R-001) |
| Relevance | Interoperability workflow (wallet user experience) |
| Type | UX |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | Medium |
| Owner or workstream | Wallets workstream |
| Recommended action | Pursue wallet support |
| Evidence base | Cardano builders (insider); desk research (external) |
| Respondents | R-001 Paul Mupenda (Category 1) |
| Evidence source | E-021 (T-005); E-055 (R-003); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 8.7 |
| Tests | T-005 |
| Technical review (Samir Idris) | Not in technical review scope |

### 15. Custom data cannot be published through a native oracle without a sponsored arrangement

| Field | Detail |
|---|---|
| Blocker and adoption impact | Builders who need custom data, such as revenue or real-world asset values, cannot publish it through a native oracle on a self-service basis. |
| Affected use case | Publishing custom oracle data |
| Relevance | Interoperability workflow (identity and data portability: oracle data) |
| Type | Ecosystem |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | Medium |
| Owner or workstream | Oracle providers; business development teams |
| Recommended action | Establish bridge or provider partnerships |
| Evidence base | Desk research (external) |
| Respondents | Not applicable |
| Evidence source | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 6.3, 6.4, 6.10; VAL-004 (VAL Set 6.4) |
| Tests | DR-04 |
| Technical review (Samir Idris) | Not in technical review scope |

### 15. On-chain compute limits block processing of large lists

| Field | Detail |
|---|---|
| Blocker and adoption impact | Contracts that must process lists of thousands of entries cannot run on-chain, which raises delivery cost. |
| Affected use case | Smart contracts processing large lists (R-007) |
| Relevance | Layer 2 workflow |
| Type | Technical |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | Medium |
| Owner or workstream | Technical roadmap workstream |
| Recommended action | Fund engineering |
| Evidence base | Cardano infrastructure builder (insider) |
| Respondents | R-007 Vladimir Kalnitsky (Independent Cardano tooling developer / consultant, former builder) (Category 2) |
| Evidence source | E-133 (T-034) |
| Tests | T-034 |
| Technical review (Samir Idris) | A4: confirmed. Per-transaction execution-unit limits are hard limits; work is split across transactions, batched or moved off-chain. No roadmap dependency. |
| Note | Single respondent; confirmed by technical review and protocol documentation. |

### 18. Oracle data cannot be published at the speed and cost clients need

| Field | Detail |
|---|---|
| Blocker and adoption impact | Two oracle providers cannot serve enterprise-grade, derivative or lower-latency feeds from Layer 1 at an acceptable cost, and no available Layer 2 fits a data consensus workflow before publication. |
| Affected use case | Charli3 oracle feeds for enterprise-grade applications (R-005); Charli3 oracle feeds for enterprise-scale use (R-005); Orcfax derivative and lower-latency price feeds (R-006); Orcfax high-volume data publication (R-006); Orcfax data consensus before publication (R-006); Orcfax peer-to-peer data consensus (R-006) |
| Relevance | Layer 2 workflow |
| Type | Technical |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | Low to Medium |
| Owner or workstream | Technical roadmap workstream |
| Recommended action | Fund engineering |
| Evidence base | Cardano infrastructure providers (insider); desk research (external) |
| Respondents | R-005 Charli3 / Robert Hever (Category 2); R-006 Orcfax / Ross Spencer (Technical Lead) (Category 2) |
| Evidence source | E-080 (T-016); R-006 (T-021 to T-028); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 3.7; E-089 (T-018); R-006 E-104 (T-023); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 8.6; E-099 (T-021); R-005 (T-016); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 3.7; E-104 (T-023); R-005 E-089 (T-018); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 8.6; E-105 (T-024); E-113 (T-028); E-113 (T-028); E-105 (T-024) |
| Tests | T-016, T-018, T-021, T-023, T-024, T-028 |
| Technical review (Samir Idris) | A1 and A2: partially confirmed. Valid for some high-volume workloads, but overgeneralised for enterprise use; monetising data consumption is also a business-model issue. Hydra may help suitable workloads but is not established as an oracle consensus layer; Leios improves throughput, not block-time granularity. |
| Note | Neither provider names this as its only blocker; commercial causes are recorded separately. |

### 19. No tier-one messaging layer on Cardano testnets

| Field | Detail |
|---|---|
| Blocker and adoption impact | Cross-chain applications cannot be built and tested against a tier-one messaging layer on testnets. |
| Affected use case | Omnichain messaging on Cardano testnets |
| Relevance | Interoperability workflow (message passing) |
| Type | Ecosystem |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | Low |
| Owner or workstream | Business development teams (Critical Integrations) |
| Recommended action | Establish bridge or provider partnerships |
| Evidence base | Desk research (external) |
| Respondents | Not applicable |
| Evidence source | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 3.13, 4.9 |
| Tests | DR-03 |
| Technical review (Samir Idris) | Not in technical review scope |
| Note | Single source. The technical review (item B2) reports LayerZero endpoint infrastructure live, with wider rollout phased. |

### 19. Cross-chain bridging robustness is weak

| Field | Detail |
|---|---|
| Blocker and adoption impact | Weak bridging robustness limits safe cross-chain movement; a partner-chain project is waiting on the LayerZero integration. |
| Affected use case | Apex Fusion cross-chain bridging (R-030) |
| Relevance | Interoperability workflow (asset bridging and message passing) |
| Type | Ecosystem |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | Low |
| Owner or workstream | Business development teams |
| Recommended action | Establish bridge or provider partnerships |
| Evidence base | Bridge and interoperability provider (insider) |
| Respondents | R-030 Jerry Fragiskatos (Apex Fusion, Co-Founder; former Cardano Chief Commercial Officer) (Category 3) |
| Evidence source | E-480 (T-107); E-473; [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 4.8, 4.9, 3.13 |
| Tests | T-107 |
| Technical review (Samir Idris) | B2: partially confirmed. The interoperability gap is valid and LayerZero is being deployed; Chainlink is not yet integrated. The claim that Circle's CCTP is missing is outdated: USDCx is live through Circle xReserve. |
| Note | Provider-side finding held at Low (one Category 3 interview). |

### 19. Partner-chain projects are not commercially self-sustaining

| Field | Detail |
|---|---|
| Blocker and adoption impact | A partner-chain project is not self-sustaining without subsidy, and venture funding for Cardano projects has been almost impossible to raise. |
| Affected use case | Apex Fusion viability as a partner chain (R-030) |
| Relevance | Interoperability workflow (partner-chain integration) |
| Type | Commercial |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | Low |
| Owner or workstream | Grant allocators; business development teams |
| Recommended action | Provide commercial incentives |
| Evidence base | Bridge and interoperability provider (insider) |
| Respondents | R-030 Jerry Fragiskatos (Apex Fusion, Co-Founder; former Cardano Chief Commercial Officer) (Category 3) |
| Evidence source | E-477 (T-101) |
| Tests | T-101 |
| Technical review (Samir Idris) | Not in technical review scope |
| Note | Provider-side finding held at Low. |

### 22. Providers build their own tools when upstream tooling stops

| Field | Detail |
|---|---|
| Blocker and adoption impact | Providers have had to build their own bridging and infrastructure tools when upstream tooling stopped or underperformed. |
| Affected use case | Charli3 cross-chain data and infrastructure tooling (R-005) |
| Relevance | Interoperability workflow (asset bridging) |
| Type | Tooling |
| Severity | Medium |
| Urgency | Low |
| Evidence confidence | Low |
| Owner or workstream | DevX workstream |
| Recommended action | Improve documentation |
| Evidence base | Cardano infrastructure provider (insider) |
| Respondents | R-005 Charli3 / Robert Hever (Category 2) |
| Evidence source | E-087 (T-082); E-076 |
| Tests | T-082 |
| Technical review (Samir Idris) | Not in technical review scope |
| Note | Historical. Single source. |

### 23. Integrating a partner chain or bridge with Cardano takes far longer than with EVM chains

| Field | Detail |
|---|---|
| Blocker and adoption impact | One provider reports that integration with Cardano took 6 to 12 months against 1 to 2 months for an EVM chain, and that AI tools now reduce coding time while security hardening takes as long as before. |
| Affected use case | Apex Fusion partner-chain integration with Cardano (R-030); Apex Fusion partner-chain integration (R-030) |
| Relevance | Interoperability workflow (partner-chain integration) |
| Type | Tooling |
| Severity | Low to Medium |
| Urgency | Low to Medium |
| Evidence confidence | Low |
| Owner or workstream | DevX workstream |
| Recommended action | Improve documentation |
| Evidence base | Bridge and interoperability provider (insider); desk research (external) |
| Respondents | R-030 Jerry Fragiskatos (Apex Fusion, Co-Founder; former Cardano Chief Commercial Officer) (Category 3) |
| Evidence source | E-468 (T-075); E-471 (T-100); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 4.3, 9.6; E-471 (T-100); E-468 (T-075); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 9.6; E-469 (T-099) |
| Tests | T-075, T-100, T-099 |
| Technical review (Samir Idris) | B1: cannot assess the figures, which are specific to the respondent; the broader tooling gap is plausible. |
| Note | Provider-side finding held at Low. |

### 24. Publishing identity credentials needs extra setup

| Field | Detail |
|---|---|
| Blocker and adoption impact | Our tested setup needed a full Cardano node, wallet and database to publish identity credentials. A node-free path now exists: NeoPRISM's embedded wallet publishes through Blockfrost. What remains is setup and documentation effort. |
| Affected use case | Issuing decentralised identity credentials on Cardano |
| Relevance | Interoperability workflow (identity and data portability) |
| Type | Tooling |
| Severity | Low |
| Urgency | Low |
| Evidence confidence | Medium |
| Owner or workstream | Hosted API provider; Identus maintainer community |
| Recommended action | Improve documentation |
| Evidence base | Desk research (external); independent technical review |
| Respondents | Not applicable |
| Evidence source | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 3.13, 5.3; VAL-003; D-M1-03 |
| Tests | DR-02 |
| Technical review (Samir Idris) | Related item D1: partially confirmed. A full node is no longer an inherent requirement. |

**4. Barriers From Our Own Validation Work**

These barriers come from our own protocol validation. We disclose them as conflicted evidence and keep them separate from independent evidence.

### Last-mile stablecoin distribution routes off Cardano

| Field | Detail |
|---|---|
| Blocker and adoption impact | In our own validation work, distributions to phone-number recipients route to Celo MiniPay. A phone-number rail now exists on Cardano (ChatterPay), but at 0.45 ADA per send it is not sub-cent, so the cost gap remains. |
| Affected use case | Last-mile stablecoin distribution to phone-number recipients (our own VAL-006) |
| Relevance | Interoperability workflow (wallet user experience) |
| Type | Ecosystem |
| Severity | High |
| Urgency | High |
| Evidence confidence | Low |
| Owner or workstream | Wallets workstream |
| Recommended action | Pursue wallet support |
| Evidence base | Our own validation work (conflicted evidence) |
| Respondents | Not applicable |
| Evidence source | VAL-006 (corrected basis, VAL Set v1.1 6.5); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 3.13, 8.6 |
| Tests | T-109 |
| Technical review (Samir Idris) | D2: partially confirmed. The addressing gap is closed; the sub-cent gap remains. |
| Note | Low confidence: our own work, partly triangulated by respondent demand for basic-phone access. |

### Identity credential issuance carries undocumented setup and infrastructure burden

| Field | Detail |
|---|---|
| Blocker and adoption impact | In our own validation work, issuing credentials needed a full node, wallet and database, and undocumented configuration added engineering burden. The configuration issues are now resolved, and a node-free publishing path exists through NeoPRISM's embedded wallet. |
| Affected use case | Identus DID publication and credential issuance (our own VAL-003) |
| Relevance | Interoperability workflow (identity and data portability) |
| Type | Tooling |
| Severity | Low |
| Urgency | Low |
| Evidence confidence | Medium |
| Owner or workstream | DevX workstream; Identus maintainer community |
| Recommended action | Improve documentation |
| Evidence base | Our own validation work (conflicted evidence); independent technical review |
| Respondents | Not applicable |
| Evidence source | VAL-003; [Independent Technical Review](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_IndependentTechnicalReview_v1_06Aug2026.md) D-M1-03; [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) 5.3 to 5.9 |
| Tests | T-108 |
| Technical review (Samir Idris) | D1: partially confirmed. The node requirement came from the tested setup and is not a Cardano base-layer requirement. |
| Note | Pipeline independently reproduced (Medium); the issuance asymmetry is Low. |

**5. Distribution by Type**

| Type | Barriers |
|---|---|
| Ecosystem | 8 |
| Technical | 7 |
| UX | 3 |
| Tooling | 4 |
| Coordination | 2 |
| Commercial | 2 |

No barrier type dominates. Technical barriers are a minority, which is consistent with our Hypothesis 3: many apparent Layer 2 blockers are something else.

**All nine blocker types across the classified evidence**

The table above counts the 26 ranked barriers. Every one of the 114 classified rows (105 tests and 9 desk-research barriers) was assigned one of the nine types, and routed by relevance:

| Type | Tied to a Layer 2 or interoperability workflow | Routed to adjacent RFPs and workstreams | Negative-case evidence | Other | Total |
|---|---|---|---|---|---|
| Technical | 14 | 0 | 1 | 0 | 15 |
| Commercial | 6 | 12 | 4 | 0 | 22 |
| Ecosystem | 9 | 4 | 0 | 1 (duplicate) | 14 |
| Liquidity | 0 | 4 | 1 | 0 | 5 |
| UX | 3 | 2 | 0 | 0 | 5 |
| Tooling | 6 | 19 | 3 | 0 | 28 |
| Coordination | 2 | 12 | 2 | 0 | 16 |
| Compliance | 0 | 4 | 4 | 0 | 8 |
| Unknown | 0 | 0 | 0 | 1 (unresolved) | 1 |
| Total | 40 | 57 | 15 | 2 | 114 |

No liquidity or compliance blocker ties to a named Layer 2 or interoperability workflow, so all are routed through the [Cross-RFP Handoff Memo](./CPC260015_M4_CrossRFPHandoffMemo_v2_11Oct2026.md) or recorded as negative-case evidence. The one unknown blocker is carried as an unresolved question. The row-level classification is published in Section 9 of the [redacted Interview Analysis Workbook](./CPC260015_M4_InterviewAnalysisWorkbookRedacted_v2_11Oct2026.md).

**6. Technical Review and Changes**

Samir Idris reviewed 13 technically complex claims behind these barriers. The full review is published as the [Technical Review of Milestone 3 Claims](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md).

| Outcome | Items | Effect on this analysis |
|---|---|---|
| Confirmed | A4, A5, A6, A7 | Confidence raised for compute limits, micropayments, sensor data and fast transactions between strangers |
| Partially confirmed | A1, A2, A3, B2, C1, D1, D2 | Claims qualified: oracle latency, order matching, bridging, mobile wallet connection, phone-number payments and identity issuance |
| Cannot assess | A8, B1 | Respondent-specific figures labelled as unverified |

The reviewer declared a conflict on item A3 (prior Cardano DEX experience); that verdict is labelled and did not change any rating.

**Positions changed after the review**

| Item | Earlier position | Where | Now | Reason |
|---|---|---|---|---|
| Phone-number payments | No Cardano wallet supports phone-number addressing | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 3.13 | Phone-number payments exist through ChatterPay, at 0.45 ADA per send; the gap is cost, and basic-phone and offline access | Technical review item D2; ChatterPay fee schedule |
| Identity credential issuance | Issuers must run a full Cardano node, wallet and database | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 5.3; [Preliminary VAL-Case Evidence Set](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_PreliminaryVALCaseEvidenceSet_v1.1_06Aug2026.md) (VAL-003) | A node-free path exists through NeoPRISM's embedded wallet; what remains is setup and documentation | Technical review item D1; NeoPRISM documentation |
| Mobile wallet connection | No native mobile wallet integration path | Respondent claim (E-038) | Mobile connectivity exists (CIP-45) but support is fragmented | Technical review item C1 |
| Order matching | Matching is limited to one per transaction and forces centralised batchers | Respondent claims (E-126, E-426) | Genuine concurrency and throughput limits for high-frequency order books; parallel designs and off-chain routers exist | Technical review item A3 |

**7. Limitations**

**Limitations and unresolved questions**

- One bridge, interoperability or wallet provider was interviewed against a committed five to eight. Provider-side barriers are held at Low confidence.
- The technical review links each Layer 2 barrier to the roadmap item that could resolve it: Leios for throughput, CIP-0118 Nested Transactions for micropayments, and Midgard for fast transactions between strangers. Compute limits and sensor data have no roadmap dependency and are handled by design. Leios and CIP-0118 arrive with the Dijkstra hard fork, tentatively December 2026 to March 2027 and subject to governance; Midgard targets mainnet readiness by the end of 2026.
- Single-source barriers are held at Low confidence unless the technical review confirmed the claim.
- One blocker could not be classified because the evidence was incomplete (Unknown). It is carried as an unresolved question.

**AI Use Disclaimer**

AI tools were used in the analysis and drafting behind this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.

**Document Version History**

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 9 October 2026 | Abdulbasit Adigun Abdulrahman | Draft for Milestone 3 |
| 2.0 | 11 October 2026 | Abdulbasit Adigun Abdulrahman | Final for Milestone 4 |
