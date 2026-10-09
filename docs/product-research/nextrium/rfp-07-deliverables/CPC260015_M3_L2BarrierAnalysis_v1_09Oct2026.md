---
title: "L2 Barrier Analysis - NexTrium Milestone 3 (CPC-26-0015)"
sidebar_label: "L2 Barrier Analysis"
---

**NEXTRIUM**

Global Innovations Ltd

**L2 Barrier Analysis**

*Ranked analysis of what blocks Layer 2 and interoperability deployment on Cardano*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D1 (Proposal Section 13)                                                        |
| **Status**                | Draft for Milestone 3; final at Milestone 4                                     |
| **Version**               | 1.0                                                                             |
| **Date**                  | 9 October 2026                                                                  |
| **Confidentiality**       | Summary public; this full version is redacted for publication |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This is the draft L2 Barrier Analysis (D1). It ranks what is blocking Layer 2 and interoperability deployment for the builders and operators in this research, classifies each barrier, and recommends an action and owner. It answers Decision Gates 1, 2 and 3.

Respondents who chose anonymised or confidential treatment are identified by category only.

**1. Summary**

**Main findings**

1. **The most severe barriers are not Layer 2 throughput.** The highest-ranked barriers are the cost of small stablecoin transfers and the requirement to hold ADA to use smart contracts. Both are Ecosystem and UX barriers in how fees and assets work, not missing Layer 2 capability.
2. **Genuine Layer 2 barriers exist but are narrow.** They concern oracle data publication, on-chain order matching, micropayments with native tokens, continuous sensor data and permissionless fast transactions. Most rest on infrastructure builders and providers, and their technical review is pending.
3. **Reach and access matter as much as capability.** Reaching users by phone number, without internet, or on mobile is blocked or needs significant extra work.
4. **Commercial sustainability is a recurring barrier.** Native oracle and integration services are not sustainable while free or subsidised alternatives exist and builders do not pay.

**Decisions this supports**

Gates 1, 2 and 3: which applications are blocked by missing Layer 2 capability, which capability matters most, and whether each blocker calls for engineering, documentation, partnerships, wallet support, commercial incentives, builder activation or no action.

**2. Method**

**How to read this analysis**

- Each barrier passed the relevance test: it blocks a named Layer 2 or interoperability workflow. Blockers that did not pass are routed to the Cross-RFP Handoff Memo or recorded as negative-case evidence (57 and 15 tests respectively).
- Every barrier is classified with our Technical and Commercial Blocker Taxonomy (D10): type, severity, adoption impact, urgency, owner, confidence, affected use case and evidence source.
- Barriers are ranked by severity, then urgency, then confidence. Barriers with identical ratings share a rank. Where the evidence behind one barrier differs, the range is shown.
- **Direct evidence and our assessment.** The evidence source and tests are direct evidence. Type, severity, urgency, owner and action are our assessment, made under D10.
- **Insider and external evidence.** "Evidence base" shows whether a barrier rests on Cardano builders and providers (insider), on non-Cardano operators or desk research (external), or on both.
- **Technical feasibility and demand.** A barrier records that a deployment is blocked. Whether a technical claim is accurate is tested separately in the technical review by Samir Idris, which is pending for the entries marked.
- Barriers from our own validation work are listed separately in Section 4 and are not ranked with independent evidence.

**3. Ranked Barriers (independent evidence)**

