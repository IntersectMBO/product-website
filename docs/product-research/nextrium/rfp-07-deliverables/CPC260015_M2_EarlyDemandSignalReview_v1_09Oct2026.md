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
- 102 distinct respondent seven-alternative Non-Layer 2 tests covering every extract classified as a Blocker claim. The workbook contains 105 rows in total: 102 distinct respondent tests, 2 applicant-validation tests T-108 and T-109, and 1 labelled duplicate row T-106 kept for auditability and excluded from analysis counts.
- The 15-case Initial Blocked-Demand Case Register (D-M2-01).

**1.3 Adoption signal versus cosmetic signal**

| Signal type | Test applied | Example |
|---|---|---|
| **Adoption signal** | The respondent ties a capability to a pending or past decision: a deployment, migration, shutdown, build choice or payment | Charli3 ceased Cardano-focused operations in May 2026 (E-075); Wednesday marketplace cannot offer mobile access (E-038) |
| **Cosmetic signal** | Sentiment, awareness or a general preference with no decision attached | "A throughput increase would help" with no named workflow (E-213, E-253) |

Self-reported demand alone is never treated as an adoption signal.

## 2. Gate 1: Which Applications Are Actually Blocked by Missing Layer 2 Capability

**2.1 Finding: genuine Layer 2 blockers exist, but they are narrow and concentrated in infrastructure, not in informal-economy applications.** \[Confidence: Medium\]

Of 102 distinct respondent Non-Layer 2 tests, 15 (15%) found no non-Layer 2 explanation (classified Technical). They are not evenly spread:

| Category | Tests | Classified Technical (no alternative explains it) | Share |
|---|---|---|---|
| 1. Informal-economy builders | 38 | 3 | 8% |
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

In Category 1, the 38 distinct seven-alternative tests attribute blockers to tooling with 10 tests, commercial and funding constraints with 7 standalone tests plus 1 dual commercial and compliance test, ecosystem gaps with 4, compliance with 3 standalone tests plus the 1 dual commercial and compliance test, UX with 3, coordination with 3, liquidity with 3, technical with 3, and unknown with 1. Respondents state this directly:

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

**Note carried to Milestone 3:** E-256 and E-489 show USSD access achieved on Cardano through application-layer abstraction. This qualifies the Milestone 1 Desk Research Summary finding (Section 3.13) that no Cardano wallet or payment interface supporting USSD access was identified. We report it here and will resolve it at Milestone 3, rather than amend the Milestone 1 summary now. The same evidence provides partial independent triangulation for Case-002 (phone-number-addressed distribution).

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

- **Category 3.** One bridge, interoperability, or wallet provider was interviewed against a committed 5 to 8, with zero wallet providers. This risk was disclosed upfront in Proposal Section 5, Risk 8, and the Milestone 1 Stakeholder Access Status Update, and raised in writing to the Cardano Product Committee by email on 13 August 2026 under subject "Re: CPC-26-0015 progress and milestone acceptance form", where we also requested Committee help with contact introductions. It is reported here as found. Surplus Category 4 interviews, 10 against 4 to 6, have not been substituted to answer Category 3 questions. Gates 6 to 9, for which Category 3 is a primary source under Research Design Document Section 1.1, are held at Low confidence.
- **Category 2.** Five infrastructure, tooling, and protocol teams were interviewed against a committed 6 to 10, one below the lower bound.
- **Self-report.** User numbers and willingness to pay are as stated by respondents and have not been independently verified.
- **Source quality.** Two interviews, R-015 and R-016, come from structured notes rather than full transcripts, and their exact interview dates are not recorded. Most other interviews use automated transcripts, which may contain errors.
- **Time sensitivity.** Leios mainnet, targeted for late 2026, may move some Layer 2 cases to Layer 1.

### 6.1 Coverage Shortfall Impact on Decision Gates and Downstream Deliverables

Under Proposal Section 5, Risk 8, and Grant Agreement Change Control principles, the table below records which research questions and downstream deliverables are limited by the Category 3 shortfall of 1 against 5 to 8 and the Category 2 shortfall of 5 against 6 to 10:

