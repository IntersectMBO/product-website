---
title: "NexTrium Global Innovations Ltd - Milestone 2"
sidebar_label: "Milestone 2"
---

# NexTrium Global Innovations Ltd - Milestone 2

| Field | Value |
|-------|-------|
| **RFP** | RFP 07 - L2 Adoption & Interoperability Demand Study |
| **Team / Organisation** | NexTrium Global Innovations Ltd |
| **Milestone number** | 2 of 4 |
| **Reporting period** | 11 August 2026 - 9 October 2026 |
| **Grant amount** | 25,000 ADA |
| **Amount claimed this milestone** | 6,250 ADA |
| **Cumulative amount claimed** | 12,500 ADA |

## Summary

Milestone 2 delivered the primary research programme: 31 interviews across all four respondent categories, within the committed range of 30 to 44. Every interview was extracted into 500 evidence statements, and every blocker claim was put through the seven-alternative Non-Layer 2 test. There are 102 distinct respondent tests across the 31 interviews, plus 2 tests on our own validation cases, and 1 labelled duplicate row T-106 kept in the workbook for auditability, making 105 rows in total. Both contracted deliverables are complete: an initial blocked-demand case register of 15 cases, 11 of which pass the Layer 2 or interoperability workflow test, and an early demand-signal review answering Decision Gates 1 and 4 at an early stage. A redacted, consent-aware version of the full analysis workbook is published so every case and finding can be traced back to its evidence.

### Committed Target vs. Delivered

| Item | Committed Target from Contract and Proposal Section 5 | Delivered in Milestone 2 | Status |
|------|-------------------------------------------------------|--------------------------|--------|
| Total interviews | 30 to 44 | 31 | Within range |
| Category 1: African builders and operators on Cardano | 15 to 20 | 15 | Within range |
| Category 2: Infrastructure, tooling and identity teams | 6 to 10 | 5 | 1 below lower bound |
| Category 3: Bridge, interoperability and wallet providers | 5 to 8 | 1, with 0 wallet providers | 4 below lower bound; see Issues and Blockers |
| Category 4: Non-Cardano and negative-case respondents | 4 to 6 | 10 | 4 above upper bound; not substituted for Category 2 or 3 |
| Initial blocked-demand case register | Minimum 8 to 15 cases | 15 cases: 11 passing the L2 or interop test, 4 routed to adjacent RFPs | Complete |
| Early demand-signal review | Decision Gates 1 and 4 | Delivered, based on 500 extracts and 102 distinct respondent Non-L2 tests plus 2 own-validation tests | Complete |

### Lead Researcher Note

In Milestone 2, we ran 31 interviews to test the research design and shortlist we built in Milestone 1. Every blocker claim was checked against the seven non-Layer 2 alternatives before we treated anything as a Layer 2 problem. The findings line up with what our Milestone 1 desk research pointed toward. Real Layer 2 blockers do exist in a narrow set of infrastructure workflows, such as oracle latency, on-chain order matching, native-token micropayments, and continuous sensor data. For most African builders we spoke with, however, the real constraints are funding, developer tooling, regulation, and mobile or basic-phone wallet access rather than Layer 2 throughput. Primary interviews also qualified one Milestone 1 finding by showing two builders already running USSD access on Cardano at the application layer, which we carry into Milestone 3 rather than quietly rewriting Milestone 1.

The honest gap in Milestone 2 is provider access. We reached 5 of 6 to 10 teams in Category 2 and 1 of 5 to 8 in Category 3, with no wallet providers. Category 3 was the exact weakness we flagged upfront in Milestone 1 because we held no prior relationships with those teams, and cold outreach had very low response rates even after follow-ups across email, LinkedIn, and X. We flagged this in writing to the Cardano Product Committee on 13 August 2026 and asked whether the Committee could share contact introductions for Categories 2 and 3. Rather than hide the shortfall by substituting extra Category 4 interviews, we report the gap plainly and hold all provider-side findings on Decision Gates 6 to 9 at Low confidence.

## Deliverables

| # | Deliverable | Status | Evidence |
|---|-------------|--------|----------|
| 1 | Initial blocked-demand case register (minimum 8 to 15 cases) | Complete | [CPC260015_M2_BlockedDemandCaseRegister_v1_09Oct2026.md](./rfp-07-deliverables/CPC260015_M2_BlockedDemandCaseRegister_v1_09Oct2026.md) |
| 2 | Early demand-signal review | Complete | [CPC260015_M2_EarlyDemandSignalReview_v1_09Oct2026.md](./rfp-07-deliverables/CPC260015_M2_EarlyDemandSignalReview_v1_09Oct2026.md) |

The Milestone 2 services ("primary research across the four respondent categories, targeting 30 to 44 interviews") are evidenced by one supporting output, which is not itself a named deliverable under the grant agreement:

- Redacted Interview Analysis Workbook. It contains the interview register, all 500 evidence extracts, all 105 Non-Layer 2 test rows covering 102 distinct respondent tests, 2 applicant-validation tests T-108 and T-109, and 1 labelled duplicate row T-106 kept for auditability, the case register, decision-gate coverage, and the AI tool disclosure log. Confidential and anonymised respondents are protected according to their recorded consent: [CPC260015_M2_InterviewAnalysisWorkbookRedacted_v14_09Oct2026.md](./rfp-07-deliverables/CPC260015_M2_InterviewAnalysisWorkbookRedacted_v14_09Oct2026.md)