| Rank | Barrier | Type | Severity | Urgency | Confidence | Recommended action |
|---|---|---|---|---|---|---|
| 1 | Stablecoin-only users cannot use smart contracts without holding ADA | UX | High | High | High | Pursue wallet support |
| 2 | Small-value stablecoin transfers cost several times the routes African users already use | Ecosystem | High | High | Medium | Fund engineering |
| 3 | Providers depend on core components they cannot influence | Coordination | High | Low | Medium | Establish bridge or provider partnerships |
| 4 | Exchange wallet-infrastructure partners do not support Cardano | Ecosystem | High | Low | Low | Establish bridge or provider partnerships |
| 4 | Bulk refunds to many recipients were not possible at the time | Technical | High | Low | Low | Reject |
| 6 | Users cannot be reached by phone number or without internet through Cardano wallets | Ecosystem | Medium to High | Medium to High | Medium | Pursue wallet support |
| 7 | Order matching on-chain conflicts with deterministic transactions | Technical | Medium to High | Medium | Medium | Fund engineering |
| 8 | Native oracle and integration services are not commercially sustainable | Commercial | Medium to High | Low to Medium | Medium | Provide commercial incentives |
| 9 | No native mobile wallet integration path for Cardano applications | Ecosystem | Medium | High | Medium | Pursue wallet support |
| 10 | Fees rise for users who receive many small payments | UX | Medium | Medium | High | Pursue wallet support |
| 10 | Layer 2 options cannot be reliably found or assessed | Coordination | Medium | Medium | High | Improve documentation |
| 12 | Seed-phrase wallets are a barrier for users used to mobile money | UX | Medium | Medium | Medium | Pursue wallet support |
| 12 | Micropayments carrying native tokens are costly | Technical | Medium | Medium | Medium | Fund engineering |
| 12 | Continuous sensor data cannot be recorded on-chain | Technical | Medium | Medium | Medium | Fund engineering |
| 12 | Fast transactions between parties not known in advance | Technical | Medium | Medium | Medium | Fund engineering |
| 12 | Custom data cannot be published through a native oracle without a sponsored arrangement | Ecosystem | Medium | Medium | Medium | Establish bridge or provider partnerships |
| 12 | Issuing identity credentials requires a full node | Ecosystem | Medium | Medium | Medium | Establish bridge or provider partnerships |
| 18 | Oracle data cannot be published at the speed and cost clients need | Technical | Medium | Medium | Low to Medium | Fund engineering |
| 19 | On-chain compute limits block processing of large lists | Technical | Medium | Medium | Low | Fund engineering |
| 19 | No tier-one messaging layer on Cardano testnets | Ecosystem | Medium | Medium | Low | Establish bridge or provider partnerships |
| 19 | Cross-chain bridging robustness is weak | Ecosystem | Medium | Medium | Low | Establish bridge or provider partnerships |
| 19 | Partner-chain projects are not commercially self-sustaining | Commercial | Medium | Medium | Low | Provide commercial incentives |
| 23 | Providers build their own tools when upstream tooling stops | Tooling | Medium | Low | Low | Improve documentation |
| 24 | Integrating a partner chain or bridge with Cardano takes far longer than with EVM chains | Tooling | Low to Medium | Low to Medium | Low | Improve documentation |

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
| Evidence source | Desk Research Summary 8.6 |
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
| Evidence source | Desk Research Summary 8.6 (Cardano fee documentation; Tron and Celo cost data); contradicting: E-017 (R-001), E-036 (R-002), E-491 (R-031) |
| Tests | DR-05 |
| Technical review (Samir Idris) | Not in technical review scope |
| Note | The gap is cost structure, not throughput (Desk Research Summary Section 8.6). Three Cardano builders say Cardano fees are low and not their main cost, which is set by mobile money operators and local payment providers (E-017, E-036, E-491); the desk comparison is against Tron and Celo. Confidence is therefore Medium. |

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
| Evidence source | E-109 (T-027); Desk Research Summary 6.2 |
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
| Technical review (Samir Idris) | Samir A8, pending |
| Note | Historical. No action now; to be re-tested against base-layer changes. |

### 6. Users cannot be reached by phone number or without internet through Cardano wallets

| Field | Detail |
|---|---|
| Blocker and adoption impact | Users without smartphones or internet, and users who expect to send money to a phone number, cannot be reached through Cardano wallets. Builders who need this must build their own USSD layer. |
| Affected use case | Reaching users by phone number on Cardano; Reaching basic-phone and offline users (R-001) |
| Relevance | Interoperability workflow (wallet user experience) |
| Type | Ecosystem |
| Severity | Medium to High |
| Urgency | Medium to High |
| Evidence confidence | Medium |
| Owner or workstream | Wallets workstream |
| Recommended action | Pursue wallet support |
| Evidence base | Cardano builders (insider); desk research (external) |
| Respondents | R-001 Paul Mupenda (Category 1) |
| Evidence source | Desk Research Summary 3.13, 8.3; E-256, E-489 (qualifying); E-022 (T-006); E-041, E-237, E-257, E-276, E-351; counter-evidence E-256, E-489; Desk Research Summary 3.13 |
| Tests | DR-01, T-006 |
| Technical review (Samir Idris) | Not in technical review scope |
| Note | Two respondents have built USSD access at the application layer (E-256, E-489), so the workflow is possible with significant extra work. |

