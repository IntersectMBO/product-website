---
title: "Initial Blocked-Demand Case Register - NexTrium Milestone 2 (CPC-26-0015)"
sidebar_label: "Blocked-Demand Case Register"
---

**NEXTRIUM**

Global Innovations Ltd

**Initial Blocked-Demand Case Register**

*Documented applications and workflows waiting on Layer 2 or interoperability capability*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D-M2-01 (Proposal D6, initial version)                                          |
| **Version**               | 1.0                                                                             |
| **Date**                  | 9 October 2026                                                                  |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This document is the Milestone 2 deliverable "Initial blocked-demand case register (minimum 8 to 15 cases)" under Appendix A of the grant agreement. It records fifteen documented cases in which a named application or workflow is blocked, or was blocked, by a Layer 2 or interoperability constraint, together with three cases retained for completeness whose blockers are not Layer 2 or interoperability problems and are routed to adjacent RFPs. The register is the initial version; it is finalised at Milestone 4.

**1. Basis and Method**

**1.1 Contract and proposal requirements**

| Requirement | Source | How this register meets it |
|---|---|---|
| Minimum 8 to 15 cases | Agreement Appendix A, Milestone 2 | 15 cases recorded; 12 pass the Layer 2 or interoperability workflow test |
| Our validation cases VAL-003 and VAL-006 serve as Cases 1 and 2, disclosed as conflicted evidence and starting at Low confidence, upgradeable following independent review and builder triangulation | Proposal Section 13, D6 | Case-001 (VAL-003) and Case-002 (VAL-006); Case-001 upgraded to Medium following the Milestone 1 Independent Technical Review |
| Each case distinguishes named, confidential and anonymised evidence | Proposal Section 13, D6 | Consent tier recorded per case; anonymised respondents are identified by category only |
| Each case includes blocker, deployment decision pending, evidence source and confidence | Proposal Section 13, D6 | Fields 4, 7, 8 and 11 of every case |
| Every case passes the relevant Layer 2 or interoperability workflow test | Proposal Section 13, D6 | Non-Layer 2 Test ID recorded per case; three cases that do not pass are labelled and routed |
| Does not use vague "builders say" claims | Proposal Section 13, D6 | Every case cites the extract IDs and interview date it rests on |

**1.2 How a case enters the register**

1. Each interview is extracted into the Evidence Extract, one row per distinct statement (Stage 1).
2. Every statement of type "Blocker claim" passes the seven non-Layer 2 alternatives test: liquidity, wallet support, bridge or provider access, tooling, commercial uncertainty, compliance and partner access (Stage 2). A blocker is a Layer 2 blocker only where all seven are No.
3. A case is recorded only where the blocker ties to a named application or workflow. General infrastructure complaints that tie to no named workflow are routed to the Cross-RFP Handoff Memo (D12) instead.
4. Confidence follows the project rubric: High for primary documentation, on-chain records or first-hand testing; Medium where corroborated across more than one independent source, including the Milestone 1 Desk Research Summary, or independently verified; Low for single-source or untriangulated evidence, and for evidence from our own validation work until it is independently reviewed.

**1.3 Evidence separation**

- **Our own validation work:** Case-001 and Case-002 come from our own validation exercises (VAL-003, VAL-006). Because we are both the researcher and the builder in these cases, we disclose them as conflicted evidence and present them separately from independent respondent evidence.
- **Funding-seeking respondents:** R-002 and R-022 are flagged in the Interview Register as seeking funding. Cases resting on their evidence (Case-007, Case-008, Case-013, Case-014) are labelled below so they can be read apart from independent demand evidence.
- **Provider-side confidence cap:** Category 3 access (1 interview against a committed 5 to 8) is below its lower target. Per the Milestone 1 Stakeholder Access Status Update (Section 4.2), provider-side findings are not presented above Low; Case-015 is capped accordingly.

**1.4 Routed cases**

Case-003 (SAPro), Case-007 (Smart Hatch funding) and Case-008 (Wednesday marketplace funding) are real, named blockers but are compliance or funding problems, not Layer 2 or interoperability problems. They are retained so the register reflects what respondents reported, and are routed through the Cross-RFP Handoff Memo (D12) to RFP 6 (government and emerging market entry). They are not counted toward the Layer 2 or interoperability case total.