| Affected Gate or Scope Area | Affected Downstream Deliverables | What Can Still Be Answered | What Cannot Be Adequately Answered Without Additional Provider Interviews | Confidence Cap Applied |
|---|---|---|---|---|
| Gate 5: Interoperability features, wallet UX sub-area | D3 Interoperability Requirements Register | Builder-side mobile and basic-phone wallet gaps from Category 1 and Category 2 evidence plus M1 desk research | Wallet-provider engineering constraints, fee and collateral handling roadmaps, and commercial incentives, since Category 3 Variant B was unused with zero wallet providers interviewed | Medium overall for Gate 5; Low for wallet-provider side |
| Gate 6: Net-positive interoperability pathways | D4 Interoperability Value-Flow Assessment | Preliminary pathway classifications informed by M1 desk research, 1 Category 3 respondent R-030, Category 2 infrastructure teams, and Category 4 comparisons | Direct multi-provider validation of inflow and retention mechanics across major bridges and stablecoin issuers | Held at Low |
| Gate 7: Asymmetric dependency and value-leakage risk | D4 Value-Flow Assessment; D7 Negative-Case Summary | Builder-side and non-Cardano negative-case evidence from 10 Category 4 interviews plus M1 desk evidence such as Wanchain and Celo MiniPay | Direct bridge-provider and wallet-provider corroboration of outflow and retention dynamics | Held at Low |
| Gate 8: Partner prioritisation | D5 Provider and Partner Opportunity Analysis; D8 Investment Sequencing | Desk-verified status and builder-reported demand for shortlisted providers | First-hand commercial terms, integration effort estimates, and partnership readiness from most shortlisted bridge and wallet teams | Held at Low |
| Gate 9: Why providers do or do not prioritise Cardano | D5 Provider Analysis; D7 Negative-Case Summary | Strong Category 2 oracle and tooling evidence and Category 4 non-Cardano evidence on developer and commercial friction, plus 1 Category 3 interview | Direct multi-provider accounts from bridge, omnichain-messaging, stablecoin, and Cardano wallet teams | Held at Low |
| Gates 1 to 4: minor Category 2 shortfall, 5 vs. 6 | D1 Barrier Analysis; D2 Demand Map | Substantively covered by 15 Category 1 interviews, 5 Category 2 interviews covering 2 oracle providers, tooling, and L2-adjacent builders, and M1 technical validation | Direct interviews with Cardano L2 rollup teams such as Midgard and zkFold and Identus maintainers remain uncompleted | Medium for Gates 1 to 4, with the named L2-builder gap disclosed |

**Resolution path:** NexTrium requests explicit Committee agreement to proceed with the achieved 31-interview composition under Proposal Section 5 and Risk 8, with Gates 6 to 9 capped at Low confidence and zero substitution from Category 4. If the Committee instead prefers closing the remaining Category 2 and Category 3 shortfalls and can provide outreach support or introductions to unresponsive provider teams, NexTrium will gladly conduct the additional interviews.

### 6.2 Category 2 and Category 3 Outreach and Non-Response Summary

Sources: Gmail Sent and Inbox for the research mailbox, the Consent Tracking Register, calendar invitations, the interview-notes folder, and direct X outreach by the lead researcher. Dates are UTC. Organisation and project names only are published; individual names, email addresses, and social handles are withheld under Proposal Section 12.

**Earlier notice to the Cardano Product Committee:** Category 3 was first flagged as our weakest access category in Deliverable D-M1-06 on 5 August 2026 and in the Milestone 1 submission on 7 August 2026. On 13 August 2026, the lead researcher emailed the Cardano Product Committee under subject "Re: CPC-26-0015 progress and milestone acceptance form", reporting that Category 2 responses were mixed and Category 3 had only one declined response so far, stating that thin access would result in reduced-confidence reporting rather than category substitution, and asking whether the Committee could share contact introductions for Categories 2 and 3.

**Category 3: Bridges, Interoperability and Wallets**

Summary: 14 organisations approached, covering 8 of the 12 M1 planned candidates plus 6 additional contacts; 22 logged attempts across 13 emails, 6 LinkedIn messages, and 3 X DMs; 1 completed, 1 declined, 1 replied without completing, 11 no response; 4 M1 planned candidates not contacted.

