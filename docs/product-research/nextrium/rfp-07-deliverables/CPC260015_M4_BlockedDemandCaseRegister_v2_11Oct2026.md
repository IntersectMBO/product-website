---
title: "Blocked-Demand Case Register (Final) - NexTrium Milestone 4 (CPC-26-0015)"
sidebar_label: "Blocked-Demand Case Register"
---

**NEXTRIUM**

Global Innovations Ltd

**Blocked-Demand Case Register**

*Documented applications and workflows waiting on Layer 2 or interoperability capability*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D6 (Proposal Section 13), final version                                         |
| **Status**                | Final for Milestone 4                                                           |
| **Confidentiality**       | Summary public; this full version is redacted for publication                   |
| **Version**               | 2.0                                                                             |
| **Date**                  | 11 October 2026                                                                 |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This is the final Blocked-Demand Case Register (D6). It records fifteen documented cases of applications and workflows waiting on Layer 2 or interoperability capability, eleven of which pass the Layer 2 or interoperability workflow test. It updates the initial register published at Milestone 2 with the Milestone 3 classification of every blocker, an independent technical review of the technical claims behind nine cases, and status checks as at 11 October 2026. Section 2 lists every change.

Respondents who chose anonymised or confidential treatment are identified by category only, and confidential statements are not included.

**1. Basis and Method**

**1.1 Contract and proposal requirements**

| Requirement | Source | How this register meets it |
|---|---|---|
| Minimum 8 to 15 cases | Agreement Appendix A, Milestone 2 | 15 cases recorded; 11 pass the Layer 2 or interoperability workflow test |
| Our validation cases VAL-003 and VAL-006 serve as Cases 1 and 2, disclosed as conflicted evidence and starting at Low confidence, upgradeable following independent review and builder triangulation | Proposal Section 13, D6 | Case-001 (VAL-003) and Case-002 (VAL-006). Case-001 is Medium for the technical pipeline, independently reproduced in the Milestone 1 Independent Technical Review; its demand evidence remains Low pending builder triangulation |
| Each case distinguishes named, confidential and anonymised evidence | Proposal Section 13, D6 | Consent tier recorded per case; anonymised respondents are identified by category only |
| Each case includes blocker, deployment decision pending, evidence source and confidence | Proposal Section 13, D6 | Fields 4, 7, 8 and 11 of every case |
| Every case passes the relevant Layer 2 or interoperability workflow test | Proposal Section 13, D6 | Non-Layer 2 Test ID recorded for every case, including the two from our own validation work; the four cases that do not pass are labelled and routed |
| Does not use vague "builders say" claims | Proposal Section 13, D6 | Every case cites the extract IDs and interview date it rests on |

**1.2 How a case enters the register**

1. Each interview is extracted into the Evidence Extract, one row per distinct statement (Stage 1).
2. Every statement of type "Blocker claim" passes the seven non-Layer 2 alternatives test: liquidity, wallet support, bridge or provider access, tooling, commercial uncertainty, compliance and partner access (Stage 2). A blocker is a Layer 2 blocker only where all seven are No.
3. A case is recorded only where the blocker ties to a named application or workflow. General infrastructure complaints that tie to no named workflow are routed to the Cross-RFP Handoff Memo (D12) instead.
4. A case passes the workflow test either as a Layer 2 case (no alternative explains the blocker) or as an interoperability case (the blocker ties to a named workflow in one of the seven interoperability feature types, such as wallet user experience, asset bridging or identity and data portability).
5. Confidence follows the project rubric: High for primary documentation, on-chain records or first-hand testing; Medium where corroborated across more than one independent source, including the Milestone 1 Desk Research Summary, or independently verified; Low for single-source or untriangulated evidence, and for evidence from our own validation work until it is independently reviewed.

**1.3 Evidence separation**

- **Our own validation work:** Case-001 and Case-002 come from our own validation exercises (VAL-003, VAL-006). Because we are both the researcher and the builder in these cases, we disclose them as conflicted evidence and present them separately from independent respondent evidence.
- **Funding-seeking respondents:** R-002 and R-022 are flagged in the Interview Register as seeking funding. Cases resting on their evidence (Case-007, Case-008, Case-013, Case-014) are labelled below so they can be read apart from independent demand evidence.
- **Provider-side confidence cap:** Category 3 access (1 interview against a committed 5 to 8) is below its lower target. Per the Milestone 1 Stakeholder Access Status Update (Section 4.2), provider-side findings are not presented above Low; Case-015 is capped accordingly.

**1.4 Routed cases**

Four cases are real, named blockers but are compliance, funding or liquidity problems, not Layer 2 or interoperability problems. They are retained so the register reflects what respondents reported, and are routed through the Cross-RFP Handoff Memo (D12):

