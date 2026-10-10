---
title: "Executive Decision Memo - NexTrium Milestone 3 (CPC-26-0015)"
sidebar_label: "Executive Decision Memo"
---

**NEXTRIUM**

Global Innovations Ltd

**Executive Decision Memo**

*Decisions for the Cardano Product Committee on Layer 2 and interoperability investment*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D13 (Proposal Section 13)                                                       |
| **Status**                | Draft for Milestone 3; final at Milestone 4                                     |
| **Version**               | 1.0                                                                             |
| **Date**                  | 10 October 2026                                                                 |
| **Confidentiality**       | Summary public; this full version is redacted for publication                   |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**The decision in one paragraph**

Do not fund new Layer 2 or interoperability engineering on current evidence. The demand waiting on Layer 2 in African emerging markets is real but narrow, sits in infrastructure, and is not yet at scale. What blocks adoption now is access: users who hold only stablecoins, use mobile or basic phones, and pay for small transfers. Act first through coordination with wallet teams and the workstreams that own fee parameters. Defer Layer 2 engineering until barriers are re-tested after Ouroboros Leios and proposals meet the [Evidence Threshold Framework](./CPC260015_M3_EvidenceThresholdFramework_v1_10Oct2026.md). Monitor interoperability pathways until they show flows into Cardano.

**1. Top Findings**

1. **Most blockers are not Layer 2 blockers.** Of 26 barriers classified, 7 are technical. The most severe are about access and cost: stablecoin-only users must hold ADA to use smart contracts, and small stablecoin transfers cost several times the routes African users already use. *(High and Medium confidence)*
2. **Genuine Layer 2 demand is narrow and not at scale.** It sits in oracle data publication, order-book trading and sensor data. The waiting applications are pre-launch or small, and the oracle providers that need faster publication are inactive or have left Cardano. *(Medium)*
3. **Access is the leading interoperability need.** Mobile wallet connection is the only requirement blocking deployment; identity verification is the most frequently requested; basic-phone and phone-number access is needed by six to seven builders. *(Medium)*
4. **No interoperability pathway yet shows net-new value for Cardano.** Celo MiniPay routes value off Cardano, and Wanchain's bridge is offline after an exploit. *(Low, provider-side cap)*
5. **Providers are not prioritising Cardano for commercial reasons, not technical ones:** low demand, integration taking 6 to 12 months against 1 to 2 on EVM chains, funded free services undercutting native providers, and weak support channels. *(Low)*
6. **Builders on other chains mostly never considered Cardano.** They chose for users, sponsorship, developer experience and fees. *(Medium)*

**2. Answers to the Decision Gates (preliminary)**

| Gate | Answer | Confidence |
|---|---|---|
| 1. Which applications are actually blocked by missing Layer 2 capability? | Oracle data services, order-book trading and sensor data for agricultural value chains. | Medium |
| 2. What Layer 2 capability would unlock the most immediate adoption value? | Lower-cost, higher-frequency data and state updates for infrastructure. For informal-economy builders, access channels and the cost of small transfers matter more than throughput. | Medium |
| 3. Which blockers are technical, commercial, ecosystem or coordination problems? | Of 26: 9 ecosystem, 7 technical, 3 user experience, 3 tooling, 2 coordination, 2 commercial. No type dominates; technical blockers are a minority. | Medium |
| 4. Which applications waiting on Layer 2 represent meaningful demand at scale? | None yet. | Medium |
| 5. What interoperability features do builders and operators actually need? | Wallet access first (mobile connection, basic-phone access, seedless onboarding), then identity verification. Bridging and messaging are conditions for considering Cardano more than current blockers. | Medium |
| 6. Which interoperability pathways are net-positive for Cardano? | None yet. USDCx came closest, but supply alone cannot show the value is new to Cardano. | Low |
| 7. Which pathways create asymmetric dependency or value-leakage risk? | Celo MiniPay (value-leakage risk) and Wanchain (dependency-risk). | Low |
| 8. Which bridge, partner-chain or cross-chain partners should Cardano prioritise? | None for new funding. Coordinate with wallet teams and with a partner-chain provider building on Cardano technology; monitor LayerZero, Bifrost, Rosen, Cardinal and Pyth. | Low |
| 9. What is preventing providers from prioritising Cardano? | Low demand, higher integration cost from missing tooling, funded free services undercutting native providers, and weak support channels. | Low |
| 10. What evidence should be required before funding? | Independent demand tied to a named workflow, a blocker that survives the non-Layer 2 test, value-flow benefit on all six elements, an adoption pathway that survives the end of any subsidy, and outcome measures after delivery. | Medium |
| 11. Which findings should be handed to adjacent RFPs or workstreams? | Liquidity to RFP 03; licensing, identity and local capacity to RFP 05; why builders choose or leave Cardano to RFP 02; enterprise readiness to RFP 06; developer experience, wallets, governance and technical roadmap findings to their workstreams. | Medium |

