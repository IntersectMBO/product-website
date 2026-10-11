---
title: "Final Research Report - NexTrium Milestone 4 (CPC-26-0015)"
sidebar_label: "Final Research Report"
---

**NEXTRIUM**

Global Innovations Ltd

**L2 Adoption and Interoperability Demand in African Emerging Markets**

*Final Research Report*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D14 (Proposal Section 13)                                                       |
| **Status**                | Final for Milestone 4                                                           |
| **Version**               | 2.0                                                                             |
| **Date**                  | 11 October 2026                                                                 |
| **Confidentiality**       | Redacted for publication; the full report is confidential to the Committee     |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

*Respondents who chose anonymised or confidential treatment are identified by category only, and confidential statements are not included. This redacted version is the basis for the Public Summary (D16).*

## Abstract

Cardano stakeholders are being asked to fund Layer 2 and interoperability work on the assumption that applications are waiting for it. This study tested that assumption in African emerging markets, with a focus on the informal economy and the builders who serve it. We combined status-verified desk research, screening of candidate use cases and pathways, 31 interviews across four respondent categories, and classification of every blocker against a nine-type taxonomy after testing it against seven non-Layer 2 explanations.

We find that demand waiting on Layer 2 is real but narrow. It sits in infrastructure (oracle data publication, order-book trading and sensor data), and none of it is yet at scale. The barriers that most limit adoption are about access and cost: users who hold only stablecoins must acquire ADA to use smart contracts, small stablecoin transfers cost several times the routes African users already use, and Cardano wallets do not yet reach mobile-first and basic-phone users well: mobile connection is fragmented and phone-number payments cost 0.45 ADA per send. No interoperability pathway yet shows evidence of net-new value for Cardano; one routes value off Cardano and one is offline after an exploit. Providers have not prioritised Cardano for commercial and organisational reasons rather than technical ones.

We recommend that no new Layer 2 or interoperability engineering be funded on current evidence; that the first actions be coordination with wallet teams and the workstreams that own fee parameters; that Layer 2 engineering be held while the roadmap items an independent technical review linked to each barrier are delivered, and funded only against an explicit evidence threshold; and that interoperability pathways be monitored until they show flows into Cardano. Provider-side findings are held at Low confidence because one bridge, interoperability or wallet provider was interviewed against a committed five to eight.

## 1. Key Findings

| # | Finding | Confidence |
|---|---|---|
| 1 | Most blockers are not Layer 2 blockers. Of 26 classified barriers, 7 are technical; the most severe concern access and cost. | High to Medium |
| 2 | Genuine Layer 2 demand is narrow, concentrated in infrastructure, and not yet at scale. | Medium |
| 3 | Wallet access is the leading interoperability need; mobile wallet connection, available but unevenly supported, is the only requirement currently blocking deployment. | Medium |
| 4 | No interoperability pathway yet shows net-new value for Cardano. Celo MiniPay is a value-leakage risk; Wanchain is a dependency risk. | Low |
| 5 | Providers have not prioritised Cardano because of low demand, higher integration cost, funded free services undercutting native providers, and weak support channels. | Low |
| 6 | Builders on other chains mostly never evaluated Cardano. Where they gave reasons, they were users, sponsorship, developer experience and fees. | Medium |
| 7 | Cardano deployments that stalled or ended did so on regulation, revenue, cost and users, not Layer 2 capability. | Medium |
| 8 | Infrastructure adoption on Cardano has been subsidised in every observed case, and native providers stopped operating on Cardano after support ended or a funded free competitor arrived. | Medium |

## 2. Introduction

**2.1 The question**

RFP 07 asks whether Cardano should invest in Layer 2 and interoperability capability, and if so, which, in what order and on what evidence. It warns against two failures: funding technically interesting work without adoption pull, and failing to support applications that are genuinely blocked. This study answers the question for African emerging markets, where stablecoin use is high, users are mobile-first, and many participants work in the informal economy.

**2.2 Scope**

The study covers Layer 2 capability and seven interoperability feature types: asset bridging, identity and data portability, liquidity routing, settlement interoperability, message passing, wallet user experience and partner-chain integration. Findings outside that scope are routed to adjacent RFPs and workstreams rather than analysed ([Cross-RFP Handoff Memo](./CPC260015_M4_CrossRFPHandoffMemo_v2_11Oct2026.md)). Findings are not extrapolated beyond African markets, and country-specific findings are labelled.