### 7. Order matching on-chain conflicts with deterministic transactions

| Field | Detail |
|---|---|
| Blocker and adoption impact | Fully on-chain order books are impractical. Projects use centralised off-chain batchers, which limits throughput, and one order-book DEX cannot move beyond prototype. |
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
| Technical review (Samir Idris) | Samir A3, pending (conflict check) |
| Note | One respondent states a 30 to 65 times throughput increase would not change this (E-137); another expects Leios to help. |

### 8. Native oracle and integration services are not commercially sustainable

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
| Evidence source | E-091 (T-019); E-075; E-100 (R-006); E-336 (R-021); Desk Research Summary 6.1, 6.5, 9.1; E-117 (T-029); R-005 E-091 (T-019); Desk Research Summary 6.1; E-098 (T-020); E-331, E-333 (R-021); Desk Research Summary 9.2; E-335 (T-064); Desk Research Summary 6.5, 9.1; E-436 (T-094); E-335 (T-064); Desk Research Summary 9.2 |
| Tests | T-019, T-029, T-020, T-064, T-094 |
| Technical review (Samir Idris) | Not in technical review scope |
| Note | Free access to the subsidised oracle ends around June 2027 (Desk Research Summary Section 6.5). |

### 9. No native mobile wallet integration path for Cardano applications

| Field | Detail |
|---|---|
| Blocker and adoption impact | Phone-first users cannot use an escrow marketplace that is limited to computers; other builders report the same gap. |
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
| Technical review (Samir Idris) | Samir C1, pending |
| Note | Lead respondent is seeking funding; corroborated by two respondents who are not (E-071, E-432). Also recorded as T-106. |

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
| Evidence source | Desk Research Summary 8.6 |
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
| Evidence source | Desk Research Summary 3.2, 3.14, 9.5 |
| Tests | DR-08 |
| Technical review (Samir Idris) | Not in technical review scope |

### 12. Seed-phrase wallets are a barrier for users used to mobile money

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
| Evidence source | E-021 (T-005); E-055 (R-003); Desk Research Summary 8.7 |
| Tests | T-005 |
| Technical review (Samir Idris) | Not in technical review scope |

### 12. Micropayments carrying native tokens are costly

| Field | Detail |
|---|---|
| Blocker and adoption impact | Sending tokens to many recipients or making micropayments costs more than intended, so products batch claims or build multi-signature workarounds. |
| Affected use case | DripDropz micropayments and token distribution (R-021); DripDropz micropayments (R-021) |
| Relevance | Layer 2 workflow |
| Type | Technical |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | Medium |
| Owner or workstream | Technical roadmap workstream |
| Recommended action | Fund engineering |
| Evidence base | Cardano infrastructure builder (insider); Cardano ledger documentation |
| Respondents | R-021 Adam Dean (DripDropz, and multiple other Cardano tooling projects: Onboard Ninja, Veraraglyph, Buffybot Publishing, Hydra Events, Ecclesia) (Category 2) |
| Evidence source | E-321 (T-060); E-320 (T-086); E-326; Cardano ledger documentation (minimum ada value); E-320 (T-086); E-321 (T-060); ledger documentation |
| Tests | T-060, T-086 |
| Technical review (Samir Idris) | Samir A5, pending |
| Note | The minimum-ada rule works as designed; the respondent expects a planned protocol feature to ease it. |

### 12. Continuous sensor data cannot be recorded on-chain

