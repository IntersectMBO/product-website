---
title: "Early Demand-Signal Review - NexTrium Milestone 2 (CPC-26-0015)"
sidebar_label: "Early Demand-Signal Review"
---

**NEXTRIUM**

Global Innovations Ltd

**Early Demand-Signal Review**

*What the Milestone 2 interviews show about Layer 2 and interoperability demand, before full analysis*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D-M2-02                                                                         |
| **Version**               | 1.0                                                                             |
| **Date**                  | 9 October 2026                                                                  |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This document is the Milestone 2 deliverable "early demand-signal review" under Appendix A of the grant agreement. It reports what the primary research shows so far about Decision Gate 1 (which applications are actually blocked by missing Layer 2 capability) and Decision Gate 4 (which applications waiting on Layer 2 represent meaningful demand at scale). It distinguishes adoption signals from cosmetic signals and gives scale only as indicative ranges. It is an early review: full classification, the L2 Demand Map and the Barrier Analysis follow at Milestone 3.

## 1. Evidence Base

**1.1 Interviews conducted**

| Category | Respondents | Committed range (Proposal Section 5) | Position |
|---|---|---|---|
| 1. African informal-economy builders and operators on Cardano | 15 | 15 to 20 | Within range |
| 2. Infrastructure, tooling, identity and application protocol teams | 5 | 6 to 10 | One below lower bound |
| 3. Bridge, interoperability and wallet providers | 1 | 5 to 8 | Four below lower bound; see Section 6 |
| 4. Non-Cardano and negative-case respondents | 10 | 4 to 6 | Four above upper bound |
| **Total** | **31** | **30 to 44** | **Within the committed total** |

Interviews ran from 11 August to 20 September 2026. Category 4 exceeds its range because more builders who chose other chains accepted interviews; that surplus has not been used to stand in for Category 2 or 3 evidence, because the categories answer different decision gates.

**1.2 Evidence used for this review**

All figures come from the Milestone 2 Interview Analysis Workbook (redacted version published alongside this review):

- 500 extracts across 31 respondents, including 45 adoption signals, 12 capability gaps, 82 requirements and 17 cost or pricing statements.
- 103 seven-alternative Non-Layer 2 tests, covering every extract classified as a Blocker claim.
- The 15-case Initial Blocked-Demand Case Register (D-M2-01).

**1.3 Adoption signal versus cosmetic signal**

| Signal type | Test applied | Example |
|---|---|---|
| **Adoption signal** | The respondent ties a capability to a pending or past decision: a deployment, migration, shutdown, build choice or payment | Charli3 ceased Cardano-focused operations in May 2026 (E-075); Wednesday marketplace cannot offer mobile access (E-038) |
| **Cosmetic signal** | Sentiment, awareness or a general preference with no decision attached | "A throughput increase would help" with no named workflow (E-213, E-253) |

Self-reported demand alone is never treated as an adoption signal.

## 2. Gate 1: Which Applications Are Actually Blocked by Missing Layer 2 Capability

**2.1 Finding: genuine Layer 2 blockers exist, but they are narrow and concentrated in infrastructure, not in informal-economy applications.** \[Confidence: Medium\]

Of 103 Non-Layer 2 tests, 15 (15%) found no non-Layer 2 explanation (classified Technical). They are not evenly spread:

| Category | Tests | Classified Technical (no alternative explains it) | Share |
|---|---|---|---|
| 1. Informal-economy builders | 39 | 3 | 8% |
| 2. Infrastructure and tooling | 41 | 11 | 27% |
| 3. Bridge and wallet providers | 7 | 0 | 0% |
| 4. Non-Cardano respondents | 16 | 1 (concerns another chain) | 6% |

The blocked workflows with a Layer 2 cause, each tied to a named application (D-M2-01):