**2.3 Decision gates**

The study is organised around the eleven decision gates in RFP 07. Section 4 answers each one.

## 3. Method

The full method is in the [Research Methodology Appendix](./CPC260015_M4_ResearchMethodologyAppendix_v2_11Oct2026.md). In brief:

- **Desk research and screening (Milestone 1).** Status-verified review of the Cardano Layer 2 landscape, providers, funding history and peer ecosystems; screening of candidates on thirteen criteria; preliminary value-flow classifications.
- **Primary research (Milestone 2).** 31 interviews: 15 African builders and operators on Cardano, 5 infrastructure and tooling teams, 1 bridge and partner-chain provider, and 10 non-Cardano or negative-case respondents.
- **Analysis (Milestone 3).** 500 evidence extracts; 105 tests of each blocker claim against seven non-Layer 2 explanations (liquidity, wallet support, bridge or provider access, tooling, commercial uncertainty, compliance, partner access); 114 classified rows across the nine-type taxonomy; six-element value-flow assessment of 13 pathways; nine-dimension assessment of 21 providers.
- **Confidence.** High requires multiple independent evidence types with no material contradiction; Medium at least two types or one strong independent source; Low a single source, our own validation work only, or unverifiable evidence. Provider-side findings are capped at Low because of Category 3 access, and our own validation work cannot set any finding above Low.
- **Traceability.** Every finding cites the extract, test, case or desk section it rests on. The redacted [Interview Analysis Workbook](https://github.com/Nextrium/cpc-product-website/blob/milestone-2-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M2_InterviewAnalysisWorkbookRedacted_v14_09Oct2026.md) is published with Milestone 2.

## 4. Results by Decision Gate

### Gate 1. Which applications are actually blocked by missing Layer 2 capability?

**Answer:** oracle data services, order-book trading, and sensor data for agricultural value chains. *(Medium)*

- Of 103 tests on interview extracts, 15 found no non-Layer 2 explanation. They concentrate in infrastructure teams (11 of 41 tests) rather than informal-economy builders (3 of 39).
- The blocked workflows: oracle providers that cannot publish data at the speed and cost clients need; high-frequency order matching limited by concurrency and throughput, worked around with batchers and routers; and continuous sensor data for a poultry value-chain platform at concept stage.
- Three further cases tie to a named Layer 2 workflow but rest on one respondent or are historical, and are listed outside the demand map.
- Evidence: [L2 Demand Map](./CPC260015_M4_L2DemandMap_v2_11Oct2026.md); [L2 Barrier Analysis](./CPC260015_M4_L2BarrierAnalysis_v2_11Oct2026.md), ranks 6, 10 and 18; [Blocked-Demand Case Register](./CPC260015_M4_BlockedDemandCaseRegister_v2_11Oct2026.md) (15 cases, 11 passing the workflow test).

### Gate 2. What Layer 2 capability would unlock the most immediate adoption value?

**Answer:** among genuine Layer 2 needs, lower-cost and higher-frequency data and state updates for infrastructure. For the informal-economy builders this study focuses on, the larger gains come from access channels and the cost of small transfers, which are not Layer 2 problems. *(Medium)*

- The two highest-ranked barriers are not throughput: stablecoin-only users must hold ADA for fees and collateral (High confidence), and small stablecoin transfers cost several times the routes African users already use (Medium).
- Dissent: three builders report Cardano fees are not their constraint; the costs that matter to them come from mobile money and payment intermediaries (E-017, E-036, E-491).
- Throughput increases would not resolve several cited blockers in the respondents' own words (E-137, E-490).
- Evidence: [L2 Barrier Analysis](./CPC260015_M4_L2BarrierAnalysis_v2_11Oct2026.md), ranks 1 and 2; [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 8.6.

### Gate 3. Which blockers are technical, commercial, ecosystem or coordination problems?

**Answer:** of 26 classified barriers, 8 are ecosystem, 7 technical, 4 tooling, 3 user experience, 2 coordination and 2 commercial. No type dominates, and technical blockers are a minority. *(Medium)*

- Classification follows the [Technical and Commercial Blocker Taxonomy](./CPC260015_M4_TechnicalCommercialBlockerTaxonomy_v2_11Oct2026.md): a blocker is technical only if none of the seven non-Layer 2 alternatives explains it.
- Of 114 classified rows, 40 are relevant to RFP 07, 57 are routed to adjacent RFPs or workstreams, 15 are negative-case evidence about other chains, 1 is unresolved and 1 is a duplicate.
- Evidence: [Technical and Commercial Blocker Taxonomy](./CPC260015_M4_TechnicalCommercialBlockerTaxonomy_v2_11Oct2026.md); [L2 Barrier Analysis](./CPC260015_M4_L2BarrierAnalysis_v2_11Oct2026.md), Section 5.

### Gate 4. Which applications waiting on Layer 2 represent meaningful demand at scale?

**Answer:** none yet. *(Medium)*

- Waiting applications are at testnet or concept stage or serve small numbers of users; scale figures are self-reported.
- The infrastructure demand is commercially fragile: the oracle providers that need faster publication are inactive or have left Cardano.
- Evidence: [L2 Demand Map](./CPC260015_M4_L2DemandMap_v2_11Oct2026.md); [Early Demand-Signal Review](https://github.com/Nextrium/cpc-product-website/blob/milestone-2-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M2_EarlyDemandSignalReview_v1_09Oct2026.md).

### Gate 5. What interoperability features do builders and operators actually need?

**Answer:** wallet access first, then identity. *(Medium)*

| Rank | Feature | Status |
|---|---|---|
| 1 | Mobile wallet connection for applications | Blocking (3 builders); exists but unevenly supported |
| 2 | Identity verification linked to national ID, and reusable identity | Most frequent (7) |
| 3 | Basic-phone and offline access, and low-cost phone-number payments | Important (6; 2 built their own) |
| 4 | Onboarding without seed phrases | Important (3) |
| 5 | Robust bridging | Important; Low confidence |

- All seven feature types are evidenced. Bridging and messaging requests come mainly from one provider and non-Cardano builders, and are conditions for considering Cardano more than current blockers.
- Evidence: [Interoperability Requirements Register](./CPC260015_M4_InteroperabilityRequirementsRegister_v2_11Oct2026.md) (14 requirements).

### Gate 6. Which interoperability pathways are net-positive for Cardano?

**Answer:** none yet. *(Low)*

- Thirteen pathways were assessed on six elements. Eleven are neutral-access: they improve connectivity, but no evidence was found of the net-new users, liquidity or applications they bring.
- USDCx came closest. Stablecoin supply on Cardano was reported at about 70 million US dollars in early October 2026, but supply alone cannot show whether value is new to Cardano or converted from value already there, the amount is small next to other ecosystems, and one builder reports the liquidity increase disappointed (E-396).
- Five pathways moved to neutral-access from more favourable starting positions because those positions rested on design or on flows not yet proven.
- Evidence: [Interoperability Value-Flow Assessment](./CPC260015_M4_InteroperabilityValueFlowAssessment_v2_11Oct2026.md).

### Gate 7. Which pathways create asymmetric dependency or value-leakage risk?

**Answer:** Celo MiniPay (value-leakage risk) and Wanchain (dependency-risk). *(Low)*

- MiniPay: in our own validation work, distributions route to an Ethereum Layer 2 because Cardano lacks a comparable access path. The access gap is independently supported; the routing rests on our own work.
- Wanchain: about 97% of its Cardano-side reserve was withdrawn in a July 2026 exploit; the bridge remains offline.
- Outflow routes also exist for stablecoins: a non-Cardano payments app accepts deposits from Cardano into its wallet on another chain (E-416).
- Evidence: [Interoperability Value-Flow Assessment](./CPC260015_M4_InteroperabilityValueFlowAssessment_v2_11Oct2026.md), pathways 2 and 3; [Negative-Case and Non-Cardano Evidence Summary](./CPC260015_M4_NegativeCaseNonCardanoEvidenceSummary_v2_11Oct2026.md).

### Gate 8. Which bridge, partner-chain or cross-chain partners should Cardano prioritise?

**Answer:** none for new funding on current evidence. Coordinate with Cardano wallet teams on mobile and phone-based access, and with a partner-chain provider building on Cardano technology on access to decision-makers. Monitor LayerZero, Bifrost, Rosen Bridge, Cardinal and Pyth for observed flows. Defer Wanchain. *(Low)*

- Twenty-one providers were assessed on nine dimensions: type, current status, integration blocker, commercial incentive, technical effort, demand evidence, mutual benefit, risk and recommended action.
- Cardano's provider base is thinning: one bridge offline, one sidechain shut down, and both native oracle providers interviewed inactive or moved.
- Evidence: [Provider and Partner Opportunity Analysis](./CPC260015_M4_ProviderPartnerOpportunityAnalysis_v2_11Oct2026.md).

### Gate 9. What is preventing providers from prioritising Cardano?

**Answer:** low demand and volume, higher integration cost from missing tooling, funded free services undercutting native providers, and weak ecosystem support channels. No provider said Cardano lacks the technical capability it needs. *(Low)*

| Explanation tested | Finding |
|---|---|
| Demand | Supported: providers and operators wait for users and trading volume |
| Integration cost | Supported: one provider reports 6 to 12 months against 1 to 2 for an EVM chain (not independently verifiable) |
| Technical complexity | Supported as missing tooling, not missing capability |
| Liquidity | Supported |
| Security risk | Supported by desk evidence (Wanchain) only |
| Incentive misalignment | Supported: funded free services undercut native paid providers |
| Commercial opportunity cost | Supported: another chain gave one provider more business in 60 days than Cardano did in three years |
| Lack of ecosystem support | Supported: unclear support channels, hard access to decision-makers |

- Evidence: [Provider and Partner Opportunity Analysis](./CPC260015_M4_ProviderPartnerOpportunityAnalysis_v2_11Oct2026.md), Section 4; [Negative-Case and Non-Cardano Evidence Summary](./CPC260015_M4_NegativeCaseNonCardanoEvidenceSummary_v2_11Oct2026.md).

### Gate 10. What evidence should be required before funding Layer 2 or interoperability proposals?

**Answer:** five minimum standards. *(Medium)*

1. **Demand:** a named workflow that wants to deploy and cannot, evidenced beyond the proposer.
2. **Blocker severity:** classified by type, with the seven non-Layer 2 alternatives ruled out and the effect of planned base-layer upgrades stated.
3. **Value-flow benefit:** all six elements, with outflows and dependency risk.
4. **Adoption pathway:** who adopts, through which distribution channel, and how operation continues when any subsidy ends.
5. **Measurable outcomes:** operation, usage and retention measured after delivery, not only at delivery.

- Evidence: [Evidence Threshold Framework](./CPC260015_M4_EvidenceThresholdFramework_v2_11Oct2026.md).

### Gate 11. Which findings should be handed to adjacent RFPs or workstreams?

**Answer:** *(Medium)*

| Destination | Findings |
|---|---|
| RFP 02 (use-case landscape and competitive positioning) | Why builders choose, ignore or leave Cardano |
| RFP 03 (stablecoin liquidity incentive and activation) | Liquidity depth; single-chain stablecoin exposure |
| RFP 05 (government and emerging markets entry) | Licensing, identity, infrastructure cost, local delivery capacity |
| RFP 06 (enterprise and RWA readiness) | Enterprise onboarding; RWA liquidity |
| RFP 08 (enterprise delivery partner network) | Missing service-provider ecosystem |
| RFP 09 (AI commercial positioning) | Inference compute; agent infrastructure |
| DevX, wallets, liquidity, governance and technical roadmap workstreams | Developer experience; wallet access; liquidity; governance and builder funding; Layer 2 stewardship, hard forks and fee parameters |

- Evidence: [Cross-RFP Handoff Memo](./CPC260015_M4_CrossRFPHandoffMemo_v2_11Oct2026.md) (57 routed tests plus desk and case routings).

## 5. Cross-Cutting Findings

1. **Access before throughput.** Across builders, desk evidence and our own validation work, the binding constraints for African users are holding ADA, wallet reach and the cost of small transfers. *(Medium to High)*
2. **Subsidy dependence.** Every observed infrastructure adoption in 2026 was subsidised. Where support ended or a funded free competitor arrived, native providers stopped operating on Cardano. *(Medium)*
3. **Distribution precedes infrastructure.** In comparable markets, adoption followed embedding in an existing distribution channel, not superior capability. Builders on other chains chose for users and attention. *(Medium)*
4. **Integration cost falls on Cardano.** Tooling built for account-based chains needs rework for eUTxO; the one provider able to measure it reports 6 to 12 months, against 1 to 2 months for an EVM chain; the technical review found the tooling gap plausible but could not verify the figures. *(Medium)*
5. **Measurement stops at delivery.** Funded work is assessed at proposal and verified at milestones, but not followed into operation and usage. Two funded items ended after recorded delivery. *(Medium)*
6. **Information is not maintained.** No authoritative register of Layer 2 options or provider status exists, so existing capability is hard to find. *(High)*

## 6. Recommendations

**6.1 Sequence**

| Horizon | Actions |
|---|---|
| Near-term (coordination) | 1. Let stablecoin-only users use smart contracts without first holding ADA. 2. Assess the cost of small stablecoin transfers with the workstreams that own fee parameters. 3. Make mobile wallet connection consistent across Cardano wallets. 4. Lower the cost of phone-number payments and close the basic-phone access gap. |
| Medium-term | Hold on-chain order matching until demand meets the threshold; reassess native oracle supply before funded free access ends around June 2027; publish a maintained register of Layer 2 options; improve wallet handling of small payments and seedless onboarding; hold Layer 2 engineering funding and track the roadmap items the technical review linked to each barrier (Leios, CIP-0118 Nested Transactions, Midgard); track cross-chain messaging and bridging; give partner-chain providers access to decision-makers. |
| Deferred | Provider dependency on core components; exchange wallet-infrastructure support; Wanchain; integration tooling; documentation of the node-free path for issuing identity credentials; pathways without flows; inference compute. |
| Rejected | Layer 2 throughput funding justified by stalled African deployments; Celo MiniPay as a pathway; Milkomeda C1; bulk refunds (historical). |

Each action is ranked on validated demand, impact, urgency, dependency, cost driver, owner, confidence, expected Cardano-side value and action type in the [Investment Sequencing Recommendation](./CPC260015_M4_InvestmentSequencingRecommendation_v2_11Oct2026.md).

**6.2 Investment implications**

- No new funding decision is needed to start the near-term actions.
- Hold Layer 2 engineering funding while the roadmap items linked to each barrier are delivered, and fund only proposals that meet the [Evidence Threshold Framework](./CPC260015_M4_EvidenceThresholdFramework_v2_11Oct2026.md).
- Judge funded integrations on outcomes: seven builders and providers said funded integrations had not changed what they build.
- Decide before around June 2027 what should happen to oracle supply when funded free access ends.

## 7. What Would Change These Conclusions

| Conclusion | Evidence that would change it |
|---|---|
| No pathway is net-positive | Source, destination and retention data showing stablecoin or bridge flows that are new to Cardano |
| Layer 2 engineering should be deferred | Leios, CIP-0118 or Midgard delivered and leaving the barriers in place, together with demand that meets the [Evidence Threshold Framework](./CPC260015_M4_EvidenceThresholdFramework_v2_11Oct2026.md) |
| Provider findings | Interviews with more bridge, interoperability and wallet providers contradicting the commercial explanation |
| Demand is not at scale | Verified usage figures for waiting applications |
| Access before throughput | Evidence that stablecoin-only users and basic-phone users are reached without wallet changes |

## 8. Limitations

- **Category 3 access.** One bridge, interoperability or wallet provider was interviewed against five to eight; no wallet provider was interviewed. Gates 6 to 9 are held at Low.
- **Category balance.** Category 2 is one below its lower bound; Category 4 is four above its upper bound.
- **Self-reported scale.** User and transaction figures were not verified.
- **No flow data.** No value-flow classification relies on volume or supply.
- **Respondent bias.** Most Cardano builders chose Cardano by familiarity; recruitment ran largely through Cardano networks; four respondents were flagged as seeking funding.
- **Our own interest.** Our own validation work is disclosed as conflicted evidence and cannot set any finding above Low.
- **Technical review.** An independent [technical review](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md) by Samir Idris confirmed 4 of 13 technical claims, qualified 7 and could not assess 2; the reviewer declared a conflict on one item. Every deliverable reflects the verdicts.
- **Timing.** Several conclusions depend on Leios, CIP-0118, Midgard, LayerZero and Bifrost delivery, and on what follows the end of funded oracle access.
- **AI use.** AI tools were used in transcription, extraction, classification and drafting; every cited extract is checked against its text, but a manual review of 500 extracts may not catch every issue.

## 9. Deliverables

| # | Deliverable | Status |
|---|---|---|
| D1 | [L2 Barrier Analysis](./CPC260015_M4_L2BarrierAnalysis_v2_11Oct2026.md) | Final |
| D2 | [L2 Demand Map](./CPC260015_M4_L2DemandMap_v2_11Oct2026.md) | Final |
| D3 | [Interoperability Requirements Register](./CPC260015_M4_InteroperabilityRequirementsRegister_v2_11Oct2026.md) | Final |
| D4 | [Interoperability Value-Flow Assessment](./CPC260015_M4_InteroperabilityValueFlowAssessment_v2_11Oct2026.md) | Final |
| D5 | [Provider and Partner Opportunity Analysis](./CPC260015_M4_ProviderPartnerOpportunityAnalysis_v2_11Oct2026.md) | Final |
| D6 | [Blocked-Demand Case Register](./CPC260015_M4_BlockedDemandCaseRegister_v2_11Oct2026.md) | Final |
| D7 | [Negative-Case and Non-Cardano Evidence Summary](./CPC260015_M4_NegativeCaseNonCardanoEvidenceSummary_v2_11Oct2026.md) | Final |
| D8 | [Investment Sequencing Recommendation](./CPC260015_M4_InvestmentSequencingRecommendation_v2_11Oct2026.md) | Final |
| D9 | [Evidence Threshold Framework](./CPC260015_M4_EvidenceThresholdFramework_v2_11Oct2026.md) | Final |
| D10 | [Technical and Commercial Blocker Taxonomy](./CPC260015_M4_TechnicalCommercialBlockerTaxonomy_v2_11Oct2026.md) | Final |
| D11 | [Research Methodology Appendix](./CPC260015_M4_ResearchMethodologyAppendix_v2_11Oct2026.md) | Final |
| D12 | [Cross-RFP Handoff Memo](./CPC260015_M4_CrossRFPHandoffMemo_v2_11Oct2026.md) | Final |
| D13 | [Executive Decision Memo](./CPC260015_M4_ExecutiveDecisionMemo_v2_11Oct2026.md) | Final |
| D14 | Final Research Report | This report |
| D15 | Final Presentation | Milestone 4 |
| D16 | Public Summary | Milestone 4 |

## 10. Positions Changed During Milestone 3

Each change is recorded, with where the earlier position was stated and why it changed, in the deliverable that made it.

| Item | From | To | Recorded in |
|---|---|---|---|
| USDCx | Value-accretive, subsidy-dependent | Neutral-access | [Interoperability Value-Flow Assessment](./CPC260015_M4_InteroperabilityValueFlowAssessment_v2_11Oct2026.md) |
| Rosen Bridge, Cardinal, Bifrost | Mutual-value | Neutral-access | [Interoperability Value-Flow Assessment](./CPC260015_M4_InteroperabilityValueFlowAssessment_v2_11Oct2026.md) |
| Identus | Value-accretive (own work) | Neutral-access | [Interoperability Value-Flow Assessment](./CPC260015_M4_InteroperabilityValueFlowAssessment_v2_11Oct2026.md) |
| Celo MiniPay | Dependency-risk to value-leakage risk | Value-leakage risk | [Interoperability Value-Flow Assessment](./CPC260015_M4_InteroperabilityValueFlowAssessment_v2_11Oct2026.md) |
| Charli3 status | No funding distress identified | Ceased Cardano-focused operations, May 2026 | [Provider and Partner Opportunity Analysis](./CPC260015_M4_ProviderPartnerOpportunityAnalysis_v2_11Oct2026.md) |
| Phone-number payments; identity issuance; mobile wallet connection; order matching | No phone-number addressing; full node required; no mobile path; one match per transaction | Phone-number payments exist at 0.45 ADA per send; node-free issuance path exists; mobile connection exists but fragmented; genuine but narrower concurrency limits | [L2 Barrier Analysis](./CPC260015_M4_L2BarrierAnalysis_v2_11Oct2026.md), Section 6, following the [technical review](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md) |
| Adjacent RFP numbers | Proposal labels | The Committee's published numbering | [Cross-RFP Handoff Memo](./CPC260015_M4_CrossRFPHandoffMemo_v2_11Oct2026.md) |

## AI Use Disclaimer

AI tools were used in the analysis and drafting behind this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.

## Document Version History

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 10 October 2026 | Abdulbasit Adigun Abdulrahman | Draft for Milestone 3 |
| 2.0 | 11 October 2026 | Abdulbasit Adigun Abdulrahman | Final for Milestone 4 |