**3. Recommended Sequence**

| Horizon | Action | Type |
|---|---|---|
| Near-term | 1. Let stablecoin-only users use smart contracts without first holding ADA | Coordinate |
| | 2. Assess the cost of small-value stablecoin transfers with the workstreams that own fee parameters | Coordinate |
| | 3. Close the basic-phone and phone-number access gap | Coordinate |
| | 4. Provide mobile wallet connection for Cardano applications | Coordinate |
| Medium-term | Hold on-chain order matching until demand meets the threshold; reassess native oracle supply before funded free access ends (around June 2027); publish a maintained register of Layer 2 options; improve wallet handling of small payments and seedless onboarding; lower the burden of issuing identity credentials | Coordinate, defer or monitor |
| | Re-test throughput and cost-related Layer 2 barriers after Leios before funding engineering | Defer |
| | Track cross-chain messaging and bridging delivery; give partner-chain providers access to decision-makers | Monitor; coordinate |
| Deferred | Provider dependency on core components; exchange wallet-infrastructure support; Wanchain; integration tooling; pathways without flows; inference compute | Coordinate, defer or monitor |

**4. Investment Implications**

- **No new funding decision is needed to start the near-term actions.** They are coordination with wallet teams and technical workstreams that already exist.
- **Hold Layer 2 engineering funding** until barriers are re-tested after Leios and a proposal meets the [Evidence Threshold Framework](./CPC260015_M3_EvidenceThresholdFramework_v1_10Oct2026.md). Funding throughput now would not address the barriers that stop African adoption.
- **Judge funded integrations on outcomes, not delivery.** Seven builders and providers said funded integrations had not changed what they build. Continuation funding should rest on observed usage after delivery.
- **Plan for the end of subsidies.** The funded free oracle access ends around June 2027. Native oracle providers have already been displaced; what happens to oracle supply then should be decided before it ends.
- **Use the [Evidence Threshold Framework](./CPC260015_M3_EvidenceThresholdFramework_v1_10Oct2026.md)** for future grant, partnership and roadmap proposals in this area.

**5. Rejected and Deprioritised**

| Item | Decision | Rationale |
|---|---|---|
| Layer 2 throughput funding justified by stalled African deployments | Reject | None of the stalled or ended cases was caused by missing Layer 2 capability. |
| Celo MiniPay as a pathway | Reject | Routes value off Cardano with no retention. Close the access gap instead. |
| Milkomeda C1 as a partner | Reject | Shut down in September 2025. |
| Bulk refunds to many recipients | Reject | Historical; no deployment is waiting. |
| Wanchain | Defer | Offline since July 2026; reconsider only after reopening with safeguards. |
| Exchange wallet-infrastructure support | Defer | The operator decides on trading volume, which Cardano lacks; infrastructure support alone would not change it. |
| Rosen, Cardinal, Bifrost, USDCx, Masumi, Midnight, Partner Chains Toolkit, Orcfax, Identus | Monitor | Connectivity without observed flows into Cardano. |

**6. Unresolved Questions**

1. **Provider side.** With one bridge, interoperability or wallet provider interviewed against five to eight, are the provider findings representative? Gates 6 to 9 stay at Low until more providers are heard.
2. **Leios.** Will Ouroboros Leios, targeted for late 2026, resolve the throughput-related barriers? They are re-tested before the final version.
3. **Stablecoin flows.** Is the stablecoin supply on Cardano new value or converted value? Source and destination data would settle whether USDCx is value-accretive.
4. **Oracle supply after June 2027.** Will builders pay, and will native providers return?
5. **Wallet uptake.** Will wallet teams take up the access actions, and at what cost? No wallet provider was interviewed.
6. **Technical review.** The review of 13 items by Samir Idris is pending.
7. **Not assessed.** XDAO, Chainlink and Circle CCTP were not assessed for lack of evidence.

**7. Basis and Caveats**

- Based on desk research, screening, 31 interviews across four respondent categories, 500 evidence extracts and 105 Non-Layer 2 tests. Method and limitations are in the [Research Methodology Appendix](./CPC260015_M3_ResearchMethodologyAppendix_v1_10Oct2026.md).
- Confidence follows one rubric throughout. Provider-side findings and our own validation work are held at Low.
- Scale figures are self-reported. Most Cardano builders interviewed chose Cardano by familiarity rather than comparison.
- These are evidence-based sequencing recommendations, not roadmap prescriptions.

**AI Use Disclaimer**

AI tools were used in the analysis and drafting behind this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.

**Document Version History**

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 10 October 2026 | Abdulbasit Adigun Abdulrahman | Draft for Milestone 3 |
