---
title: "Interoperability Value-Flow Assessment - NexTrium Milestone 3 (CPC-26-0015)"
sidebar_label: "Interoperability Value-Flow Assessment"
---

**NEXTRIUM**

Global Innovations Ltd

**Interoperability Value-Flow Assessment**

*Classification of screened interoperability pathways by Cardano-side value and dependency risk*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D4 (Proposal Section 13)                                                        |
| **Status**                | Draft for Milestone 3; final at Milestone 4                                     |
| **Version**               | 1.0                                                                             |
| **Date**                  | 10 October 2026                                                                 |
| **Confidentiality**       | Summary public; this full version is redacted for publication                   |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This is the draft Interoperability Value-Flow Assessment (D4). It gives a final value-flow classification for every interoperability pathway screened in this research, using the five categories in RFP 07, and recommends an action for each. It answers Decision Gates 6 and 7.

Respondents who chose anonymised or confidential treatment are identified by category only, and confidential statements are not included.

**1. Summary**

1. **No pathway yet shows evidence of net-new value coming into Cardano.** USDCx came closest. Stablecoin supply on Cardano is reported at about 70 million US dollars, but that figure cannot show whether the value is new to Cardano or converted from value already there. The amount is small next to other ecosystems, and one builder says the liquidity increase disappointed. USDCx moves from value-accretive to neutral-access.
2. **One pathway routes value off Cardano: Celo MiniPay.** In our own validation work, distributions route to an Ethereum Layer 2 because Cardano has no comparable access path. It is classified as value-leakage risk.
3. **One pathway is a live dependency risk: Wanchain.** Its Cardano bridge has been offline since an exploit in July 2026, and no reopening has been reported.
4. **Most pathways are neutral-access.** They improve connectivity, but this research found no evidence of the net-new users, liquidity or applications they bring. Five pathways move to neutral-access from more favourable starting positions, because those positions rested on design or on flows not yet proven.
5. **All classifications are Low confidence.** One bridge, interoperability or wallet provider was interviewed against a committed five to eight, so provider-side findings are held at Low.

**Classifications at a glance**

| # | Pathway | Starting position | Final classification | Recommended action |
|---|---|---|---|---|
| 1 | Circle USDCx | Value-accretive, subsidy-dependent | Neutral-access | Monitor |
| 2 | Celo MiniPay | Dependency-risk to value-leakage risk | Value-leakage risk | Reject |
| 3 | Wanchain | Dependency-risk | Dependency-risk | Defer |
| 4 | LayerZero | Neutral-access, pending delivery | Neutral-access, pending delivery | Monitor |
| 5 | Rosen Bridge | Mutual-value | Neutral-access | Monitor |
| 6 | Cardinal | Mutual-value | Neutral-access | Monitor |
| 7 | Bifrost | Mutual-value, pending delivery | Neutral-access, pending delivery | Monitor |
| 8 | Masumi agent settlement | Unclassified | Neutral-access | Monitor |
| 9 | Midnight | Neutral-access | Neutral-access | Monitor |
| 10 | Partner Chains Toolkit | Not classified | Neutral-access | Monitor |
| 11 | Orcfax oracle | Neutral-access with provider viability risk | Neutral-access, provider viability risk | Monitor |
| 12 | Fetch.ai and ASI Cloud | Neutral-access, split by layer | Neutral-access | Defer |
| 13 | Hyperledger Identus | Value-accretive (our own validation work) | Neutral-access | Monitor |

Every classification is Low confidence.

**2. Method**

- **Which pathways.** Every pathway screened in this research: the eight in the [Screening Report](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_ScreeningReport_v1_05Aug2026.md) (Section 3.2), the two retained there for value-flow assessment (Midnight and the Partner Chains Toolkit, Section 2.2), and the three in our proposal (Section 6) from our own validation work (Orcfax, Fetch.ai, Identus).
- **Categories.** The five in RFP 07: value-accretive, mutual-value, neutral-access, dependency-risk and value-leakage risk.
- **Six elements for every pathway** (Proposal Section 6): expected inflows (users, liquidity, applications, transactions and partner access, each stated), potential outflows, retention mechanism or Cardano-side benefit, dependency risk, evidence, and confidence. Each entry also records dissenting evidence and a recommended action from our pathway action set: fund now, coordinate, partner, monitor, defer or reject (Proposal Section 6).
- **No favourable classification without evidence of flows.** No pathway is classified value-accretive or mutual-value on technical possibility, roadmap existence, sentiment or interoperability for its own sake (Proposal Section 6; RFP 07 Section 8). Where no flow or adoption evidence was found, the pathway is neutral-access, the category RFP 07 defines for improved connectivity with unclear or unproven adoption impact.
- **Bridge volume and token supply** were not used as evidence of net-new value, because source, destination and retention analysis was not available for any pathway.
- **Provider status** was re-checked against public sources on 10 October 2026, because the desk research status dates (31 July 2026) were more than 60 days old. Secondary sources are labelled as such.
- **Evidence from our own validation work** is labelled and is not used to set any classification above Low.

