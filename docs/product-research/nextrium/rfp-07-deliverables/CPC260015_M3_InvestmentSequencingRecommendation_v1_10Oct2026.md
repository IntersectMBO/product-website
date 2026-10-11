---
title: "Investment Sequencing Recommendation - NexTrium Milestone 3 (CPC-26-0015)"
sidebar_label: "Investment Sequencing Recommendation"
---

**NEXTRIUM**

Global Innovations Ltd

**Investment Sequencing Recommendation**

*Recommended order of Layer 2 and interoperability actions*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D8 (Proposal Section 13)                                                        |
| **Status**                | Draft for Milestone 3; final at Milestone 4                                     |
| **Version**               | 1.0                                                                             |
| **Date**                  | 10 October 2026                                                                 |
| **Confidentiality**       | Summary public; this full version is redacted for publication                   |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This is the draft Investment Sequencing Recommendation (D8). It puts every action recommended in this research into an order: what to do now, what to do in the medium term, what to defer, and what to reject. Each action is ranked on validated demand, impact, urgency, dependency, cost driver, owner or workstream, confidence, expected Cardano-side value and action type, and is linked to its evidence and decision gates. These are evidence-based sequencing recommendations, not roadmap prescriptions.

Respondents who chose anonymised or confidential treatment are identified by category only, and confidential statements are not included.

**1. Summary**

1. **Nothing is ready for "fund now".** No action meets all five minimum standards in the [Evidence Threshold Framework](./CPC260015_M3_EvidenceThresholdFramework_v1_10Oct2026.md). The strongest actions are coordination with wallet teams and the technical workstreams, which need no new funding decision to start.
2. **Act first on access, not throughput.** The four near-term actions all concern how users reach Cardano: holding ADA to use contracts, the cost of small stablecoin transfers, consistent mobile wallet connection, and low-cost phone-number and basic-phone access.
3. **Defer Layer 2 engineering funding** and track the roadmap items the technical review linked to each barrier (Leios, CIP-0118 Nested Transactions, Midgard), funding only proposals that meet the evidence threshold. Demand waiting on Layer 2 is real but narrow, and none of it is yet at scale.
4. **Monitor the interoperability pathways** until they show flows. Defer Wanchain. Reject MiniPay as a pathway, Milkomeda as a partner, and Layer 2 throughput funding justified by stalled African deployments.
5. **Confidence is highest for the near-term wallet actions** and lowest for provider-side actions, which are held at Low because one bridge, interoperability or wallet provider was interviewed against a committed five to eight.

**Sequence at a glance**

| Rank | Action | Action type | Horizon | Confidence |
|---|---|---|---|---|
| 1 | Let stablecoin-only users use smart contracts without first holding ADA | Coordinate | Near-term | High |
| 2 | Assess the cost of small-value stablecoin transfers with the workstreams that own fee parameters | Coordinate | Near-term | Medium |
| 3 | Make mobile wallet connection consistent across Cardano wallets | Coordinate | Near-term | Medium |
| 4 | Lower the cost of phone-number payments and close the basic-phone access gap | Coordinate | Near-term | Medium |
| 5 | Hold on-chain order matching until demand evidence meets the threshold | Defer | Medium-term | Medium |
| 6 | Reassess native oracle supply before funded free access ends | Monitor | Medium-term | Medium |
| 7 | Publish a maintained register of Cardano Layer 2 options and their status | Coordinate | Medium-term | High |
| 8 | Improve wallet handling of many small payments, and onboarding without seed phrases | Coordinate | Medium-term | Medium |
| 9 | Hold Layer 2 engineering funding and track the roadmap items that address each barrier | Defer | Medium-term | Medium |
| 10 | Track delivery of cross-chain messaging and bridging | Monitor | Medium-term | Low |
| 11 | Give partner-chain providers access to ecosystem decision-makers | Coordinate | Medium-term | Low |
| 12 | Address provider dependency on core components | Coordinate | Deferred | Medium |
| 13 | Exchange wallet-infrastructure support for Cardano | Defer | Deferred | Low |
| 14 | Wanchain | Defer | Deferred | Low |
| 15 | Integration tooling for partner chains and bridges | Coordinate | Deferred | Low |
| 16 | Document the node-free path for issuing identity credentials | Coordinate | Deferred | Medium |
| 17 | Interoperability pathways without observed flows | Monitor | Deferred | Low |
| 18 | Decentralised inference compute | Defer | Deferred | Low |
| 19 | Bulk refunds to many recipients | Reject | Not applicable | Low |
| 20 | Celo MiniPay as a pathway | Reject | Not applicable | Low |
| 21 | Milkomeda C1 as a partner | Reject | Not applicable | Low |
| 22 | Layer 2 throughput funding justified by stalled African deployments | Reject | Not applicable | Medium |