**1.5 Funding-seeking label per case**

| Case | Respondent flagged as funding-seeking |
|---|---|
| Case-007, Case-013 | Yes (R-022) |
| Case-008, Case-014 | Yes (R-002; Case-014 is corroborated by R-004 and R-027, neither flagged) |
| All other cases | No |


## Register Summary

| Case | Application or workflow | Barrier type | Confidence | Consent | Passes L2 / interoperability test |
|---|---|---|---|---|---|
| Case-001 | Decentralised identity on Cardano | Tooling | Medium | Named | Yes |
| Case-002 | Last-mile stablecoin distribution | Ecosystem | Low | Named | Yes |
| Case-003 | SAPro - escrow platform for African informal-market buyers and sellers | Compliance | Low | Named | No, routed (D12) |
| Case-004 | Orcfax oracle data-publication service | Technical | Medium | Named | Yes |
| Case-005 | [anonymised Category 2 team]’s own true-orderbook DEX prototype | Technical | Medium | Anonymised | Yes |
| Case-006 | DripDropz, a Cardano micropayment/tipping tool | Technical | Medium | Named | Yes |
| Case-007 | Smart Hatch, a poultry value-chain platform | Commercial | Low | Named | No, routed (D12) |
| Case-008 | Wednesday marketplace, a Democratic Republic of Congo marketplace escrow platform | Commercial | Low | Named | No, routed (D12) |
| Case-009 | Apex Fusion / Prime chain, a Cardano sister-chain project bridging via LayerZero | Liquidity | Low | Named | Yes |
| Case-010 | Charli3 oracle network | Technical | Medium | Named | Yes |
| Case-011 | UTXOS | Technical | Low | Named | Yes |
| Case-012 | 8pod | Technical | Low | Named | Yes |
| Case-013 | Smart Hatch IoT data workflow | Technical | Medium | Named | Yes |
| Case-014 | Wednesday marketplace | Ecosystem | Medium | Named (R-027 Anonymised) | Yes |
| Case-015 | Apex Fusion | Ecosystem | Low | Named | Yes |

## Case Detail

### Case-001

| Field | Detail |
|---|---|
| Application or workflow | Decentralised identity on Cardano: DID publication, W3C Verifiable Credential issuance, and independent credential verification using Cardano as sole source of truth (Zivana Protocol identity pipeline) |
| Who is blocked | NexTrium / Zivana Protocol (our own validation exercise); by extension any team building portable, verifiable-credential identity on Cardano |
| The blocker | Nine undocumented engineering and configuration issues in the Hyperledger Identus stack on Cardano preprod, now resolved and published. Secondary barrier: full end-to-end credential issuance requires running a complete Cardano node, a meaningful infrastructure-cost barrier for African builders and small teams even though the technical pipeline is confirmed functional. |
| Barrier type | Tooling |
| Non-L2 test ID | N/A - our own validation evidence (Proposal Section 13), which predates the interview-derived Non-L2 Test framework; barrier type assigned directly from the D-M1-02/D-M1-03 Appendix B classification |
| Deployment decision pending | Yes - pipeline confirmed functional; remaining condition is resolving the credential-issuance node-cost barrier before broader African-builder deployment |
| Evidence source | D-M1-02 Preliminary VAL-Case Evidence Set v1.1 (VAL-003); independently reproduced by Samir Idris, D-M1-03; github.com/zivana-labs/zivana-validation/tree/main/identus-setup; on-chain DID did:prism:1e99b05986e260d569eea85c181af04fb8f7e437d337677b609b79e260fd3292, tx f6becc5272cf26a328c5d822390a5fee68a769bc23b26e3fcf11f8e075688389, block 4,894,745 |
| Respondent IDs | N/A - our own validation work, not a respondent interview |
| Consent tier | Named |
| Confidence | Medium |
| Recommended action | Improve documentation |
| Gate | 1,5 |
| Status | Documented - Case 1 of 2 committed in Proposal Section 13 (D6): VAL-003 and VAL-006 serve as Cases 1 and 2. Confidence upgraded following the independent technical review of our validation work (D-M1-03). |