**3. Pathway Classifications**

### 1. Circle USDCx

| Element | Detail |
|---|---|
| Final classification | Neutral-access (Low confidence) |
| Expected inflows | Liquidity: dollar stablecoin supply issued on Cardano, but not shown to be net-new, because supply cannot separate new value from value converted from ADA or other Cardano stablecoins. Applications: at least one Cardano-native application settles in USDCx (Masumi agent payments, per its documentation). Users, transactions and partner access: not evidenced. |
| Potential outflows | Stablecoins can leave Cardano through cross-chain deposit routes; a non-Cardano payments operator lets users deposit stablecoins from Cardano into its own wallet on another chain (E-416). |
| Retention mechanism or Cardano-side benefit | Native issuance on Cardano through Circle's xReserve ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 4.10); use by Cardano applications |
| Dependency risk | Medium. A single issuer, and the token is not deployed on other chains ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 8.5). |
| Evidence | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 4.10, 8.5, 9.1. Status re-checked 10 October 2026: reports put Cardano's total stablecoin supply at about 70 million US dollars in early October 2026, with USDC or USDCx the majority (secondary sources, figures conflict on share, not independently verified). Interviews: E-396, E-416, E-428, E-472. |
| Dissenting evidence | Against a higher classification: one builder says the liquidity increase did not meet expectations and compares it with billions on other ecosystems (E-396); the fee subsidy ended on 28 May 2026 and post-subsidy flows remain unproven ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 4.11, 9.1, 11.2; [Screening Report](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_ScreeningReport_v1_05Aug2026.md) Section 3.2). For a higher classification: supply on Cardano is reported to have grown and an application settles in it. |
| Confidence | Low |
| Recommended action | Monitor, and reassess when source and destination data for USDCx supply is available. Liquidity depth and multi-chain availability are routed to RFP 03 (stablecoin liquidity incentive and activation). |

### 2. Celo MiniPay

| Element | Detail |
|---|---|
| Final classification | Value-leakage risk (Low confidence) |
| Expected inflows | None to Cardano at the distribution layer |
| Potential outflows | Distribution flows: value generated by Cardano-settled agreements is delivered to recipients on an Ethereum Layer 2 |
| Retention mechanism or Cardano-side benefit | None at the distribution layer |
| Dependency risk | High. Final delivery depends on an external Layer 2. |
| Evidence | Our own validation work, VAL-006 ([Preliminary VAL-Case Evidence Set](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_PreliminaryVALCaseEvidenceSet_v1.1_06Aug2026.md) v1.1, including the corrected evidence basis in Section 6.5). The access-channel gap behind it is supported independently: no Cardano wallet supports phone-number addressing ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 3.13), and seven builders need basic-phone or offline access ([L2 Demand Map](./CPC260015_M3_L2DemandMap_v1_09Oct2026.md), entry 5). |
| Dissenting evidence | No independent respondent reported routing Cardano value through MiniPay. Two builders reach basic-phone users through their own USSD layer on Cardano (E-256, E-489). |
| Confidence | Low (our own validation work; independent evidence supports the gap, not the routing) |
| Recommended action | Reject as a pathway to support. Address the access-channel gap instead ([L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md); [Interoperability Requirements Register](./CPC260015_M3_InteroperabilityRequirementsRegister_v1_10Oct2026.md)). |

### 3. Wanchain

| Element | Detail |
|---|---|
| Final classification | Dependency-risk (Low confidence) |
| Expected inflows | None while offline |
| Potential outflows | Assets held in the bridge's Cardano-side reserve; about 97% of that reserve was withdrawn in the July 2026 exploit ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 4.8) |
| Retention mechanism or Cardano-side benefit | None evidenced |
| Dependency risk | High. A single contract flaw stranded the Cardano-side reserve. |
| Evidence | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 4.8, 4.10. Status re-checked 10 October 2026: no report of the Cardano bridge reopening was found, and a post-mortem was still awaited (secondary sources). |
| Dissenting evidence | None found |
| Confidence | Low |
| Recommended action | Defer: do not promote or fund until the bridge reopens with stronger safeguards |