**2. Method**

- **Which actions.** Every recommended action in the [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), [L2 Demand Map](./CPC260015_M3_L2DemandMap_v1_09Oct2026.md), [Interoperability Requirements Register](./CPC260015_M3_InteroperabilityRequirementsRegister_v1_10Oct2026.md), [Interoperability Value-Flow Assessment](./CPC260015_M3_InteroperabilityValueFlowAssessment_v1_10Oct2026.md), [Provider and Partner Opportunity Analysis](./CPC260015_M3_ProviderPartnerOpportunityAnalysis_v1_10Oct2026.md) and [Negative-Case and Non-Cardano Evidence Summary](./CPC260015_M3_NegativeCaseNonCardanoEvidenceSummary_v1_10Oct2026.md). Actions that share an owner and a blocker are grouped. Findings routed outside RFP 07 stay in the [Cross-RFP Handoff Memo](./CPC260015_M3_CrossRFPHandoffMemo_v1_10Oct2026.md) and are not sequenced here.
- **Action type** uses the action set in RFP 07 and our proposal: fund now, coordinate, partner, monitor, defer or reject. The specific action from the blocker taxonomy (for example "pursue wallet support") is kept alongside. An action is "fund now" only where it meets all five minimum standards in the [Evidence Threshold Framework](./CPC260015_M3_EvidenceThresholdFramework_v1_10Oct2026.md).
- **Horizon** follows the urgency rule used across this research. Near-term: urgency High or Medium to High, meaning a decision is pending now and no dated roadmap item resolves it. Medium-term: a workaround is in use or a dated roadmap item is expected. Deferred: historical, nothing pending, or waiting on a trigger such as delivery or demand.
- **Rank** is by horizon, then severity, then confidence; equal actions are ordered by urgency.
- **Cost driver** names what the cost depends on. Costs are not estimated, because this research did not gather cost data.
- **Owner** names the workstream or party. Layer 2 stewardship is moving to a dedicated entity by the end of 2026, so Layer 2 actions name it alongside the technical roadmap workstream ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 6.9).
- **Confidence** comes from the source deliverable. Provider-side actions are held at Low.

**3. Near-term Actions**

### 1. Let stablecoin-only users use smart contracts without first holding ADA

