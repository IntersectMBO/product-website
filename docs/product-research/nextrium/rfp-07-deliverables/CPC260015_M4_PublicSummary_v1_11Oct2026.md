---
title: "Public Summary - NexTrium Milestone 4 (CPC-26-0015)"
sidebar_label: "Public Summary"
---

**NEXTRIUM**

Global Innovations Ltd

**L2 Adoption and Interoperability Demand in African Emerging Markets**

*Public Summary*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D16 (Proposal Section 13)                                                       |
| **Status**                | Final for Milestone 4; published after Committee approval                       |
| **Version**               | 1.0                                                                             |
| **Date**                  | 11 October 2026                                                                 |
| **Confidentiality**       | Fully public                                                                    |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This is the public summary of our research for RFP 07, written for builders, funders and ecosystem teams. It sets out what we studied, how, what we found, what we recommend and where the evidence is weak. It contains no confidential information.

## 1. The Question

Should Cardano invest in Layer 2 and interoperability capability to support adoption in African emerging markets, and if so, which capability, in what order and on what evidence? We focused on the informal economy and the builders who serve it, where stablecoin use is high and users are mobile-first.

## 2. How We Did It

- **Desk research and screening.** Status-verified review of Cardano's Layer 2, interoperability and provider landscape, its funding history and peer ecosystems; thirteen screening criteria applied to candidate use cases and pathways.
- **Interviews.** 31 structured interviews in four respondent categories (Section 3).
- **Analysis.** 500 evidence extracts. Every blocker claim was tested against seven explanations other than Layer 2: liquidity, wallet support, bridge or provider access, tooling, commercial uncertainty, compliance and partner access. Only a blocker none of them explains counts as a Layer 2 blocker. Each blocker was then classified by type, severity and urgency.
- **Independent technical review.** Thirteen technically complex claims were checked by Samir Idris. Four were confirmed, seven qualified and two could not be assessed.
- **Confidence.** Every finding is rated High, Medium or Low on one rubric. Provider-side findings are held at Low because of limited provider access (Section 10).

The full method is in the [Research Methodology Appendix](./CPC260015_M4_ResearchMethodologyAppendix_v2_11Oct2026.md).

## 3. Who We Spoke To

| Category | Who | Interviews |
|---|---|---|
| 1 | African builders and operators on Cardano | 15 |
| 2 | Infrastructure, tooling, identity and protocol teams | 5 |
| 3 | Bridge, interoperability and wallet providers | 1 |
| 4 | Builders on other chains and negative-case respondents | 10 |
| Total | | 31 |

25 respondents chose to be named, 4 to be anonymised and 2 to be confidential.

## 4. Demand Findings

1. **Demand waiting on Layer 2 is real but narrow.** It sits in infrastructure: oracle data publication, order-book trading, micropayments with native tokens, sensor data and fast transactions between parties not known in advance. *(Medium)*
2. **None of it is yet at scale.** The waiting applications are at testnet or concept stage or serve few users, and the oracle providers that need faster publication have become inactive or left Cardano. *(Medium)*
3. **The broadest demand is for access, not Layer 2.** More builders need to reach users on mobile phones, on basic phones and without internet than need more throughput. *(Medium)*
4. **Builders on other chains mostly never considered Cardano.** Seven of nine did not evaluate it; they chose for users, sponsorship, developer experience and fees. *(Medium)*

Details: [L2 Demand Map](./CPC260015_M4_L2DemandMap_v2_11Oct2026.md); [Blocked-Demand Case Register](./CPC260015_M4_BlockedDemandCaseRegister_v2_11Oct2026.md); [Negative-Case and Non-Cardano Evidence Summary](./CPC260015_M4_NegativeCaseNonCardanoEvidenceSummary_v2_11Oct2026.md).

## 5. Layer 2 Blocker Findings