### 4. LayerZero

| Element | Detail |
|---|---|
| Final classification | Neutral-access, pending delivery (Low confidence) |
| Expected inflows | Partner access: connection to the chains LayerZero supports. Users, liquidity, applications and transactions: not yet evidenced. |
| Potential outflows | Assets and messages can move out as easily as in; direction of flow not yet observable |
| Retention mechanism or Cardano-side benefit | None evidenced yet |
| Dependency risk | Medium. Cross-chain connectivity would rest on an external messaging provider. |
| Evidence | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 4.9, 4.10. Status re-checked 10 October 2026: the Cardano Foundation's June 2026 update describes phased delivery of testnet and mainnet endpoints and the Stargate liquidity layer through 2026. Interviews: a partner-chain provider expects the integration to resolve most of its bridging gap (E-473); one builder is adopting it (E-231). |
| Dissenting evidence | Announcement and delivery status have diverged since March 2026 ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 4.9). |
| Confidence | Low |
| Recommended action | Monitor: reassess when mainnet delivery and observable flows exist |

### 5. Rosen Bridge

| Element | Detail |
|---|---|
| Final classification | Neutral-access (Low confidence) |
| Expected inflows | Partner access to Ergo and, through it, Bitcoin assets. Users, liquidity, applications and transactions: not evidenced. |
| Potential outflows | ADA and Cardano assets can move to Ergo as wrapped tokens; direction of flow not evidenced |
| Retention mechanism or Cardano-side benefit | Not evidenced |
| Dependency risk | Low to Medium. Consensus for the bridge sits on Ergo ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 4.11). |
| Evidence | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 4.10, 4.11. Status re-checked 10 October 2026: operational; latest announcement found was November 2025 (Ergo Platform). No interview evidence. |
| Dissenting evidence | None |
| Confidence | Low |
| Recommended action | Monitor |

### 6. Cardinal

| Element | Detail |
|---|---|
| Final classification | Neutral-access (Low confidence) |
| Expected inflows | Liquidity: Bitcoin assets brought to Cardano as wrapped assets, in design. Users, applications, transactions and partner access: not evidenced. |
| Potential outflows | Wrapped assets can be unwrapped back to Bitcoin |
| Retention mechanism or Cardano-side benefit | Use of wrapped Bitcoin in Cardano DeFi, in design; not evidenced |
| Dependency risk | Medium. Relies on the bridge's operator model. |
| Evidence | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 4.10, 4.11. Status re-checked 10 October 2026: no 2026 update found; 2025 coverage described it as early-stage. No interview evidence. |
| Dissenting evidence | None |
| Confidence | Low |
| Recommended action | Monitor |

### 7. Bifrost

| Element | Detail |
|---|---|
| Final classification | Neutral-access, pending delivery (Low confidence) |
| Expected inflows | In design: Bitcoin liquidity, with stake pool operator participation in securing the bridge ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 3.12). Not yet operating. |
| Potential outflows | Not observable before delivery |
| Retention mechanism or Cardano-side benefit | In design: rewards to Cardano stake pool operators who secure it |
| Dependency risk | Not assessable before delivery |
| Evidence | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 4.7, 4.9, 4.10. Status re-checked 10 October 2026: pre-mainnet; public milestone records conflict; a treasury funding request was submitted in June 2026 and its outcome was not found. No interview evidence. |
| Dissenting evidence | Delivery dates have passed ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 4.7). |
| Confidence | Low |
| Recommended action | Monitor until delivered |

### 8. Masumi agent settlement

| Element | Detail |
|---|---|
| Final classification | Neutral-access (Low confidence) |
| Expected inflows | Applications and transactions: agent payments settling on Cardano. The project reports over 19,000 transactions and over 250 businesses and users onboarded (self-reported, not verified). Liquidity, users and partner access: not evidenced. |
| Potential outflows | None identified |
| Retention mechanism or Cardano-side benefit | Settlement on Cardano, using USDCx for agent payments (project documentation) |
| Dependency risk | Low |
| Evidence | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 6.7, 6.8. Status re-checked 10 October 2026: payment contracts on mainnet; the planned Layer 2 is not delivered. No interview evidence. |
| Dissenting evidence | Adoption figures are the project's own |
| Confidence | Low |
| Recommended action | Monitor, and reassess with verified usage data |

### 9. Midnight