| Dimension | Detail |
|---|---|
| Action type | Coordinate (pursue wallet support) |
| Validated demand | Desk evidence: a stablecoin-only holder must acquire ADA for fees and collateral before using any smart contract. Applies to every first-time and informal-economy user. |
| Impact | The workflow cannot proceed for stablecoin-only users (severity High). |
| Urgency | High |
| Dependency | Wallet teams; collateral rules sit in the protocol. |
| Cost driver | Wallet engineering to handle fees and collateral for the user, and any protocol change to collateral rules |
| Owner or workstream | Wallets workstream; technical roadmap workstream for collateral rules |
| Confidence | High |
| Expected Cardano-side value | Users who hold only stablecoins can use Cardano applications instead of staying off-chain or using another chain. |
| Evidence and gates | [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), rank 1; [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 8.6. Gates 1 and 2. |

### 2. Assess the cost of small-value stablecoin transfers with the workstreams that own fee parameters

| Dimension | Detail |
|---|---|
| Action type | Coordinate (the taxonomy action is fund engineering; the work sits with the technical workstreams that already handle fee parameters) |
| Validated demand | Desk evidence: Cardano's cost for a small stablecoin transfer is several times the routes African users already use. Three builders report fees are not their constraint, which is why confidence is Medium. |
| Impact | Cardano is uncompetitive for high-frequency small-value payments (severity High). |
| Urgency | High |
| Dependency | Fee parameters and minimum-ADA rules |
| Cost driver | Protocol parameter review and wallet-level changes |
| Owner or workstream | Technical roadmap workstream; wallets workstream |
| Confidence | Medium |
| Expected Cardano-side value | Payments that now settle on other chains could settle on Cardano. |
| Evidence and gates | [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), rank 2; [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 8.6; contradicting evidence E-017, E-036, E-491. Gate 2. |

### 3. Make mobile wallet connection consistent across Cardano wallets

| Dimension | Detail |
|---|---|
| Action type | Coordinate (pursue wallet support) |
| Validated demand | Three builders; one marketplace is limited to computer access. Mobile connectivity exists (CIP-45), but support is uneven across wallets ([technical review](./CPC260015_M3_TechnicalReview_v1_11Oct2026.md), item C1). |
| Impact | Mobile-first users cannot reach the applications (blocking; severity Medium). |
| Urgency | High |
| Dependency | Wallet teams adopting a common mobile connection standard |
| Cost driver | Wallet-side support for mobile connectivity and integration libraries for application frameworks |
| Owner or workstream | Wallets workstream |
| Confidence | Medium |
| Expected Cardano-side value | Applications reach mobile users, the main access channel in African markets. |
| Evidence and gates | [Interoperability Requirements Register](./CPC260015_M3_InteroperabilityRequirementsRegister_v1_10Oct2026.md), requirement 1; [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), rank 8; [L2 Demand Map](./CPC260015_M3_L2DemandMap_v1_09Oct2026.md), entry 4; [Blocked-Demand Case Register](https://github.com/Nextrium/cpc-product-website/blob/milestone-2-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M2_BlockedDemandCaseRegister_v1_09Oct2026.md), Case-014. Gates 1 and 5. |

### 4. Lower the cost of phone-number payments and close the basic-phone access gap

| Dimension | Detail |
|---|---|
| Action type | Coordinate (pursue wallet support) |
| Validated demand | Six to seven builders need basic-phone, offline or phone-number access; two have built their own USSD layer on Cardano. |
| Impact | Users without smartphones or internet cannot be reached through Cardano wallets, and phone-number payments exist on Cardano only at 0.45 ADA per send (severity Medium; High in our own validation work, where distributions route off Cardano for this reason). |
| Urgency | Medium to High |
| Dependency | Wallet teams; a distribution channel that already reaches users |
| Cost driver | Cost of phone-number sends, wallet and access-layer engineering, and a distribution partnership |
| Owner or workstream | Wallets workstream |
| Confidence | Medium |
| Expected Cardano-side value | Keeps payments on Cardano that would otherwise route through an external rail ([Interoperability Value-Flow Assessment](./CPC260015_M3_InteroperabilityValueFlowAssessment_v1_10Oct2026.md): Celo MiniPay, value-leakage risk). |
| Evidence and gates | [Interoperability Requirements Register](./CPC260015_M3_InteroperabilityRequirementsRegister_v1_10Oct2026.md), requirement 3; [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), rank 9 and the own-work barrier on last-mile distribution; [technical review](./CPC260015_M3_TechnicalReview_v1_11Oct2026.md), item D2; [L2 Demand Map](./CPC260015_M3_L2DemandMap_v1_09Oct2026.md), entry 5; [Negative-Case and Non-Cardano Evidence Summary](./CPC260015_M3_NegativeCaseNonCardanoEvidenceSummary_v1_10Oct2026.md), Section 6. Gates 1, 4, 5 and 7. |

**4. Medium-term Actions**

### 5. Hold on-chain order matching until demand evidence meets the threshold

| Dimension | Detail |
|---|---|
| Action type | Defer (the taxonomy action is fund engineering) |
| Validated demand | One former builder and one prototype team; batcher and router workarounds and parallel UTxO designs are in use. |
| Impact | Order-book trading runs through batchers rather than on-chain matching (severity Medium to High). |
| Urgency | Medium |
| Dependency | None on Leios: the technical review finds Leios may raise throughput but does not remove application-level matching constraints (item A3, reviewer conflict declared). |
| Cost driver | Research and engineering on non-deterministic execution |
| Owner or workstream | Technical roadmap workstream |
| Confidence | Medium |
| Expected Cardano-side value | Not yet shown |
| Evidence and gates | [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), rank 6; [L2 Demand Map](./CPC260015_M3_L2DemandMap_v1_09Oct2026.md), entry 2. Gates 1 and 2. |

### 6. Reassess native oracle supply before funded free access ends

| Dimension | Detail |
|---|---|
| Action type | Monitor |
| Validated demand | Builders use free or centralised data; the two native oracle providers interviewed are inactive or have left. |
| Impact | Oracle supply on Cardano now rests largely on one funded provider (severity Medium to High). |
| Urgency | Low to Medium |
| Dependency | End of the funded free oracle access, around June 2027 |
| Cost driver | Oracle subscriptions after the funded period, or support for native providers |
| Owner or workstream | Grant allocators (Critical Integrations budget) |
| Confidence | Medium |
| Expected Cardano-side value | Oracle provider diversity |
| Evidence and gates | [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), ranks 7 and 15; [Provider and Partner Opportunity Analysis](./CPC260015_M3_ProviderPartnerOpportunityAnalysis_v1_10Oct2026.md), entries 12 to 14. Gates 8, 9 and 10. |

### 7. Publish a maintained register of Cardano Layer 2 options and their status

| Dimension | Detail |
|---|---|
| Action type | Coordinate (improve documentation) |
| Validated demand | Desk evidence: no authoritative registry exists, and four of fourteen initiatives could not be status-verified. |
| Impact | Builders cannot find or assess Layer 2 options that may already exist (severity Medium). |
| Urgency | Medium |
| Dependency | Layer 2 stewardship transition |
| Cost driver | Documentation and ongoing maintenance |
| Owner or workstream | Technical roadmap workstream; Layer 2 stewardship entity |
| Confidence | High |
| Expected Cardano-side value | Existing capability becomes usable in deployment decisions. |
| Evidence and gates | [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), rank 10; [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 3.2, 9.5. Gates 2 and 3. |

### 8. Improve wallet handling of many small payments, and onboarding without seed phrases

| Dimension | Detail |
|---|---|
| Action type | Coordinate (pursue wallet support) |
| Validated demand | Desk evidence on fees rising with many small inputs; three respondents on seed phrases as a barrier for mobile-money users. |
| Impact | Costs rise with usage for frequent small-payment recipients; onboarding is harder than mobile money (severity Medium). |
| Urgency | Medium |
| Dependency | Wallet teams |
| Cost driver | Wallet engineering for output consolidation and seedless onboarding |
| Owner or workstream | Wallets workstream |
| Confidence | Medium |
| Expected Cardano-side value | Lower cost and easier entry for the informal-economy users this research covers |
| Evidence and gates | [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), ranks 10 and 15; [Interoperability Requirements Register](./CPC260015_M3_InteroperabilityRequirementsRegister_v1_10Oct2026.md), requirement 4. Gates 1 and 5. |

### 9. Hold Layer 2 engineering funding and track the roadmap items that address each barrier

| Dimension | Detail |
|---|---|
| Action type | Defer (the taxonomy action is fund engineering) |
| Validated demand | Narrow: oracle data publication, micropayments with native tokens, continuous sensor data, fast transactions between parties not known in advance, and on-chain compute limits. Most rest on one or two builders or providers; none shows demand at scale. |
| Impact | Each workflow proceeds only with a workaround or not at all (severity Medium). |
| Urgency | Medium |
| Dependency | Per the [technical review](./CPC260015_M3_TechnicalReview_v1_11Oct2026.md): Leios (late 2026) for throughput; CIP-0118 Nested Transactions (proposed) for micropayments; Midgard (pre-alpha testnet) for fast transactions between strangers. Sensor data and compute limits need no roadmap item: hybrid designs and splitting work across transactions address them. Leios does not reduce oracle latency. |
| Cost driver | Protocol or Layer 2 engineering |
| Owner or workstream | Technical roadmap workstream; Layer 2 stewardship entity |
| Confidence | Medium (High for micropayments, sensor data and fast transactions, confirmed by the technical review; Medium for compute limits; Low to Medium for oracle publication) |
| Expected Cardano-side value | Not yet shown; the oracle providers who need it are inactive or have left. |
| Evidence and gates | [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), ranks 10, 15 and 18; [L2 Demand Map](./CPC260015_M3_L2DemandMap_v1_09Oct2026.md), entries 1 and 3; [Evidence Threshold Framework](./CPC260015_M3_EvidenceThresholdFramework_v1_10Oct2026.md). Gates 1, 2 and 4. |

### 10. Track delivery of cross-chain messaging and bridging

| Dimension | Detail |
|---|---|
| Action type | Monitor |
| Validated demand | One partner-chain provider and two non-Cardano builders; one builder is adopting the messaging integration. Circle's CCTP is effectively available through USDCx; Chainlink is not yet integrated (item B2). |
| Impact | Cross-chain workflows depend on weak bridging (severity Medium). |
| Urgency | Medium |
| Dependency | LayerZero wider rollout, phased through 2026; endpoint infrastructure is live ([technical review](./CPC260015_M3_TechnicalReview_v1_11Oct2026.md), item B2) |
| Cost driver | Already funded through the Critical Integrations programme |
| Owner or workstream | Business development teams (Critical Integrations) |
| Confidence | Low |
| Expected Cardano-side value | Partner access; no observed flows yet (neutral-access, pending delivery) |
| Evidence and gates | [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), rank 19; [Interoperability Requirements Register](./CPC260015_M3_InteroperabilityRequirementsRegister_v1_10Oct2026.md), requirements 5 and 9; [Interoperability Value-Flow Assessment](./CPC260015_M3_InteroperabilityValueFlowAssessment_v1_10Oct2026.md), pathway 4. Gates 5, 6 and 8. |

### 11. Give partner-chain providers access to ecosystem decision-makers

| Dimension | Detail |
|---|---|
| Action type | Coordinate |
| Validated demand | One partner-chain provider building on Cardano technology, not self-sustaining without subsidy, reports no access to decision-makers or capital allocators. |
| Impact | Partner-chain viability (severity Medium) |
| Urgency | Medium |
| Dependency | None |
| Cost driver | Coordination time only |
| Owner or workstream | Business development teams; governance workstream |
| Confidence | Low |
| Expected Cardano-side value | Two-way flows reported by the provider; value accrues to a Cardano-native asset. |
| Evidence and gates | [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), rank 19; [Provider and Partner Opportunity Analysis](./CPC260015_M3_ProviderPartnerOpportunityAnalysis_v1_10Oct2026.md), entry 7. Gates 8 and 9. |

**5. Deferred Actions**

| Rank | Action | Type | Validated demand | Impact | Urgency | Dependency | Cost driver | Owner | Confidence | Cardano-side value | Evidence and gates |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 12 | Address provider dependency on core components | Coordinate | Two oracle providers | High: a feed went offline when a component was discontinued | Low (historical) | Core teams | Notice and continuity practice | Technical roadmap workstream; governance | Medium | Provider continuity | [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), rank 3. Gates 8, 9 |
| 13 | Exchange wallet-infrastructure support for Cardano | Defer | One exchange | High for that operator | Low | Trading volume on Cardano | Partner integration | Business development teams; wallets workstream | Low | Exchange access, if demand exists | [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), rank 4; [Provider and Partner Opportunity Analysis](./CPC260015_M3_ProviderPartnerOpportunityAnalysis_v1_10Oct2026.md), entry 11. Gates 8, 9 |
| 14 | Wanchain | Defer | None from respondents | High: about 97% of the Cardano-side reserve withdrawn | Low | Bridge reopening with safeguards | Security review | Provider | Low | None while offline | [Interoperability Value-Flow Assessment](./CPC260015_M3_InteroperabilityValueFlowAssessment_v1_10Oct2026.md), pathway 3. Gate 7 |
| 15 | Integration tooling for partner chains and bridges | Coordinate (improve documentation) | One provider (reported 6 to 12 months against 1 to 2 for EVM; not verifiable, item B1) | Low to Medium | Low | None | Tooling and documentation | DevX workstream | Low | Lower integration cost for providers | [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), ranks 22, 23. Gate 9 |
| 16 | Document the node-free path for issuing identity credentials | Coordinate (improve documentation) | Seven builders and providers need identity verification; none uses the Cardano identity stack | Low: a node-free publishing path now exists ([technical review](./CPC260015_M3_TechnicalReview_v1_11Oct2026.md), item D1) | Low | Identus maintainers | Documentation | DevX workstream; Identus maintainer community. Links to national identity systems are routed to RFP 05. | Medium | Identity anchored on Cardano; not yet shown to bring new users | [Interoperability Requirements Register](./CPC260015_M3_InteroperabilityRequirementsRegister_v1_10Oct2026.md), requirement 2; [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), rank 24. Gates 3, 5 |
| 17 | Interoperability pathways without observed flows: USDCx, Rosen Bridge, Cardinal, Bifrost, Masumi, Midnight, Partner Chains Toolkit, Orcfax, Identus | Monitor | Limited or none | Not yet shown | Low | Delivery, or evidence of flows | None until flows exist | Business development teams; RFP 03 for stablecoin liquidity | Low | Neutral-access for all | [Interoperability Value-Flow Assessment](./CPC260015_M3_InteroperabilityValueFlowAssessment_v1_10Oct2026.md). Gates 6, 7 |
| 18 | Decentralised inference compute | Defer | Our own validation work only | Not established | Low | RFP 09 findings | Not assessed | RFP 09 | Low | Not established | [Interoperability Value-Flow Assessment](./CPC260015_M3_InteroperabilityValueFlowAssessment_v1_10Oct2026.md), pathway 12. Gate 11 |

**6. Rejected Actions**

| Rank | Action | Reason | Evidence and gates |
|---|---|---|---|
| 19 | Bulk refunds to many recipients | Historical, from a past hackathon project; no deployment is waiting. The technical review finds it solvable today by batching recipients (item A8). | [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md), rank 4. Gate 1 |
| 20 | Celo MiniPay as a pathway | Routes value off Cardano with no retention mechanism. The gap behind it is action 4. | [Interoperability Value-Flow Assessment](./CPC260015_M3_InteroperabilityValueFlowAssessment_v1_10Oct2026.md), pathway 2. Gate 7 |
| 21 | Milkomeda C1 as a partner | Shut down in September 2025 | [Provider and Partner Opportunity Analysis](./CPC260015_M3_ProviderPartnerOpportunityAnalysis_v1_10Oct2026.md), entry 6. Gate 8 |
| 22 | Layer 2 throughput funding justified by stalled African deployments | None of the stalled or ended cases was caused by a lack of Layer 2 capability. | [Negative-Case and Non-Cardano Evidence Summary](./CPC260015_M3_NegativeCaseNonCardanoEvidenceSummary_v1_10Oct2026.md), Sections 4 and 7. Gates 1, 4 |

**7. Limitations**

- Costs are named by driver, not estimated.
- Provider-side actions are held at Low confidence.
- Actions 3, 4, 5, 9, 10, 11, 15 and 16 reflect the independent [technical review](./CPC260015_M3_TechnicalReview_v1_11Oct2026.md) by Samir Idris.

**8. AI Use Disclaimer**

AI tools were used in the analysis and drafting behind this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.

**Document Version History**

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 10 October 2026 | Abdulbasit Adigun Abdulrahman | Draft for Milestone 3 |