1. **Most blockers are not Layer 2 blockers.** Of 26 classified barriers, 8 are ecosystem, 7 technical, 4 tooling, 3 user experience, 2 coordination and 2 commercial.
2. **The most severe barriers are about access and cost.** Users who hold only stablecoins must acquire ADA to use smart contracts *(High)*, and small stablecoin transfers cost several times the routes African users already use *(Medium)*.
3. **The genuine Layer 2 barriers each have a known route.** The technical review links throughput to Ouroboros Leios, micropayments to CIP-0118 Nested Transactions, and fast transactions between strangers to Midgard. Sensor data and compute limits are handled by design. None of these roadmap items is yet on mainnet.
4. **Stalled Cardano deployments stalled on regulation, revenue, cost and users,** not on missing Layer 2 capability. *(Medium)*

Details: [L2 Barrier Analysis](./CPC260015_M4_L2BarrierAnalysis_v2_11Oct2026.md); [Technical and Commercial Blocker Taxonomy](./CPC260015_M4_TechnicalCommercialBlockerTaxonomy_v2_11Oct2026.md).

## 6. Interoperability Requirements

1. **Wallet access comes first.** Mobile wallet connection is the only requirement blocking deployment: it exists, but support is uneven across wallets. Basic-phone and offline access, and onboarding without seed phrases, follow. Phone-number payments now exist on Cardano, but cost 0.45 ADA per send. *(Medium)*
2. **Identity is the most frequent request.** Seven builders and providers need identity verification linked to national ID or a reusable digital identity. *(Medium)*
3. **Bridging and messaging are conditions for considering Cardano** more than current blockers. *(Low)*

Details: [Interoperability Requirements Register](./CPC260015_M4_InteroperabilityRequirementsRegister_v2_11Oct2026.md).

## 7. Value-Flow Themes

1. **No interoperability pathway yet shows net-new value for Cardano.** Most improve connectivity without evidence of the users, liquidity or applications they bring. Stablecoin supply on Cardano has grown, but supply alone cannot show whether value is new to Cardano. *(Low)*
2. **One pathway routes value off Cardano:** Celo MiniPay, a phone-based stablecoin wallet on an Ethereum Layer 2. **One bridge is a dependency risk:** Wanchain, offline since an exploit in July 2026. *(Low)*
3. **Providers have not prioritised Cardano for commercial reasons, not technical ones:** low demand, higher integration cost from missing tooling, funded free services undercutting native providers, and weak support channels. *(Low)*

Details: [Interoperability Value-Flow Assessment](./CPC260015_M4_InteroperabilityValueFlowAssessment_v2_11Oct2026.md); [Provider and Partner Opportunity Analysis](./CPC260015_M4_ProviderPartnerOpportunityAnalysis_v2_11Oct2026.md).

## 8. Recommended Investment Sequencing

No action meets the evidence threshold for new funding today. The recommended order is:

| Horizon | Actions |
|---|---|
| Near-term (coordination) | Let stablecoin-only users use smart contracts without first holding ADA; assess the cost of small stablecoin transfers with the workstreams that own fee parameters; make mobile wallet connection consistent across wallets; lower the cost of phone-number payments and close the basic-phone access gap |
| Medium-term | Hold on-chain order matching until demand meets the threshold; reassess oracle supply before funded free access ends around June 2027; publish a maintained register of Layer 2 options; improve wallet handling of small payments and seedless onboarding; hold Layer 2 engineering funding while the linked roadmap items are delivered; track cross-chain messaging and bridging; give partner-chain providers access to decision-makers |
| Deferred | Provider dependency on core components; exchange wallet-infrastructure support; Wanchain; integration tooling; documentation for identity issuance; pathways without observed flows; inference compute |
| Rejected | Layer 2 throughput funding justified by stalled African deployments; Celo MiniPay as a pathway; Milkomeda C1 (shut down) as a partner; a historical bulk-refund case |

These are evidence-based sequencing recommendations, not roadmap prescriptions. Details: [Investment Sequencing Recommendation](./CPC260015_M4_InvestmentSequencingRecommendation_v2_11Oct2026.md).

## 9. Evidence Required Before Funding

Future Layer 2 and interoperability proposals should show five things: independent demand tied to a named workflow; a blocker that survives the test against non-Layer 2 explanations; value-flow benefit, including outflows and dependency risk; an adoption pathway that names how users are reached and survives the end of any subsidy; and outcome measures after delivery, not only at delivery. Details: [Evidence Threshold Framework](./CPC260015_M4_EvidenceThresholdFramework_v2_11Oct2026.md).