### Case-002

| Field | Detail |
|---|---|
| Application or workflow | Last-mile stablecoin distribution: covenant payment splitting and delivery to informal-economy recipients via phone-number-based rails at sub-cent fees (Zivana Protocol distribution primitive) |
| Who is blocked | NexTrium / Zivana Protocol (our own validation exercise); by extension any Cardano builder needing phone-number-addressed, sub-cent last-mile stablecoin distribution |
| The blocker | Cardano currently has no phone-number-based stablecoin distribution rail with sub-cent fees comparable to Celo MiniPay. Covenant distributions route to Celo MiniPay, an Ethereum Layer 2 protocol, instead of remaining on Cardano. Documented as an architectural decision, not a preference. |
| Barrier type | Ecosystem |
| Non-L2 test ID | N/A - our own validation evidence (Proposal Section 13), which predates the interview-derived Non-L2 Test framework |
| Deployment decision pending | Yes - distributions remain routed off Cardano until a comparable native or bridged capability exists |
| Evidence source | D-M1-02 Preliminary VAL-Case Evidence Set v1.1 (VAL-006); github.com/zivana-labs/zivana-validation/tree/main/celo-minipay; on-chain Celo Sepolia deploy/verify/approve/deposit/distribute cycle |
| Respondent IDs | N/A - our own validation work, not a respondent interview |
| Consent tier | Named |
| Confidence | Low |
| Recommended action | Route to the Cross-RFP Handoff Memo for the RFP 02 stablecoin liquidity workstream; prioritise independent builder and provider triangulation in M2/M3 to determine whether this gap is broadly shared across the African informal-economy builder population or specific to Zivana Protocol’s architecture |
| Gate | 1, 4, 6, 7 |
| Status | Documented - Case 2 of 2 committed in Proposal Section 13 (D6). Low confidence, pending M2/M3 triangulation; not yet upgraded. |

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
| Status | Documented - awaiting corroboration from further Category 1 respondents before this pattern is generalised Renumbered from Case-001 to Case-003 on 22 Sep 2026 so VAL-003 and VAL-006 occupy Cases 1 and 2 per Proposal Section 13 (D6), which commits them to that position as the register’s starting cases from our own validation work. Non-Layer 2 blocker: does not pass the D6 Layer 2 or interoperability workflow test. Retained for completeness and routed via the Cross-RFP Handoff Memo (D12) to RFP 6 (government and emerging market entry): regulated bank-service integration and licensing in Nigeria (09 Oct 2026). |

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
| Status | Documented from existing interview evidence; ready for M3 barrier classification |

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
| Status | Documented - strongest Technical case in the register; ready for M3 |

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
| Confidence | Medium |
| Recommended action | Route to Interoperability Requirements Register (D3) as a specific requirement (native low-cost micropayment path); monitor the “nested transactions” feature as a possible resolution |
| Gate | 2, 4 |
| Status | Documented; ready for M3 |

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
| Status | Documented; awaiting corroboration from further Category 1 respondents before generalising the funding-access pattern Non-Layer 2 blocker: does not pass the D6 Layer 2 or interoperability workflow test. Retained for completeness and routed via the Cross-RFP Handoff Memo (D12) to RFP 6 (government and emerging market entry): builder funding access, with Project Catalyst noted as the existing mechanism (09 Oct 2026). |

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
| Status | Documented; awaiting corroboration Non-Layer 2 blocker: does not pass the D6 Layer 2 or interoperability workflow test. Retained for completeness and routed via the Cross-RFP Handoff Memo (D12) to RFP 6 (government and emerging market entry): builder funding access, with Project Catalyst noted as the existing mechanism (09 Oct 2026). |

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
| Status | Documented; historical case, resolved condition noted |

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
| Status | Documented from existing interview evidence; ready for M3 barrier classification. E-083 (Confidential) excluded. |

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
| Confidence | Low |
| Recommended action | Route to L2 Barrier Analysis (D1) and L2 Demand Map (D2); monitor Hydra and Midgard (optimistic rollup, mainnet targeted end of 2026) |
| Gate | 1, 2, 5 |
| Status | Documented; single source, awaiting corroboration |

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
| Status | Documented; historical case, recorded as timing-dependent |

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
| Confidence | Medium |
| Recommended action | Route to L2 Demand Map (D2) as a real-world sensor-data workflow; candidate for the Investment Sequencing Recommendation (D8) |
| Gate | 1, 3 |
| Status | Documented; ready for M3 |