## Evidence

- **Initial blocked-demand case register**: [CPC260015_M2_BlockedDemandCaseRegister_v1_09Oct2026.md](./rfp-07-deliverables/CPC260015_M2_BlockedDemandCaseRegister_v1_09Oct2026.md). Cases 1 and 2 are our own validation cases, VAL-003 and VAL-006, which we committed in Proposal Section 13 to include as disclosed conflicted evidence. Our validation source code is publicly available at [github.com/zivana-labs/zivana-validation](https://github.com/zivana-labs/zivana-validation).
- **Early demand-signal review**: [CPC260015_M2_EarlyDemandSignalReview_v1_09Oct2026.md](./rfp-07-deliverables/CPC260015_M2_EarlyDemandSignalReview_v1_09Oct2026.md)
- **Interview programme and analysis (supporting output)**: [CPC260015_M2_InterviewAnalysisWorkbookRedacted_v14_09Oct2026.md](./rfp-07-deliverables/CPC260015_M2_InterviewAnalysisWorkbookRedacted_v14_09Oct2026.md). Under Grant Agreement Clause 4.3, Proposal Section 12, and Milestone 1 Research Design Document Sections 7.2 and 8.2, raw interview notes, transcripts, recordings, and the respondent identity key are held privately by the research team and will not be published publicly in any form. Sample transcripts, such as two consented interviews for Committee process review, can be shared privately with Committee reviewers on request once respondent permission is confirmed for private Committee review.

## Budget Update

The grant agreement pays each milestone as a single lump-sum tranche and does not itemize the grant by cost category, so this milestone's spend is reported as a single line rather than split across categories that do not appear in the agreement.

| Category | Budgeted (ADA) | Spent this period (ADA) | Cumulative spend (ADA) |
|----------|---------------|------------------------|------------------------|
| Milestone 2 tranche (per Agreement Appendix A; not itemized by cost category) | 6,250 | 6,250 | 12,500 |
| **Total** | **6,250** | **6,250** | **12,500** |

## Issues and Blockers

- **Category 3 and Category 2 access shortfalls.** One bridge, interoperability, or wallet provider was interviewed against a committed 5 to 8 with zero wallet providers, and five infrastructure and tooling teams were interviewed against a committed 6 to 10. Category 3 was disclosed upfront as our principal access risk in Proposal Section 5, Risk 8, and the Milestone 1 Stakeholder Access Status Update, flagged in the Milestone 1 report, and raised in writing to the Cardano Product Committee by email on 13 August 2026 under subject "Re: CPC-26-0015 progress and milestone acceptance form", where we also requested Committee help with contact introductions. Surplus Category 4 interviews, 10 against 4 to 6, have not been substituted for provider evidence, and all provider-side findings and Decision Gates 6 to 9 are held at Low confidence. Full outreach records and the exact gate and deliverable impact breakdown are documented in the Early Demand-Signal Review, Sections 6.1 and 6.2. We request explicit Committee sign-off on the achieved 31-interview composition under Proposal Section 5 and Risk 8. If the Committee instead prefers closing the remaining Category 2 and Category 3 shortfall and can provide warm introductions or outreach support, we will gladly complete the additional interviews.
- **Finding flagged for Milestone 3.** Two respondents deliver USSD access on Cardano at the application layer. This qualifies a Milestone 1 desk-research finding, and it is reported in the Early Demand-Signal Review (Section 4.1) for resolution at Milestone 3 rather than corrected unilaterally.
- **AI use.** AI tools were used in transcription, extraction, classification and drafting, as logged in the workbook (grant clause 4.2). The lead researcher has reviewed this work. Given the number of text-based extracts, a manual review may not catch every issue. Feedback is welcome, and the work will be updated, or defended where necessary.

## Plan for Next Milestone

Milestone 3 (Analysis and Draft Deliverables) will:

- classify all blockers across the barrier taxonomy;
- produce final value-flow classifications for every screened interoperability pathway;
- compile the interoperability requirements register and the provider and partner opportunity analysis;
- deliver the full draft set for Committee review: Draft L2 Barrier Analysis, Draft L2 Demand Map, Draft Interoperability Requirements Register, Draft Interoperability Value-Flow Assessment, Draft Provider and Partner Opportunity Analysis, Draft Investment Sequencing Recommendation, Draft Evidence Threshold Framework, Draft Cross-RFP Handoff Memo and Draft Executive Decision Memo.

The four non-Layer 2 cases in the register will be carried into the Cross-RFP Handoff Memo: Case-003 to RFP 05 (government and emerging markets entry), Case-007 and Case-008 to the governance workstream with RFP 05 as secondary, and Case-009 to RFP 03 (stablecoin liquidity incentive and activation). Layer 2 cases that depend on base-layer throughput will be re-tested against the Leios timeline.

## Attestation

We confirm that the information in this report is accurate and that the deliverables described have been completed as stated.

**Authorised signatory**: Abdulbasit Adigun Abdulrahman, Founder & CEO, NexTrium Global Innovations Ltd
**Date**: 2026-10-09