| Element | Detail |
|---|---|
| Final classification | Neutral-access (Low confidence) |
| Expected inflows | Partner access and applications: privacy capability that Cardano applications may use. Users, liquidity and transactions to Cardano: not evidenced. |
| Potential outflows | Applications: a builder chose Midnight for default privacy and did not evaluate Cardano (E-296 to E-298) |
| Retention mechanism or Cardano-side benefit | None built into Midnight's architecture; retention depends on each application choosing Cardano for settlement ([Preliminary VAL-Case Evidence Set](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_PreliminaryVALCaseEvidenceSet_v1.1_06Aug2026.md) v1.1, Section 6.2) |
| Dependency risk | Medium. Midnight runs its own ledger, consensus and tokens and integrates with other ecosystems ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 3.8). |
| Evidence | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 3.8; VAL-002 (our own validation work); interviews: E-296 to E-302, E-404, E-484 |
| Dissenting evidence | Two builders on or near Cardano want to use Midnight for privacy features (E-404, E-484) |
| Confidence | Low |
| Recommended action | Monitor |

### 10. Partner Chains Toolkit

| Element | Detail |
|---|---|
| Final classification | Neutral-access (Low confidence) |
| Expected inflows | Partner access: chains built with the toolkit, currently Midnight and Materios ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 3.3). Users, liquidity, applications and transactions to Cardano: not evidenced. |
| Potential outflows | A partner chain can become fully independent of Cardano, with no lock-in ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 3.9) |
| Retention mechanism or Cardano-side benefit | Optional: security from Cardano stake pool operators, if a partner chain chooses it (Section 3.9) |
| Dependency risk | Low for Cardano |
| Evidence | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 3.3, 3.9, 3.12. A partner-chain project not built on the toolkit reports two-way flows and a full dependency on Cardano technology (E-484, E-485); this informs the partner-chain model but is not evidence about the toolkit. |
| Dissenting evidence | None |
| Confidence | Low |
| Recommended action | Monitor |

### 11. Orcfax oracle

| Element | Detail |
|---|---|
| Final classification | Neutral-access, with provider viability risk (Low confidence) |
| Expected inflows | Applications and transactions: oracle data published to Cardano for contracts to use. Users, liquidity and partner access: not evidenced. |
| Potential outflows | Clients have moved to an external oracle (E-100) |
| Retention mechanism or Cardano-side benefit | Data published to and read from Cardano only; the open-source data format survives the network ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 6.3) |
| Dependency risk | Medium. The provider is not operating. |
| Evidence | [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 6.1 to 6.3; VAL-004 (our own validation work); interviews: E-096 (not live at interview, 14 August 2026), E-100, E-114, E-119 |
| Dissenting evidence | None |
| Confidence | Low |
| Recommended action | Monitor, including the position when free access to the external oracle ends around June 2027 ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 6.5) |

### 12. Fetch.ai and ASI Cloud

| Element | Detail |
|---|---|
| Final classification | Neutral-access (Low confidence) |
| Expected inflows | Applications: intelligence outputs for Cardano contracts, in our own validation work. Not evidenced beyond it. |
| Potential outflows | None identified |
| Retention mechanism or Cardano-side benefit | Outputs used by Cardano applications |
| Dependency risk | Low to Medium. A Cardano-native option exists for agent orchestration, but none for inference compute ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 6.8). |
| Evidence | VAL-005 (our own validation work); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 6.6, 6.8. No interview evidence. |
| Dissenting evidence | None |
| Confidence | Low |
| Recommended action | Defer: the inference compute gap is routed to RFP 09 (AI commercial positioning) |

### 13. Hyperledger Identus

| Element | Detail |
|---|---|
| Final classification | Neutral-access (Low confidence) |
| Expected inflows | In design: transactions and chain state from identity anchoring on Cardano. Users, liquidity, applications and partner access: not evidenced. |
| Potential outflows | None identified |
| Retention mechanism or Cardano-side benefit | Identities anchored on Cardano must be resolved from Cardano |
| Dependency risk | Low |
| Evidence | VAL-003 (our own validation work) and its independent technical review (D-M1-03); [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 4.4, 5.2, 5.8 |
| Dissenting evidence | Seven builders and providers need identity verification ([Interoperability Requirements Register](./CPC260015_M3_InteroperabilityRequirementsRegister_v1_10Oct2026.md), requirement 2), but none uses Identus; no African deployment of Identus was found; identity work in African markets is happening on other chains ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 4.4). |
| Confidence | Low |
| Recommended action | Monitor |

**4. Answers to the Decision Gates (preliminary)**