### Case-014

| Field | Detail |
|---|---|
| Application or workflow | Wednesday marketplace (Olivier MWATSIMULAMO, Democratic Republic of Congo): mobile access to a Cardano escrow marketplace |
| Who is blocked | Wednesday marketplace users who rely on mobile phones |
| The blocker | Access is computer-only because there is no native mobile wallet integration for Cardano. Corroborated by UTXOS (needs a React Native equivalent for Cardano wallet connect so mobile-first users do not need a laptop) and by an anonymised Category 2 platform team (fragmented, harder-to-use Cardano wallet ecosystem is a genuine access barrier). |
| Barrier type | Ecosystem |
| Non-L2 test ID | T-106 |
| Deployment decision pending | Yes: mobile access to the marketplace is blocked until a native mobile wallet integration path exists |
| Evidence source | Interview transcripts, 17 Aug 2026 (R-002, E-038), 21 Aug 2026 (R-004, E-071), 08 Sep 2026 (R-027, E-432) |
| Respondent IDs | R-002; R-004, R-027 (corroborating) |
| Consent tier | Named (R-027 Anonymised) |
| Confidence | Medium |
| Recommended action | Route to Interoperability Requirements Register (D3) under wallet UX; wallets workstream via the Cross-RFP Handoff Memo (D12) |
| Gate | 5 |
| Status | Documented; interoperability (wallet UX) case; ready for M3 |

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
| Status | Documented; interoperability (asset bridging and message passing) case; ready for M3 Confidence capped at Low per the Milestone 1 Stakeholder Access Status Update Section 4.2 commitment: provider-side findings are not presented at Medium or High while Category 3 access (1 interview) is below its lower target (5). |

## Limitations

- **Category 3 access.** One bridge, interoperability or wallet provider was interviewed against a committed range of 5 to 8. This was flagged as the principal access risk in the Milestone 1 Stakeholder Access Status Update and raised with the Committee. Respondents from other categories have not been substituted to fill the gap; provider-side cases are held at Low confidence and the shortfall is reported as a research limitation.
- **Single-source cases.** Cases resting on one respondent without documentary corroboration are held at Low and will be upgraded only if corroborated in Milestone 3.
- **Time sensitivity.** Ouroboros Leios targets mainnet in late 2026 at 30 to 65 times current base-layer throughput (Desk Research Summary, Section 3.7). Technical cases that depend on base-layer throughput (Case-004, Case-005, Case-010, Case-012, Case-013) are re-tested against that change before the final register at Milestone 4.
- **Historical cases.** Case-009 and Case-012 describe conditions at build time and are recorded as timing-dependent, not as currently active blockers.

## AI Use Disclaimer

AI tools were used in transcription, extraction, classification and drafting of the evidence behind this register, as logged in the AI Tool Disclosure Log (grant clause 4.2). The lead researcher has reviewed this work. Given the number of text-based extracts involved, a manual review may not catch every issue. Feedback from any reader is welcome, and the register will be updated, or defended where necessary.

## Supporting Evidence

The extracts, Non-Layer 2 tests and consent tiers cited in each case are published in the redacted Interview Analysis Workbook: [CPC260015_M2_InterviewAnalysisWorkbookRedacted_v14_09Oct2026.md](./CPC260015_M2_InterviewAnalysisWorkbookRedacted_v14_09Oct2026.md).

## Document Version History

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 9 October 2026 | Abdulbasit Adigun Abdulrahman | Initial register for Milestone 2: fifteen cases, twelve passing the Layer 2 or interoperability workflow test, three routed to RFP 6 |