| Field | Detail |
|---|---|
| Blocker and adoption impact | Sensor-driven applications cannot record every reading on-chain and must design hybrid off-chain systems. |
| Affected use case | Smart Hatch IoT sensor data (R-022) |
| Relevance | Layer 2 workflow |
| Type | Technical |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | Medium |
| Owner or workstream | Technical roadmap workstream |
| Recommended action | Fund engineering |
| Evidence base | Cardano builder (insider); Cardano infrastructure provider (insider) |
| Respondents | R-022 Solomon Salifu (North Bits / Tamil Hub - Smart Hatch poultry value-chain platform, northern Ghana) (Category 1) |
| Evidence source | E-348 (T-067); E-099, E-102 (R-006) |
| Tests | T-067 |
| Technical review (Samir Idris) | Samir A7, pending |
| Note | Lead respondent is seeking funding; corroborated by a provider reporting builder requests for real-time sensor data. |

### 12. Fast transactions between parties not known in advance

| Field | Detail |
|---|---|
| Blocker and adoption impact | Applications that need fast transactions among strangers cannot use Hydra, where participants are fixed before a head opens. |
| Affected use case | UTXOS fast transactions between parties not known in advance (R-004) |
| Relevance | Layer 2 workflow |
| Type | Technical |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | Medium |
| Owner or workstream | Technical roadmap workstream |
| Recommended action | Fund engineering |
| Evidence base | Cardano builder (insider); desk research (external) |
| Respondents | R-004 Emmanuel Asaolu (UTXOS) (Category 1) |
| Evidence source | E-064, E-074 (T-013); Desk Research Summary 3.6 (participant set fixed before a head opens); contrast E-329 |
| Tests | T-013 |
| Technical review (Samir Idris) | Samir A6, pending |
| Note | The constraint is documented (Desk Research Summary Section 3.6); demand rests on one respondent. |

### 12. Custom data cannot be published through a native oracle without a sponsored arrangement

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
| Evidence source | Desk Research Summary 6.3, 6.4, 6.10; VAL-004 (VAL Set 6.4) |
| Tests | DR-04 |
| Technical review (Samir Idris) | Not in technical review scope |

### 12. Issuing identity credentials requires a full node

| Field | Detail |
|---|---|
| Blocker and adoption impact | Credential issuers must run a full Cardano node, wallet and database because the hosted API provider does not support DID publishing. |
| Affected use case | Issuing decentralised identity credentials on Cardano |
| Relevance | Interoperability workflow (identity and data portability) |
| Type | Ecosystem |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | Medium |
| Owner or workstream | Hosted API provider; Identus maintainer community |
| Recommended action | Establish bridge or provider partnerships |
| Evidence base | Desk research (external); independent technical review |
| Respondents | Not applicable |
| Evidence source | Desk Research Summary 3.13, 5.3; VAL-003; D-M1-03 |
| Tests | DR-02 |
| Technical review (Samir Idris) | Not in technical review scope |

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
| Evidence source | E-080 (T-016); R-006 (T-021 to T-028); Desk Research Summary 3.7; E-089 (T-018); R-006 E-104 (T-023); Desk Research Summary 8.6; E-099 (T-021); R-005 (T-016); Desk Research Summary 3.7; E-104 (T-023); R-005 E-089 (T-018); Desk Research Summary 8.6; E-105 (T-024); E-113 (T-028); E-113 (T-028); E-105 (T-024) |
| Tests | T-016, T-018, T-021, T-023, T-024, T-028 |
| Technical review (Samir Idris) | Samir A1, pending; Samir A2, pending |
| Note | Neither provider names this as its only blocker; commercial causes are recorded separately. |

### 19. On-chain compute limits block processing of large lists

| Field | Detail |
|---|---|
| Blocker and adoption impact | Contracts that must process lists of thousands of entries cannot run on-chain, which raises delivery cost. |
| Affected use case | Smart contracts processing large lists (R-007) |
| Relevance | Layer 2 workflow |
| Type | Technical |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | Low |
| Owner or workstream | Technical roadmap workstream |
| Recommended action | Fund engineering |
| Evidence base | Cardano infrastructure builder (insider) |
| Respondents | R-007 Vladimir Kalnitsky (Independent Cardano tooling developer / consultant, former builder) (Category 2) |
| Evidence source | E-133 (T-034) |
| Tests | T-034 |
| Technical review (Samir Idris) | Samir A4, pending |
| Note | Single source. |

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
| Evidence source | Desk Research Summary 3.13, 4.9 |
| Tests | DR-03 |
| Technical review (Samir Idris) | Not in technical review scope |
| Note | Single source. |

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
| Evidence source | E-480 (T-107); E-473; Desk Research Summary 4.8, 4.9, 3.13 |
| Tests | T-107 |
| Technical review (Samir Idris) | Samir B2, pending |
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