| Case | Blocker | Routed to |
|---|---|---|
| Case-003 (SAPro) | Bank-service licensing (compliance) | RFP 05 (government and emerging markets entry) |
| Case-007 (Smart Hatch funding) | Funding access | Governance workstream; RFP 05 (government and emerging markets entry) as secondary |
| Case-008 (Wednesday marketplace funding) | Funding access | Governance workstream; RFP 05 (government and emerging markets entry) as secondary |
| Case-009 (Apex Fusion stablecoin rail) | Liquidity, historical | RFP 03 (stablecoin liquidity incentive and activation) |

They are not counted toward the Layer 2 or interoperability case total.

**1.5 Funding-seeking label per case**

| Case | Respondent flagged as funding-seeking |
|---|---|
| Case-007, Case-013 | Yes (R-022) |
| Case-008, Case-014 | Yes (R-002; Case-014 is corroborated by R-004 and R-027, neither flagged) |
| All other cases | No |


**2. Changes Since the Initial Register**

The initial register was published at Milestone 2 ([initial register](https://github.com/Nextrium/cpc-product-website/blob/milestone-2-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M2_BlockedDemandCaseRegister_v1_09Oct2026.md)). Each change below is reflected in the case detail.

| Case | Change | Reason |
|---|---|---|
| Case-001 | The node-cost barrier is lifted: a node-free publishing path now exists | Technical review item D1; NeoPRISM documentation |
| Case-002 | Phone-number payments now exist on Cardano; the remaining gap is sub-cent cost | Technical review item D2; ChatterPay fee schedule (0.45 ADA per send) |
| Case-004, Case-010 | Claims qualified: valid for some high-volume workloads; Leios does not reduce block-time latency | Technical review items A1, A2 |
| Case-005 | Claim qualified: matching is not universally one per transaction; the reviewer declared a conflict | Technical review item A3 |
| Case-006 | Confidence raised from Medium to High | Confirmed by technical review item A5 |
| Case-011 | Confidence raised from Low to Medium | Confirmed by technical review item A6 |
| Case-012 | Recorded as solvable today by batching | Technical review item A8 |
| Case-013 | Confidence raised from Medium to High | Confirmed by technical review item A7 |
| Case-014 | Claim qualified: mobile connectivity exists but is fragmented; test reference corrected to T-009 | Technical review item C1 |
| Case-015 | Claim qualified: LayerZero endpoints live; Circle's CCTP effectively available through USDCx | Technical review item B2 |
| All | Every case carries its Milestone 3 classification and technical review outcome; statuses are final | Milestone 3 analysis |

**3. Register Summary**

| Case | Application or workflow | Barrier type | Confidence | Consent | Passes L2 / interoperability test |
|---|---|---|---|---|---|
| Case-001 | Decentralised identity on Cardano | Tooling | Medium | Not applicable (our own validation work) | Yes |
| Case-002 | Last-mile stablecoin distribution | Ecosystem | Low | Not applicable (our own validation work) | Yes |
| Case-003 | SAPro - escrow platform for African informal-market buyers and sellers | Compliance | Low | Named | No, routed to RFP 05 (D12) |
| Case-004 | Orcfax oracle data-publication service | Technical | Medium | Named | Yes |
| Case-005 | [anonymised Category 2 team]’s own true-orderbook DEX prototype | Technical | Medium | Anonymised | Yes |
| Case-006 | DripDropz, a Cardano micropayment/tipping tool | Technical | High | Named | Yes |
| Case-007 | Smart Hatch, a poultry value-chain platform | Commercial | Low | Named | No, routed to governance workstream and RFP 05 (D12) |
| Case-008 | Wednesday marketplace, a Democratic Republic of Congo marketplace escrow platform | Commercial | Low | Named | No, routed to governance workstream and RFP 05 (D12) |
| Case-009 | Apex Fusion / Prime chain, a Cardano sister-chain project bridging via LayerZero | Liquidity | Low | Named | No, routed to RFP 03 (D12) |
| Case-010 | Charli3 oracle network | Technical | Medium | Named | Yes |
| Case-011 | UTXOS | Technical | Medium | Named | Yes |
| Case-012 | 8pod | Technical | Low | Named | Yes |
| Case-013 | Smart Hatch IoT data workflow | Technical | High | Named | Yes |
| Case-014 | Wednesday marketplace | Ecosystem | Medium | Named (R-027 Anonymised) | Yes |
| Case-015 | Apex Fusion | Ecosystem | Low | Named | Yes |

**4. Case Detail**

### Case-001

| Field | Detail |
|---|---|
| Application or workflow | Decentralised identity on Cardano: DID publication, W3C Verifiable Credential issuance, and independent credential verification using Cardano as sole source of truth (Zivana Protocol identity pipeline) |
| Who is blocked | NexTrium / Zivana Protocol (our own validation exercise); by extension any team building portable, verifiable-credential identity on Cardano |
| The blocker | Nine undocumented engineering and configuration issues in the Hyperledger Identus stack on Cardano preprod, now resolved and published. Secondary barrier: full end-to-end credential issuance requires running a complete Cardano node, a meaningful infrastructure-cost barrier for African builders and small teams even though the technical pipeline is confirmed functional. |
| Barrier type | Tooling |
| Non-L2 test ID | T-108 (applied to VAL-003) |
| Deployment decision pending | Yes, now largely resolved: the pipeline is confirmed functional and a node-free publishing path exists through NeoPRISM's embedded wallet; what remains is documentation for African builders |
| Evidence source | D-M1-02 Preliminary VAL-Case Evidence Set v1.1 (VAL-003); independently reproduced by Samir Idris, D-M1-03; github.com/zivana-labs/zivana-validation/tree/main/identus-setup; on-chain DID did:prism:1e99b05986e260d569eea85c181af04fb8f7e437d337677b609b79e260fd3292, tx f6becc5272cf26a328c5d822390a5fee68a769bc23b26e3fcf11f8e075688389, block 4,894,745 |
| Respondent IDs | N/A - our own validation work, not a respondent interview |
| Consent tier | Not applicable (our own validation work) |
| Confidence | Medium |
| Recommended action | Improve documentation |
| Gate | 1,5 |
| Technical review | Item D1: partially confirmed. The node requirement came from the tested setup; a node-free path now exists ([technical review](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md)). |
| Status | Final. Case 1 of 2 committed in Proposal Section 13 (D6). Medium applies to the technical pipeline, independently reproduced at Milestone 1; demand remains Low because no independent builder uses the Cardano identity stack. |

### Case-002

| Field | Detail |
|---|---|
| Application or workflow | Last-mile stablecoin distribution: covenant payment splitting and delivery to informal-economy recipients via phone-number-based rails at sub-cent fees (Zivana Protocol distribution primitive) |
| Who is blocked | NexTrium / Zivana Protocol (our own validation exercise); by extension any Cardano builder needing phone-number-addressed, sub-cent last-mile stablecoin distribution |
| The blocker | Cardano currently has no phone-number-based stablecoin distribution rail with sub-cent fees comparable to Celo MiniPay. Covenant distributions route to Celo MiniPay, an Ethereum Layer 2 protocol, instead of remaining on Cardano. Documented as an architectural decision, not a preference. |
| Barrier type | Ecosystem |
| Non-L2 test ID | T-109 (applied to VAL-006) |
| Deployment decision pending | Yes - distributions remain routed off Cardano until a comparable native or bridged capability exists |
| Evidence source | D-M1-02 Preliminary VAL-Case Evidence Set v1.1 (VAL-006); github.com/zivana-labs/zivana-validation/tree/main/celo-minipay; on-chain Celo Sepolia deploy/verify/approve/deposit/distribute cycle |
| Respondent IDs | N/A - our own validation work, not a respondent interview |
| Consent tier | Not applicable (our own validation work) |
| Confidence | Low |
| Recommended action | Route to the Cross-RFP Handoff Memo for RFP 03 (stablecoin liquidity incentive and activation); builder interviews show the underlying access gap is shared by six to seven builders, while the technical review places it at the ecosystem and application layer rather than in our own architecture |
| Gate | 1, 4, 6, 7 |
| Technical review | Item D2: partially confirmed. Phone-number-addressed payments now exist on Cardano through ChatterPay; no sub-cent rail exists ([technical review](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md)). |
| Status | Final. Case 2 of 2 committed in Proposal Section 13 (D6). Low: our own work, partly triangulated by builder demand for basic-phone access. A phone-number rail now exists on Cardano at 0.45 ADA per send, so the case rests on the absence of a sub-cent rail. |

### Case-003

| Field | Detail |
|---|---|
| Application or workflow | SAPro - escrow platform for African informal-market buyers and sellers (Nigeria and wider Africa) |
| Who is blocked | Kamal Aliyu / SAPro, and by extension the informal-market buyers and sellers the platform serves |
| The blocker | Cardano-based deployment was paused after testnet launch (Feb 2026) because integrating with regulated Nigerian bank service providers required an operating license the team could not afford; team temporarily reverted to a traditional (non-Cardano) banking escrow system to keep reaching its market, and states it intends to return to Cardano once financing for the license is secured. |
| Barrier type | Compliance |
| Non-L2 test ID | T-077, T-078 |
| Deployment decision pending | Yes - return to Cardano is contingent on securing licensing finance; not resolvable by protocol changes |
| Evidence source | Interview transcript, 20 Sep 2026 (R-031) |
| Respondent IDs | R-031 |
| Consent tier | Named |
| Confidence | Low |
| Recommended action | Route to Cross-RFP Handoff Memo as a regulatory/payment-integration finding (native local-payment integration was the respondent's own suggested fix); not actionable as a Layer 2 or interoperability recommendation within this grant's scope |
| Gate | 1, 3, 9 |
| Technical review | Not in technical review scope (non-Layer 2 case) |
| Status | Final; no further corroboration was obtained. Non-Layer 2 blocker: does not pass the D6 Layer 2 or interoperability workflow test. Retained for completeness and routed via the Cross-RFP Handoff Memo (D12) to RFP 05 (government and emerging markets entry): regulated bank-service integration and licensing in Nigeria. |

### Case-004

| Field | Detail |
|---|---|
| Application or workflow | Orcfax oracle data-publication service: collecting, verifying and publishing time-sensitive and derivative price-feed data on Cardano |
| Who is blocked | Orcfax (Ross Spencer, Technical Lead); by extension any Cardano oracle or data-feed provider serving latency-sensitive clients |
| The blocker | Cardano transaction speed and cost limits prevent publishing lower-latency and derivative price feeds that clients have requested; no generic Layer 2 solution exists for the specific requirement of a peer-to-peer system to collect, verify and reach consensus on data before publishing to Cardano. Compounded by IOHK suspending a relied-upon component (the Plutus chain index), which shut down Orcfax’s own operations for two months. |
| Barrier type | Technical |
| Non-L2 test ID | T-021, T-023, T-024, T-027, T-028 |
| Deployment decision pending | Yes - whether to build toward a Layer 2 or off-chain consensus layer before offering derivative and lower-latency price feeds; team has already shifted toward community-led infrastructure (Koios) over foundation-built tools to reduce dependency risk |
| Evidence source | Interview transcript, 14 Aug 2026 (R-006); corroborated by R-005 (Charli3, an independent oracle provider reporting the same block-time and cost barrier, T-016, T-018) and by the Desk Research Summary Section 3.7 (base-layer throughput 4.5 KB/s, Leios mainnet targeted late 2026), Section 6.1 (oracle layer transition, Orcfax unfunded wind-down) and Section 8.6 (native-token transactions cost more than the simple-transfer baseline) |
| Respondent IDs | R-006 |
| Consent tier | Named |
| Confidence | Medium |
| Recommended action | Route to L2 Barrier Analysis (D1) and L2 Demand Map (D2) as a Technical finding; corroborate with further Category 2 infrastructure-provider interviews before upgrading beyond Medium |
| Gate | 1, 2, 9, 10 |
| Technical review | Item A2: partially confirmed. Layer 1 fees and latency constrain high-frequency publishing; monetising data consumption is also a business-model issue; Hydra is a partial fit, not established ([technical review](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md)). |
| Status | Final. Orcfax was not live at interview (14 August 2026). |

### Case-005

| Field | Detail |
|---|---|
| Application or workflow | [anonymised Category 2 team]’s own true-orderbook DEX prototype (single smart contract), part of [anonymised Category 2 team]’s Cardano-native platform |
| Who is blocked | [anonymised Category 2 team]; corroborated independently by Vladimir Kalnitsky, an independent Cardano tooling developer/consultant, describing the same root constraint across separate, unnamed client engagements |
| The blocker | Cardano’s UTXO and deterministic-transaction model does not support true on-chain order matching. [anonymised Category 2 team]’s orderbook DEX prototype is limited by Cardano’s throughput and is waiting on the “Leios” scaling upgrade. Vladimir Kalnitsky independently describes the identical mechanism: the enforced deterministic transaction model conflicts with order-book primitives, limiting on-chain order matching to once per transaction and forcing centralised off-chain “batcher” scripts. |
| Barrier type | Technical |
| Non-L2 test ID | T-074 (R-027, primary case); T-030, T-034 (R-007, corroborating - no single named application, so filed as corroboration rather than its own case) |
| Deployment decision pending | Yes - whether [anonymised Category 2 team]’s orderbook DEX can move beyond prototype without either a Cardano-side scaling upgrade (Leios) or an off-chain batcher/Layer 2 design |
| Evidence source | Interview transcripts, 08 Sep 2026 (R-027) and 20 Aug 2026 (R-007) |
| Respondent IDs | R-027, R-007 (corroborating) |
| Consent tier | Anonymised |
| Confidence | Medium |
| Recommended action | Route to L2 Barrier Analysis (D1) as the register’s best-evidenced Technical finding; priority candidate for the Investment Sequencing Recommendation (D8) |
| Gate | 1, 2 |
| Technical review | Item A3: partially confirmed; the reviewer declared a conflict (prior Cardano DEX experience). Constraints are genuine for high-frequency order books, but matching is not universally one per transaction and a batcher is not forced; Leios does not remove application-level matching constraints ([technical review](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md)). |
| Status | Final. The batcher and router workarounds remain in use. |

### Case-006

| Field | Detail |
|---|---|
| Application or workflow | DripDropz, a Cardano micropayment/tipping tool (Adam Dean; also builds Onboard Ninja, Veraraglyph, Buffybot Publishing, Hydra Events, Ecclesia) |
| Who is blocked | Adam Dean / DripDropz users needing minimal-cost token transfers |
| The blocker | Cardano’s minUTxO parameter requires a minimum ADA amount to accompany any native-asset transfer, making micropayments difficult without complex multi-signature workarounds to let users pay fees without receiving unwanted extra ADA |
| Barrier type | Technical |
| Non-L2 test ID | T-060 |
| Deployment decision pending | Yes - respondent is currently building multi-signature workarounds and is watching the upcoming “nested transactions” protocol feature as a potential native fix |
| Evidence source | Interview transcript, 03 Sep 2026 (R-021); mechanism independently verified against the Cardano ledger documentation (minimum ada value requirement: every output carrying native tokens must hold a minimum ada amount that scales with output size, cardano-ledger.readthedocs.io); same-respondent workaround evidence E-326 (DripDropz exists to batch claims because per-recipient minUTxO makes individual airdrops unsustainable) |
| Respondent IDs | R-021 |
| Consent tier | Named |
| Confidence | High |
| Recommended action | Route to Interoperability Requirements Register (D3) as a specific requirement (native low-cost micropayment path); monitor the “nested transactions” feature as a possible resolution |
| Gate | 2, 4 |
| Technical review | Item A5: confirmed ([technical review](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md)). |
| Status | Final. CIP-0118 Nested Transactions, which would let a batch share minimum-ADA requirements, is part of the Dijkstra hard fork, tentatively December 2026 to March 2027. |

### Case-007

| Field | Detail |
|---|---|
| Application or workflow | Smart Hatch, a poultry value-chain platform (Solomon Salifu, North Bits / Tamil Hub, northern Ghana) |
| Who is blocked | Solomon Salifu / Smart Hatch |
| The blocker | Financial - team lacks funding to acquire a needed Node.js REST API backend component despite having a validated problem, an assembled team, and initial concepts already built. Respondent separately reports an IoT/state-update capability gap for the ledger (rapid sensor-reading updates versus Cardano’s slower, costlier ledger transitions), but the deployment-blocking issue on record is specifically the unaffordable backend component. |
| Barrier type | Commercial |
| Non-L2 test ID | T-068 |
| Deployment decision pending | Yes - cannot proceed past initial concept stage without funding for the backend component |
| Evidence source | Interview transcript, 03 Sep 2026 (R-022) |
| Respondent IDs | R-022 |
| Consent tier | Named |
| Confidence | Low |
| Recommended action | Route to Cross-RFP Handoff Memo as a funding-access finding; not actionable as a Layer 2 or interoperability recommendation within this grant’s scope, consistent with the treatment already applied to Case-003 (SAPro) |
| Gate | 1, 3, 4 |
| Technical review | Not in technical review scope (non-Layer 2 case) |
| Status | Final; no further corroboration was obtained. Non-Layer 2 blocker: does not pass the D6 Layer 2 or interoperability workflow test. Retained for completeness and routed via the Cross-RFP Handoff Memo (D12) to the governance workstream: builder funding access, with Project Catalyst noted as the existing mechanism; RFP 05 (government and emerging markets entry) as secondary. |

### Case-008

| Field | Detail |
|---|---|
| Application or workflow | Wednesday marketplace, a Democratic Republic of Congo marketplace escrow platform (Olivier MWATSIMULAMO) |
| Who is blocked | Olivier MWATSIMULAMO / Wednesday marketplace |
| The blocker | Financial - lack of funding for deployment, feature development and hiring developers is the primary barrier to moving the platform from testnet to mainnet. Smart-contract integration difficulty (Haskell, playground tooling) is separately reported but classified Tooling, not the deployment-blocking barrier. |
| Barrier type | Commercial |
| Non-L2 test ID | T-008 |
| Deployment decision pending | Yes - specific, named decision: move from testnet to mainnet, currently blocked on funding |
| Evidence source | Interview transcript, 17 Aug 2026 (R-002) |
| Respondent IDs | R-002 |
| Consent tier | Named |
| Confidence | Low |
| Recommended action | Route to Cross-RFP Handoff Memo as a funding-access finding; respondent separately identifies Project Catalyst as a potential funding path, worth noting in the Investment Sequencing Recommendation (D8) as an existing ecosystem mechanism respondents are already aware of |
| Gate | 1, 3 |
| Technical review | Not in technical review scope (non-Layer 2 case) |
| Status | Final; no further corroboration was obtained. Non-Layer 2 blocker: does not pass the D6 Layer 2 or interoperability workflow test. Retained for completeness and routed via the Cross-RFP Handoff Memo (D12) to the governance workstream: builder funding access, with Project Catalyst noted as the existing mechanism; RFP 05 (government and emerging markets entry) as secondary. |

### Case-009

| Field | Detail |
|---|---|
| Application or workflow | Apex Fusion / Prime chain, a Cardano sister-chain project bridging via LayerZero (Jerry Fragiskatos, Co-Founder; former Cardano Chief Commercial Officer) |
| Who is blocked | Apex Fusion |
| The blocker | At build time, no USDC.x (Circle’s native Cardano stablecoin) existed on Cardano, so the project could not access the liquidity or stablecoin rail it needed; every other aspect of the Cardano integration was comparatively unproblematic. |
| Barrier type | Liquidity |
| Non-L2 test ID | T-076 |
| Deployment decision pending | Historical, now resolved by USDC.x’s later launch; the same gap would recur for any Cardano-native project building before a native stablecoin rail exists, so recorded as a timing-dependent case rather than a currently active blocker |
| Evidence source | Interview transcript, 07 Sep 2026 (R-030) |
| Respondent IDs | R-030 |
| Consent tier | Named |
| Confidence | Low |
| Recommended action | Route to Interoperability Value-Flow Assessment (D4) as evidence that stablecoin-rail timing directly affects Cardano project viability at build time; useful context for the Evidence Threshold Framework (D9) on how quickly resolved infrastructure gaps should be treated |
| Gate | 4, 6 |
| Technical review | Not in technical review scope (non-Layer 2 case) |
| Status | Final; historical case, resolved condition noted. Non-Layer 2 blocker: the seven-alternative test attributes it to liquidity (T-076), so it does not pass the D6 Layer 2 or interoperability workflow test. Retained for completeness and routed via the Cross-RFP Handoff Memo (D12) to RFP 03 (stablecoin liquidity incentive and activation). |

### Case-010

| Field | Detail |
|---|---|
| Application or workflow | Charli3 oracle network: node-operator-validated price-feed oracles for enterprise-grade and DeFi applications on Cardano |
| Who is blocked | Charli3 (Robert Hever) and the enterprise clients it was onboarding |
| The blocker | Block time (before Leios) and transaction costs are a significant barrier for enterprise-grade oracle and DeFi applications in the absence of Layer 2 solutions; latency has been largely managed but cost has not. The respondent cites block timing as the reason Layer 2 partner chains are needed. |
| Barrier type | Technical |
| Non-L2 test ID | T-016, T-018 |
| Deployment decision pending | Resolved negatively: Charli3 ceased Cardano-focused operations in May 2026 (E-075). The Layer 2 cost and block-time barrier is one of the enterprise-scale constraints it reports, alongside commercial and governance factors classified separately (T-079, T-082). |
| Evidence source | Interview transcript, 12 Aug 2026 (R-005), extracts E-080, E-085, E-089; corroborated by Case-004 (R-006, a separate oracle provider) and Desk Research Summary Section 3.7 |
| Respondent IDs | R-005; R-006 (corroborating) |
| Consent tier | Named |
| Confidence | Medium |
| Recommended action | Route to L2 Barrier Analysis (D1) and L2 Demand Map (D2): oracle-class cost and latency is now reported by two independent oracle providers |
| Gate | 1, 2 |
| Technical review | Item A1: partially confirmed. Valid for some high-volume workloads but overgeneralised for enterprise use; Leios improves throughput, not block-time granularity ([technical review](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md)). |
| Status | Final. Charli3 ceased Cardano-focused operations in May 2026 (E-075). E-083 (Confidential) excluded. |

### Case-011

| Field | Detail |
|---|---|
| Application or workflow | UTXOS (Emmanuel Asaolu): social-login wallet and transaction-sponsorship infrastructure built on Mesh, needing fast transactions between parties not known in advance |
| Who is blocked | UTXOS team and the builders it supports (about seven daily mainnet users) |
| The blocker | Hydra, Cardano's state-channel Layer 2, requires participating parties to be known in advance and is described as not developer-friendly. The respondent needs a decentralised, permissionless Layer 2 (state channel or rollup) in which strangers can transact. |
| Barrier type | Technical |
| Non-L2 test ID | T-013 (Partial on tooling for developer-friendliness; the permissionless requirement is not explained by any alternative) |
| Deployment decision pending | Yes: fast-transaction features wait on a permissionless Layer 2; the team published a Hydra tutorial in the meantime |
| Evidence source | Interview transcript, 21 Aug 2026 (R-004), extracts E-064, E-074; Desk Research Summary Section 3.6 (Hydra in adoption phase since February 2026) |
| Respondent IDs | R-004 |
| Consent tier | Named |
| Confidence | Medium |
| Recommended action | Route to L2 Barrier Analysis (D1) and L2 Demand Map (D2); monitor Hydra and Midgard (optimistic rollup, mainnet targeted end of 2026) |
| Gate | 1, 2, 5 |
| Technical review | Item A6: confirmed. Hydra Heads use a static participant set ([technical review](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md)). |
| Status | Final. Midgard, a permissionless optimistic rollup, is at pre-alpha testnet and targets mainnet readiness by the end of 2026. |

### Case-012

| Field | Detail |
|---|---|
| Application or workflow | 8pod (Kadiri Ahmed Tunde, Cardano Bounties team): medical crowdfunding platform refunding many contributors at once when a funding goal is not met |
| Who is blocked | Kadiri Ahmed Tunde and contributors to the 8pod crowdfunding workflow |
| The blocker | Bulk refunds to many contributors in one operation were described as 'an impossible feat on the infrastructure at the time'. |
| Barrier type | Technical |
| Non-L2 test ID | T-012 |
| Deployment decision pending | Historical: the 8pod project was a hackathon build and is not currently being deployed; the respondent states a 30 to 65 times throughput increase would 'definitely' resolve some of the transaction-processing blockers described (E-053) |
| Evidence source | Interview transcript, 20 Aug 2026 (R-003), extracts E-051, E-053 |
| Respondent IDs | R-003 |
| Consent tier | Named |
| Confidence | Low |
| Recommended action | Route to L2 Demand Map (D2) as a historical batch-settlement workflow; re-test against Leios once on mainnet |
| Gate | 1, 4 |
| Technical review | Item A8: cannot assess the historical claim ([technical review](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md)). |
| Status | Final; historical. Many recipients can be paid in one transaction within the maximum transaction size, and larger sets are batched, so this is solvable today. |

### Case-013

| Field | Detail |
|---|---|
| Application or workflow | Smart Hatch IoT data workflow (Solomon Salifu, North Bits / Tamil Hub, northern Ghana): recording continuous poultry-hatchery sensor readings on Cardano |
| Who is blocked | Solomon Salifu / Smart Hatch |
| The blocker | IoT devices need continuous, rapid state changes, but Cardano ledger transitions are slower and costlier, so putting every sensor reading on-chain is infeasible; a hybrid off-chain microcontroller design is being considered but is not implemented. Separate workflow from Case-007 (funding). |
| Barrier type | Technical |
| Non-L2 test ID | T-067 |
| Deployment decision pending | Yes: the on-chain sensor-data workflow cannot proceed as designed; hybrid off-chain architecture under consideration |
| Evidence source | Interview transcript, 03 Sep 2026 (R-022), extract E-348; corroborated by R-006 (Orcfax), which reports builders requesting real-time sensor data such as weather and temperature that current infrastructure could not serve (E-099, E-102) |
| Respondent IDs | R-022; R-006 (corroborating) |
| Consent tier | Named |
| Confidence | High |
| Recommended action | Route to L2 Demand Map (D2) as a real-world sensor-data workflow; candidate for the Investment Sequencing Recommendation (D8) |
| Gate | 1, 3 |
| Technical review | Item A7: confirmed ([technical review](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md)). |
| Status | Final. The hybrid off-chain design the builder is considering is the technically appropriate route; no roadmap item is needed. |

### Case-014

| Field | Detail |
|---|---|
| Application or workflow | Wednesday marketplace (Olivier MWATSIMULAMO, Democratic Republic of Congo): mobile access to a Cardano escrow marketplace |
| Who is blocked | Wednesday marketplace users who rely on mobile phones |
| The blocker | Access is computer-only because there is no native mobile wallet integration for Cardano. Corroborated by UTXOS (needs a React Native equivalent for Cardano wallet connect so mobile-first users do not need a laptop) and by an anonymised Category 2 platform team (fragmented, harder-to-use Cardano wallet ecosystem is a genuine access barrier). |
| Barrier type | Ecosystem |
| Non-L2 test ID | T-009 |
| Deployment decision pending | Yes: mobile access to the marketplace is blocked until a native mobile wallet integration path exists |
| Evidence source | Interview transcripts, 17 Aug 2026 (R-002, E-038), 21 Aug 2026 (R-004, E-071), 08 Sep 2026 (R-027, E-432) |
| Respondent IDs | R-002; R-004, R-027 (corroborating) |
| Consent tier | Named (R-027 Anonymised) |
| Confidence | Medium |
| Recommended action | Route to Interoperability Requirements Register (D3) under wallet UX; wallets workstream via the Cross-RFP Handoff Memo (D12) |
| Gate | 5 |
| Technical review | Item C1: partially confirmed. Mobile connectivity exists (CIP-45) but support is fragmented across wallets ([technical review](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md)). |
| Status | Final. Interoperability (wallet user experience) case. |

### Case-015

| Field | Detail |
|---|---|
| Application or workflow | Apex Fusion (Jerry Fragiskatos): cross-chain bridging between its Prime chain, Cardano and other chains |
| Who is blocked | Apex Fusion and users moving value across its bridge |
| The blocker | Cross-chain bridging robustness on Cardano is weak; the respondent expects the pending Cardano and LayerZero integration to resolve most of the gap and prioritises Chainlink and Circle's CCTP as the remaining integrations. |
| Barrier type | Ecosystem |
| Non-L2 test ID | T-107 |
| Deployment decision pending | Yes: Apex Fusion is already integrating LayerZero on its own side and is waiting on the Cardano-side integration (E-473) |
| Evidence source | Interview transcript, 07 Sep 2026 (R-030), extracts E-473, E-480, E-482; corroborated by the Desk Research Summary s4 (Wanchain Cardano bridge offline since 21 July 2026 after an exploit; Milkomeda deprecated) and Section 3.13 (Catalyst Fund 14 proposal stating Cardano lacks a tier-one omnichain messaging layer) |
| Respondent IDs | R-030 |
| Consent tier | Named |
| Confidence | Low |
| Recommended action | Route to Interoperability Value-Flow Assessment (D4) and Provider and Partner Opportunity Analysis (D5) |
| Gate | 5, 6, 8 |
| Technical review | Item B2: partially confirmed. LayerZero endpoint infrastructure is live with wider rollout phased; Chainlink is not integrated; Circle's CCTP is effectively available through USDCx ([technical review](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md)). |
| Status | Final. Interoperability (asset bridging and message passing) case. Confidence held at Low because provider-side findings are not presented above Low while Category 3 access is below its lower target. |

**5. Limitations**

- **Category 3 access.** One bridge, interoperability or wallet provider was interviewed against a committed range of 5 to 8. This was flagged as the principal access risk in the Milestone 1 Stakeholder Access Status Update and raised with the Committee. Respondents from other categories have not been substituted to fill the gap; provider-side cases are held at Low confidence and the shortfall is reported as a research limitation.
- **Single-source cases.** Cases resting on one respondent are held at Low unless the technical review confirmed the claim.
- **Time sensitivity.** The technical review links the remaining technical cases to specific roadmap items: Ouroboros Leios and CIP-0118 Nested Transactions arrive with the Dijkstra hard fork, tentatively December 2026 to March 2027 and subject to governance; Midgard targets mainnet readiness by the end of 2026. None is yet on mainnet.
- **Historical cases.** Case-009 and Case-012 describe conditions at build time and are recorded as timing-dependent, not as currently active blockers.

**6. AI Use Disclaimer**

AI tools were used in transcription, extraction, classification and drafting of the evidence behind this register, as logged in the AI Tool Disclosure Log (grant clause 4.2). The lead researcher has reviewed this work. Given the number of text-based extracts involved, a manual review may not catch every issue. Feedback from any reader is welcome, and the register will be updated, or defended where necessary.

**7. Supporting Evidence**

The extracts, Non-Layer 2 tests and consent tiers cited in each case are published in the [redacted Interview Analysis Workbook](./CPC260015_M4_InterviewAnalysisWorkbookRedacted_v2_11Oct2026.md); the Milestone 3 classification of every test is published in Section 9 of the same workbook; and the technical review is published as the [Technical Review of Milestone 3 Claims](https://github.com/Nextrium/cpc-product-website/blob/milestone-3-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M3_TechnicalReview_v1_11Oct2026.md).

**Document Version History**

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 9 October 2026 | Abdulbasit Adigun Abdulrahman | Initial register for Milestone 2: fifteen cases, eleven passing the Layer 2 or interoperability workflow test, four routed to adjacent RFPs and workstreams (one to RFP 05, two to the governance workstream with RFP 05 as secondary, one to RFP 03) |
| 2.0 | 11 October 2026 | Abdulbasit Adigun Abdulrahman | Final register for Milestone 4: Milestone 3 classification, technical review outcomes and status checks applied (Section 2) |