| Candidate or Group | Type | Outreach Channels and Attempts | Outcome or Reason for Non-Participation |
|---|---|---|---|
| Wanchain | Bridge and interoperability provider | Email 7 Aug and 10 Aug; LinkedIn logged 8 Aug | No response after 2 emails and 1 LinkedIn message |
| Rosen Bridge | Bridge | LinkedIn logged 8 Aug | No response after 1 LinkedIn message |
| Cardinal | M1 planned bridge candidate | None logged | Not contacted during M2 window; no direct reachable team contact was available without an ecosystem introduction |
| Bifrost and FluidTokens | M1 planned bridge candidate and lead builder | FluidTokens emailed 18 Aug; no direct Bifrost outreach logged | No response after 1 email to FluidTokens |
| Lantr | Interoperability and bridge contributor | LinkedIn logged 8 Aug | No response after 1 LinkedIn message |
| LayerZero | Cross-chain messaging | Email 7 Aug and 10 Aug | No response after 2 emails |
| Circle | M1 planned stablecoin issuer | None logged | Not contacted during M2 window; no direct reachable team contact was available without an ecosystem introduction |
| Celo and MiniPay | M1 planned stablecoin rail | None logged | Not contacted during M2 window; no direct reachable team contact was available without an ecosystem introduction |
| Lace | M1 planned wallet candidate | None logged | Not contacted during M2 window; no direct reachable team contact was available without an ecosystem introduction |
| Eternl | Cardano wallet | Email 7 Aug and 10 Aug | Declined per register; reason not recorded |
| VESPR | Cardano wallet | LinkedIn logged 8 Aug | No response after 1 LinkedIn message |
| Typhon Wallet | Cardano wallet | X DM logged in register | No response after 1 X DM |
| Apex Fusion, additional contact R-030 | Interoperability protocol | LinkedIn logged 31 Aug; warm introduction requested via Category 2 respondent on 31 Aug | Completed 7 Sep 2026 |
| dcSpark and Milkomeda, additional contact | Partner chain and bridging | Email 18 Aug and duplicate copy 19 Aug; LinkedIn logged in register | No response after email and LinkedIn outreach |
| NuFi and VacuumLabs, additional contact | Cross-chain wallet | Email 18 Aug; scheduling reply proposing 25 Aug at 14:00 UTC on 21 Aug; developer outreach 22 Aug | Replied initially, but proposed slot was not confirmed and no interview took place |
| AdaLite and VacuumLabs, additional contact | Cardano wallet | Email 31 Aug | No response after 1 email |
| GeroWallet, additional contact | Cardano wallet | Direct X DM by lead researcher 11 Aug | No response after 1 X DM |
| Hyperbridge and Polytope Labs, additional contact | Cross-chain interoperability | Direct X DM by lead researcher 3 Sep | No response after 1 X DM |

**Category 2: Infrastructure, Tooling, Identity and Protocols**

Summary: 19 organisations or teams approached, covering 11 of the 14 M1 planned candidates plus 8 additional contacts; 35 logged outreach attempts across 18 emails including 1 bounce, 15 LinkedIn messages, and 2 direct X DMs, plus direct scheduling for the 3 additional completed interviews; 5 completed, 0 declined, 3 replied without completing, 11 no response; 3 M1 planned candidates not contacted.