| Workflow | Case | Evidence |
|---|---|---|
| Lower-latency and derivative oracle price feeds | Case-004, Case-010 | Two independent oracle providers (R-006, R-005); Desk Research Summary Section 3.7 |
| On-chain order matching for order-book DEXs | Case-005 | Two respondents (R-027, R-007): deterministic transactions force off-chain batchers |
| Micropayments carrying native tokens | Case-006 | R-021; minimum-ada rule verified in ledger documentation |
| Fast transactions between parties not known in advance | Case-011 | R-004: Hydra requires known parties |
| Continuous sensor-data recording (IoT) | Case-013 | R-022; R-006 reports builder requests for real-time sensor data |
| Bulk refunds to many contributors | Case-012 | R-003; historical |

**2.2 Finding: for most informal-economy builders the binding constraint is not Layer 2.** \[Confidence: Medium\]

In Category 1, the seven-alternative test attributes blockers mainly to tooling (10 tests), commercial and funding constraints (8), ecosystem gaps (5), compliance (4) and liquidity (3). Respondents state this directly:

- Asked whether a 30 to 65 times base-layer throughput increase would change anything, 8 of the 16 respondents who addressed base-layer throughput said it would not resolve their actual blocker or did not apply to them, citing funding, mobile access, regulation or visibility instead (E-016, E-044, E-137, E-232, E-272, E-365, E-379, E-490).
- Regulatory constraints blocked or reshaped deployment for several respondents: a central bank prohibition on crypto transactions (E-011), bank-licensing costs that paused a live escrow product (Case-003), and company-registration and central-bank rules that pushed one team onto third-party on-ramps (E-415).

**2.3 Finding: interoperability gaps are as decision-relevant as Layer 2 gaps.** \[Confidence: Medium for wallet access; Low for bridging\]

- **Mobile wallet access** blocks a named marketplace from reaching phone-first users (Case-014). Two further respondents report the same gap (E-071, E-432).
- **Bridging robustness** is weak and is waiting on the Cardano and LayerZero integration (Case-015). This is held at Low because Category 3 evidence rests on one respondent.

## 3. Gate 4: Which Applications Waiting on Layer 2 Represent Meaningful Demand at Scale

**3.1 Finding: no application waiting on Layer 2 has yet demonstrated demand at scale.** \[Confidence: Medium\]

Indicative scale of the applications in the register, as self-reported:

| Application stage | Indicative range | Examples |
|---|---|---|
| Live on mainnet | Single-digit daily users where a figure was given | UTXOS, about 7 daily users (E-062); DripDropz, live since 2022 (E-313) |
| Testnet or pilot | Tens to low hundreds of users | Cardano Bounties, about 150 testnet users (E-047) |
| Concept or pre-launch | No users yet | Smart Hatch (E-349); several Category 1 respondents still in development (E-228) |
| Infrastructure providers | Paying-client base shrinking | Orcfax lost its last paying client (E-100); Charli3 exited Cardano (E-075) |

These are indicative only, rest on self-report, and assume no change in base-layer throughput before Leios reaches mainnet (targeted late 2026).

**3.2 Finding: willingness to pay is conditional and subsidy-dependent.** \[Confidence: Medium\]

- Builders say they would pay for infrastructure only after reaching a user threshold or revenue (E-221, E-234, E-260, E-273, E-406). One respondent sets the threshold at 500 active users (E-234).
- Two infrastructure providers report that most builders do not pay once subsidies end (E-115, E-119). Another says his products would have to charge "about a thousand times more" to be sustainable at current scale (E-333).
- One builder confirmed he would keep paying commercial rates for a reliable oracle (E-073).

Together, these point to infrastructure economics as a constraint that sits alongside, and in several cases ahead of, Layer 2 capability.

## 4. Additional Signals

**4.1 Access channels for basic-phone and offline users** \[Confidence: Medium\]

The broadest signal from Category 1 concerns reaching users without smartphones or internet, not throughput:

- Wanted or planned: R-001 (E-022), R-002 (E-038, E-041), R-016 (E-237), R-018 (E-276), R-022 (E-351).
- Already delivered at the application layer: R-017 serves farmers via USSD codes (E-256), and R-031 reports full USSD access on basic keypad phones before its regulatory pause (E-489).
- Not needed for the target audience: R-003, R-024, R-025 (E-055, E-385, E-402).

**Flagged for the lead researcher:** E-256 and E-489 show USSD access achieved on Cardano through application-layer abstraction. This qualifies the Milestone 1 Desk Research Summary finding (Section 3.13) that no Cardano wallet or payment interface supporting USSD access was identified. We report it here and will resolve it at Milestone 3, rather than amend the Milestone 1 summary now. The same evidence provides partial independent triangulation for Case-002 (phone-number-addressed distribution).

**4.2 Negative-case signal: chains are chosen for support and community, not for Layer 2 capability** \[Confidence: Medium\]

Category 4 respondents chose other chains mainly for ecosystem support, sponsorship, community size and ease of deployment. They name the following as conditions for considering Cardano:

- funding or partnership (E-144, E-417, E-454)
- demonstrated demand and trading volume (E-158)
- updated, AI-compatible documentation (E-203)
- cross-chain interoperability (E-304)
- community attention (E-292)

None names a Layer 2 capability as the deciding factor.

## 5. Preliminary Answers at Milestone 2

| Gate | Preliminary answer | Confidence |
|---|---|---|
| 1 | A narrow set of infrastructure workflows is blocked by Layer 2 capability: oracle latency and cost, order matching, token micropayments, permissionless fast channels and IoT data. Informal-economy applications are mostly blocked by non-Layer 2 causes. | Medium |
| 4 | No application waiting on Layer 2 yet demonstrates demand at scale; user bases are small and willingness to pay is conditional on subsidy or scale. | Medium |

Both answers are early and are tested further in the Milestone 3 L2 Demand Map (D2) and Barrier Analysis (D1).

## 6. Limitations

- **Category 3.** One bridge, interoperability or wallet provider was interviewed against a committed 5 to 8. This risk was disclosed in the Milestone 1 Stakeholder Access Status Update and raised in writing with the Committee before primary research. It is reported here as found. Respondents from other categories have not been substituted to answer Category 3 questions. Gates 6 to 9, for which Category 3 is a primary source (Research Design Document Section 1.1), are held at Low confidence.
- **Category 2** is one interview below its lower bound.
- **Self-report.** User numbers and willingness to pay are as stated by respondents and have not been independently verified.
- **Source quality.** Two interviews (R-015, R-016) come from structured notes rather than full transcripts, and their exact interview dates are not recorded. Most other interviews use automated transcripts, which may contain errors.
- **Time sensitivity.** Leios mainnet (targeted late 2026) may move some Layer 2 cases to Layer 1.

## 7. AI Use Disclaimer

AI tools were used in transcription, extraction, classification and drafting, as logged in the AI Tool Disclosure Log (grant clause 4.2). The lead researcher has reviewed this work. Given the number of text-based extracts involved, a manual review may not catch every issue. Feedback from any reader is welcome, and this review will be updated, or defended where necessary.

## 8. Supporting Evidence

- Initial Blocked-Demand Case Register: [CPC260015_M2_BlockedDemandCaseRegister_v1_09Oct2026.md](./CPC260015_M2_BlockedDemandCaseRegister_v1_09Oct2026.md)
- Redacted Interview Analysis Workbook (all cited extract and test IDs): [CPC260015_M2_InterviewAnalysisWorkbookRedacted_v14_09Oct2026.md](./CPC260015_M2_InterviewAnalysisWorkbookRedacted_v14_09Oct2026.md)

## Document Version History

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 9 October 2026 | Abdulbasit Adigun Abdulrahman | Initial early demand-signal review for Milestone 2 |