## 10. Limitations and Evidence Caveats

- **Provider access.** One bridge, interoperability or wallet provider was interviewed against a committed five to eight, and no wallet provider was interviewed. Provider-side findings are held at Low confidence.
- **Self-reported scale.** User and transaction figures given by respondents were not independently verified.
- **No flow data.** No bridge or stablecoin flow data with source, destination and retention analysis was available, so no value-flow conclusion relies on volume or supply.
- **Respondent bias.** Most Cardano builders interviewed chose Cardano by familiarity, and recruitment ran largely through Cardano networks; four respondents were seeking funding. Our own validation work is disclosed as conflicted evidence and never sets a finding above Low.
- **Timing.** Several conclusions depend on roadmap items not yet on mainnet: Leios and CIP-0118 arrive with the Dijkstra hard fork, tentatively December 2026 to March 2027, and Midgard targets mainnet readiness by the end of 2026.
- **AI use.** AI tools were used in transcription, extraction, classification and drafting, as logged in our AI Tool Disclosure Log (grant clause 4.2).

## 11. Confidentiality Limits

- **Respondents.** Four anonymised and two confidential respondents are not identified anywhere in published material; statements given in confidence are used only to inform the analysis.
- **Withheld findings.** No finding has been withheld from this summary. Where a finding rests partly on confidential evidence, it is published without the identifying detail.
- **Full report.** The complete Final Research Report, which identifies all respondents, is confidential to the Committee and approved reviewers. A redacted version is published: [Final Research Report](./CPC260015_M4_FinalResearchReport_v2_11Oct2026.md).
- **Proprietary data.** No proprietary, paid or non-public data was used.

## 12. All Deliverables

| # | Deliverable |
|---|---|
| D1 | [L2 Barrier Analysis](./CPC260015_M4_L2BarrierAnalysis_v2_11Oct2026.md) |
| D2 | [L2 Demand Map](./CPC260015_M4_L2DemandMap_v2_11Oct2026.md) |
| D3 | [Interoperability Requirements Register](./CPC260015_M4_InteroperabilityRequirementsRegister_v2_11Oct2026.md) |
| D4 | [Interoperability Value-Flow Assessment](./CPC260015_M4_InteroperabilityValueFlowAssessment_v2_11Oct2026.md) |
| D5 | [Provider and Partner Opportunity Analysis](./CPC260015_M4_ProviderPartnerOpportunityAnalysis_v2_11Oct2026.md) |
| D6 | [Blocked-Demand Case Register](./CPC260015_M4_BlockedDemandCaseRegister_v2_11Oct2026.md) |
| D7 | [Negative-Case and Non-Cardano Evidence Summary](./CPC260015_M4_NegativeCaseNonCardanoEvidenceSummary_v2_11Oct2026.md) |
| D8 | [Investment Sequencing Recommendation](./CPC260015_M4_InvestmentSequencingRecommendation_v2_11Oct2026.md) |
| D9 | [Evidence Threshold Framework](./CPC260015_M4_EvidenceThresholdFramework_v2_11Oct2026.md) |
| D10 | [Technical and Commercial Blocker Taxonomy](./CPC260015_M4_TechnicalCommercialBlockerTaxonomy_v2_11Oct2026.md) |
| D11 | [Research Methodology Appendix](./CPC260015_M4_ResearchMethodologyAppendix_v2_11Oct2026.md) |
| D12 | [Cross-RFP Handoff Memo](./CPC260015_M4_CrossRFPHandoffMemo_v2_11Oct2026.md) |
| D13 | [Executive Decision Memo](./CPC260015_M4_ExecutiveDecisionMemo_v2_11Oct2026.md) |
| D14 | [Final Research Report](./CPC260015_M4_FinalResearchReport_v2_11Oct2026.md) (redacted) |
| D15 | Final Presentation (delivered to the Committee) |
| D16 | Public Summary (this document) |

## AI Use Disclaimer

AI tools were used in the analysis and drafting behind this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.

## Document Version History

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 11 October 2026 | Abdulbasit Adigun Abdulrahman | Public Summary for Milestone 4 |