### 23. Providers build their own tools when upstream tooling stops

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

### 24. Integrating a partner chain or bridge with Cardano takes far longer than with EVM chains

| Field | Detail |
|---|---|
| Blocker and adoption impact | Integration with Cardano took 6 to 12 months against 1 to 2 months for an EVM chain. AI tools now reduce coding time, but security hardening takes as long as before. |
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
| Evidence source | E-468 (T-075); E-471 (T-100); Desk Research Summary 4.3, 9.6; E-471 (T-100); E-468 (T-075); Desk Research Summary 9.6; E-469 (T-099) |
| Tests | T-075, T-100, T-099 |
| Technical review (Samir Idris) | Samir B1, pending |
| Note | Provider-side finding held at Low. |

**4. Barriers From Our Own Validation Work**

These barriers come from our own protocol validation. We disclose them as conflicted evidence and keep them separate from independent evidence.

### Last-mile stablecoin distribution routes off Cardano

| Field | Detail |
|---|---|
| Blocker and adoption impact | In our own validation work, distributions to phone-number recipients route to Celo MiniPay because no comparable Cardano path exists. |
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
| Evidence source | VAL-006 (corrected basis, VAL Set v1.1 6.5); Desk Research Summary 3.13, 8.6 |
| Tests | T-109 |
| Technical review (Samir Idris) | Samir D2, pending |
| Note | Low confidence: our own work, partly triangulated by respondent demand for basic-phone access. |

### Identity credential issuance carries undocumented setup and infrastructure burden

| Field | Detail |
|---|---|
| Blocker and adoption impact | In our own validation work, issuing credentials needed a full node, wallet and database, and undocumented configuration added engineering burden. |
| Affected use case | Identus DID publication and credential issuance (our own VAL-003) |
| Relevance | Interoperability workflow (identity and data portability) |
| Type | Tooling |
| Severity | Medium |
| Urgency | Medium |
| Evidence confidence | Medium |
| Owner or workstream | DevX workstream; Identus maintainer community |
| Recommended action | Improve documentation |
| Evidence base | Our own validation work (conflicted evidence); independent technical review |
| Respondents | Not applicable |
| Evidence source | VAL-003; Independent Technical Review D-M1-03; Desk Research Summary 5.3 to 5.9 |
| Tests | T-108 |
| Technical review (Samir Idris) | Samir D1, pending |
| Note | Pipeline independently reproduced (Medium); the issuance asymmetry is Low. |

**5. Distribution by Type**

| Type | Barriers |
|---|---|
| Ecosystem | 9 |
| Technical | 7 |
| UX | 3 |
| Tooling | 3 |
| Coordination | 2 |
| Commercial | 2 |

No barrier type dominates. Technical barriers are a minority, which is consistent with our Hypothesis 3: many apparent Layer 2 blockers are something else.

**6. Limitations**

**Limitations and unresolved questions**

- One bridge, interoperability or wallet provider was interviewed against a committed five to eight. Provider-side barriers are held at Low confidence.
- The technical review of provider claims (Samir Idris) is pending for 12 barriers. Their technical classification may change in the final version.
- Several Layer 2 barriers may be affected by Ouroboros Leios, targeted for mainnet in late 2026 (Desk Research Summary Section 3.7). They are re-tested before the final version.
- Single-source barriers are held at Low confidence.
- One blocker could not be classified because the evidence was incomplete (Unknown). It is carried as an unresolved question.

**AI Use Disclaimer**

AI tools were used in the analysis and drafting behind this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.

**Document Version History**

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 9 October 2026 | Abdulbasit Adigun Abdulrahman | Draft for Milestone 3 |