| Candidate or Group | Type | Outreach Channels and Attempts | Outcome or Reason for Non-Participation |
|---|---|---|---|
| Charli3, R-005 | Oracle provider | Email 5 Aug, with one general address bounce; LinkedIn logged 8 Aug | Completed 12 Aug 2026 |
| Orcfax, R-006 | Oracle provider | Direct access from VAL-004 and email 5 Aug | Completed 14 Aug 2026 |
| Hyperledger Identus maintainer community | Identity infrastructure | None logged | Not contacted via a logged channel during M2 window; planned route via weekly public community calls did not produce a reachable respondent contact |
| Blockfrost | Hosted API provider | Email 5 Aug, 10 Aug, and 31 Aug; LinkedIn logged 8 Aug | Replied per register, but no interview was scheduled or completed |
| Midnight Network | Partner chain | Direct X DM by lead researcher 29 Aug | No response; message marked seen |
| Masumi Network | Agent infrastructure protocol | LinkedIn logged 8 Aug | No response after 1 LinkedIn message |
| Demeter and TxPipe | Managed cloud infrastructure | Email 5 Aug and 10 Aug | No response after 2 emails |
| Maestro | Enterprise API and transaction infrastructure | Email 5 Aug and 10 Aug; LinkedIn logged 8 Aug | No response after 2 emails and 1 LinkedIn message |
| Koios | Community-run API provider | Email 5 Aug and 10 Aug | No response after 2 emails |
| Blink Labs | Node client and audit provider | LinkedIn logged 8 Aug | No response after 1 LinkedIn message |
| Anastasia Labs and Midgard | Optimistic rollup builder | Email 5 Aug, 10 Aug, and 31 Aug; LinkedIn logged 8 Aug | Replied and scheduled for 18 Aug at 17:00 UTC, but call was not completed due to technical issues on NexTrium's side; reschedule requested 31 Aug with no completed session |
| zkFold | Zero-knowledge rollup builder | Email 5 Aug, 10 Aug, and 31 Aug; LinkedIn logged 8 Aug | Replied on LinkedIn asking to answer in writing instead of a call; written questions prepared, no completed response received |
| Input Output infrastructure teams | Core protocol | None logged | Not contacted as an interview respondent during M2 window; no direct technical respondent contact was secured, and introductions were requested from the Committee on 13 August |
| Intersect as respondent | Programme administrator | None logged | Not contacted as an interview respondent during M2 window; no direct respondent contact on the Critical Integrations team was secured, and introductions were requested from the Committee on 13 August |
| Independent Cardano tooling developer, R-007 | Tooling and infrastructure | Direct outreach | Completed 20 Aug 2026 |
| DripDropz and multi-project tooling, R-021 | Tooling and infrastructure | Direct outreach | Completed 3 Sep 2026 |
| Anonymised Category 2 respondent, R-027 | Protocol and infrastructure | Direct outreach | Completed 8 Sep 2026; anonymised per consent |
| Indigo Protocol former contributor, additional contact | Cardano DeFi protocol perspective | Direct X DM by lead researcher 7 Aug | No response after 1 X DM |
| Genius Yield, additional contact | DEX and DeFi infrastructure | Email 18 Aug; LinkedIn logged in register | No response after 1 email and 1 LinkedIn message |
| NMKR, additional contact | NFT and tokenisation infrastructure | LinkedIn logged in register | No response after 1 LinkedIn message |
| COTI Group, additional contact | Stablecoin infrastructure | LinkedIn logged in register | No response after 1 LinkedIn message |
| SIDAN Lab and DeltaDeFi, additional contact | Dev tooling and DeFi | LinkedIn logged in register | No response after 1 LinkedIn message |

## 7. AI Use Disclaimer

AI tools were used in transcription, extraction, classification and drafting, as logged in the AI Tool Disclosure Log (grant clause 4.2). The lead researcher has reviewed this work. Given the number of text-based extracts involved, a manual review may not catch every issue. Feedback from any reader is welcome, and this review will be updated, or defended where necessary.

## 8. Supporting Evidence

- Initial Blocked-Demand Case Register: [CPC260015_M2_BlockedDemandCaseRegister_v1_09Oct2026.md](./CPC260015_M2_BlockedDemandCaseRegister_v1_09Oct2026.md)
- Redacted Interview Analysis Workbook (all cited extract and test IDs): [CPC260015_M2_InterviewAnalysisWorkbookRedacted_v14_09Oct2026.md](./CPC260015_M2_InterviewAnalysisWorkbookRedacted_v14_09Oct2026.md)

## Document Version History

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 9 October 2026 | Abdulbasit Adigun Abdulrahman | Initial early demand-signal review for Milestone 2 |
| 1.1 | 24 November 2026 | Abdulbasit Adigun Abdulrahman | Reconciled Non-Layer 2 test counts to 102 distinct respondent tests with Category 1 updated from 39 to 38 and 105 workbook rows explained; added Sections 6.1 and 6.2 documenting shortfall impact on decision gates and deliverables, the 13 August 2026 written notice to the Committee, and the Category 2 and Category 3 outreach and non-response log. |