| Gate | Preliminary answer | Confidence |
|---|---|---|
| 6. Which interoperability pathways are net-positive for Cardano? | None yet. No pathway shows evidence of net-new value or mutual value for Cardano. USDCx came closest, but supply growth alone cannot show that the value is new to Cardano. | Low |
| 7. Which pathways create asymmetric dependency or value-leakage risk? | Celo MiniPay (value-leakage risk) and Wanchain (dependency-risk). | Low |

**5. Change Register**

| Pathway | Earlier position | Where | Now | Reason |
|---|---|---|---|---|
| Circle USDCx | Value-accretive, subsidy-dependent | [Research Design Document](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_ResearchDesignDocument_v1.1_01Aug2026.md) v1.1 Section 3.3; [Screening Report](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_ScreeningReport_v1_05Aug2026.md) Section 3.2; [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 4.11 | Neutral-access | The earlier position was conditional on post-subsidy flows, which remain unproven. Reported supply cannot show whether value is new to Cardano or converted from value already there, the amount is small next to other ecosystems, and one builder reports disappointment (E-396). RFP 07 requires net-new value for value-accretive. |
| Rosen Bridge | Mutual-value | [Screening Report](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_ScreeningReport_v1_05Aug2026.md) Section 3.2; [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 4.11 | Neutral-access | The earlier position rested on bridge design. No flow or adoption evidence was found, and a pathway is not classified mutual-value on technical possibility (Proposal Section 6). |
| Cardinal | Mutual-value | Same | Neutral-access | Same reason |
| Bifrost | Mutual-value, pending delivery | Same | Neutral-access, pending delivery | Same reason; the bridge is not yet operating |
| Identus | Value-accretive | [Preliminary VAL-Case Evidence Set](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_PreliminaryVALCaseEvidenceSet_v1.1_06Aug2026.md) v1.1 | Neutral-access | Evidence from our own work cannot set a value-flow classification above Low ([Research Design Document](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_ResearchDesignDocument_v1.1_01Aug2026.md) Section 6.4), and no adoption evidence was found |
| Celo MiniPay | Dependency-risk to value-leakage risk | [Screening Report](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_ScreeningReport_v1_05Aug2026.md) Section 3.2 | Value-leakage risk | Resolved to a single category: the pathway carries value out with no retention mechanism |
| Masumi, Partner Chains Toolkit | Not classified | [Screening Report](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_ScreeningReport_v1_05Aug2026.md) Sections 2.2, 3.2 | Neutral-access | Final classification required for every screened pathway; no flow evidence found |

**6. Limitations**

- One bridge, interoperability or wallet provider was interviewed against a committed five to eight. Every classification is held at Low confidence.
- No bridge volume or token supply data with source, destination and retention analysis was available, so no classification relies on volume or supply.
- Several status checks rely on secondary sources that could not be verified directly.
- Classifications should be reassessed at the final version, particularly for LayerZero and Bifrost once delivered.

**7. AI Use Disclaimer**

AI tools were used in the analysis and drafting behind this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.

**Status sources (checked 10 October 2026)**

- Wanchain: [crypto.news](https://crypto.news/wanchain-cardano-bridge-exploit-drains-515m-night-worth-9m/); [CoinMarketCap Wanchain updates](https://coinmarketcap.com/cmc-ai/wanchain/latest-updates/)
- LayerZero: [Cardano Foundation Monthly Update, June 2026](https://cardanofoundation.org/blog/june-2026-activities); [cardano.org](https://cardano.org/news/2026-06-08-cardano-is-connecting-to-all-of-crypto/)
- Bifrost: [Project Catalyst](https://projectcatalyst.io/funds/14/cardano-use-cases-partners-and-products/bifrost-bitcoin-cardano-bridge-secured-by-cardano-spos); [Cardano governance record](https://app.cgov.io/governance/dfd81f8db652fd9263e0ce3bef043b4823045ec3a5da10c817681ada7a23f034:0)
- USDCx: [Circle](https://www.circle.com/blog/usdcx-on-cardano-now-available-via-circle-xreserve); [blockchain.news](https://blockchain.news/flashnews/cardano-stablecoin-market-cap-nears-70m)
- Rosen Bridge: [Ergo Platform](https://ergoplatform.org/es/blog/Rosen-Bridge-Nears-Bitcoin-Runes-Launch/)
- Cardinal: [Cexplorer, March 2026](https://cexplorer.io/article/progress-on-cardano-bitcoin-interoperability-in-march-2026)
- Masumi: [NMKR](https://www.nmkr.io/clients/nmkr-x-masumi); [Masumi documentation](https://docs.masumi.network/project-resources/faq)

**Document Version History**

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 10 October 2026 | Abdulbasit Adigun Abdulrahman | Draft for Milestone 3 |
