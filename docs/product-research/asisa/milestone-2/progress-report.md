---
title: "ASISA: Milestone 2 Progress Report"
sidebar_label: "Progress Report"
sidebar_position: 7
---

# Milestone 2 Progress Report

**Project:** Cardano Market Entry into Nigeria Through Blockchain-Enabled Insurance (`CPC-26-0014` / `ER-0004b-25`)  
**Organisation:** Actuarial Science and Insurance Students Association, Ahmadu Bello University (ASISA ABU), Zaria, Nigeria  
**Principal Investigator:** Odufuwa O. Oluwakayode  
**Milestone:** 2 of 5 (Desk Research & Ecosystem Mapping)  
**Classification:** Public (Contract Clause 4.1) · Licence CC BY 4.0  

---

## 1. Executive Summary of Milestone 2 Execution

Milestone 2 completes the desk research and market framing (Phase 1/2), stakeholder ecosystem mapping (Phase 2), preliminary regulatory and infrastructure readiness assessment (Phase 3), and Gate A pre-fieldwork provisional screen established in the Milestone 1 Research Design Report. All desk-research, statutory-verification, comparative-screening, and ecosystem-mapping deliverables required ahead of primary stakeholder fieldwork have been completed in full.

---

## 2. Workstream Status Breakdown

| Workstream | Scope in Milestone 2 | Status | Completed Outputs & Evidence |
|---|---|---|---|
| **WS1: Desk Research & Market Framing** | Empirical baseline of the Nigerian insurance market (GWP, claims paid across regulator and press series, penetration, post-recapitalisation structure, ISSP policy targets); demand-side inclusion analysis (EFInA 2023); 25-source coded Literature Map (`T1`–`T6`); bottom-up Cardano technical and unit-economics evaluation across all 8 candidate use cases. | **100% Complete** | Delivered in [Desk Research Report](./desk-research-report.md) (Sections 1–4) and [Verified Reference Register](./references.md). |
| **WS2: Statutory, Regulatory & Comparative African Audit** | Primary-text section-by-section audit of *NIIRA 2025*, *NAICOM Insurtech Guidelines 2025*, *NAICOM Microinsurance & Takaful Guidelines*, *ISA 2025*, *CBN VASP Circular 2023 & PSV 2028*, *NDPA 2023 & GAID 2025*, and *NIMC Act 2007/2026* across all 8 use cases using the M1 Appendix C template; 9-dimension Comparative African Screen across Nigeria, Kenya, Ghana, and South Africa. | **100% Complete** | Delivered in [Preliminary Regulatory Scan](./regulatory-preliminary-scan.md) and [Desk Research Report](./desk-research-report.md) (Section 5). |
| **WS3: Stakeholder Ecosystem Mapping** | Mapping of **63 named institutions** across Archetypes A (7 regulators/standards bodies), B (22 underwriters, reinsurers, microinsurers, and Takaful operators), C (16 insurtechs, intermediaries, and professional bodies), and D (18 extended value-chain, agricultural, payment, VASP, beneficiary, and Cardano technical actors) with M1 §4.4 access status, M1 §6.4 sponsor flags, M1 §4.2 sampling crosswalk, and M1 §4.6 five-wave sequencing. | **100% Complete** | Delivered in [Stakeholder Ecosystem Map](./stakeholder-ecosystem-map.md) (14 Warm, 2 Open Communications, 20 Referred, 27 Desk-Identified). |
| **WS4: Gate A Provisional Screen, Appendix D Matrix & CPC Briefing Pack** | Execution of the locked Milestone 1 Chapter 5 nine-criterion (`C1`–`C9`), four-level ordinal (`Strong`, `Conditional`, `Weak`, `Disqualifying`) scorecard under Milestone 1 Section 3.4 protective rules; completion of the Milestone 1 Appendix D Infrastructure Prerequisite Matrix with Cross-RFP handoffs (`RFP 01`, `03`, `06`, `07`, `08`); preparation of the Regional Screening Review Briefing Pack. | **100% Complete** | Delivered in [Gate A Provisional Screen](./gate-a-provisional-screen.md) and [Regional Screening Review Briefing Pack](./regional-screening-review-briefing-pack.md). |
| **WS5: Repository Documentation & Traceability** | Formatting of all Milestone 2 deliverables as modular Docusaurus pages with YAML frontmatter and verified reference register. | **100% Complete** | Delivered in [Milestone 2 Index](./index.md) and modular sub-pages. |

---

## 3. Factual Status of Fieldwork Preparation Entering Milestone 3 (Phase 4)

To maintain strict methodological separation between desk screening (Milestone 2) and primary data collection (Milestone 3), Table 3.1 records the factual operational status of fieldwork transition items at the close of Milestone 2.

### Table 3.1: Status of Fieldwork Transition Items Entering Milestone 3

| Transition Item | Current Factual Status at Close of Milestone 2 | Planned Action in Milestone 3 (Phase 4) |
|---|---|---|
| **Stakeholder Relationship Maintenance & Wave 1–5 Invitations** | Relationships established with regulators, standards bodies, underwriters, Takaful operators, and professional institutes (14 Warm and 2 Open-Communications institutions) have been actively maintained by the Principal Investigator. **Formal written Milestone 3 research interview invitations have not yet been sent**, and zero primary interviews were conducted during Milestone 2, preserving the clean boundary between Gate A desk screening and Phase 4 fieldwork (with the downstream execution timeline anchored to the Milestone 1 approval baseline). | Dispatch formal written Wave 1–5 research invitations, participant information sheets, and consent forms at the start of Milestone 3 primary data collection to complete ≥25 formal consented interviews across Northern and Southern Nigeria. |
| **Interview Instruments, Consent Materials & Ethics Safeguards** | The five archetype interview modules (Milestone 1 Appendix A, enforcing the Part A `[A]` business-problem before Part B `[T]` technology sequencing rule) and respondent screener criteria (Milestone 1 Appendix B) are locked. Participant consent sheets, information sheets, and pre-interview ethics clearance will be finalised prior to the first Milestone 3 interview. | Administer informed-consent and Appendix B screener checks prior to every Milestone 3 consultation session (counting only formal consented KII sessions (1 per institutional session, excluding symposium networking or outreach calls) toward the ≥25 contractual floor). |
| **CPC Regional Screening Review Checkpoint** | The [Regional Screening Review Briefing Pack](./regional-screening-review-briefing-pack.md) is completed and submitted in this milestone. | Review Gate A priority tiers and Archetype D technical introductions with the Cardano Product Committee (CPC). |

---

## 4. Updated Project Risk and Mitigation Register

| Risk ID | Risk Description | Severity | Updated Status & Mitigation Resulting from Milestone 2 Findings |
|---|---|---|---|
| **R01** | **Regulatory prohibition of crypto-denominated insurance flows in Nigeria** | Moderate (Reduced from High) | **Mitigated via Architectural Separation:** Direct inspection of *NAICOM Insurtech Guidelines 2025* **§12.1(vi)** confirmed that crypto premiums/claims require prior NAICOM approval, while **§14.4** requires instant credit to the insurer's bank account. Milestone 2 therefore separated B2B/fiat-settled architectures (`UC1`–`UC7`, which require zero crypto payments by end users) from token-settled cross-border/diaspora flows (`UC8`). |
| **R02** | **Prohibition on unsupervised automated claims denials** | Low | **Mitigated via Human-in-the-Loop Design:** Discovery of *NAICOM Insurtech Guidelines* **§12.1(iv)** and *NDPA 2023* **s. 37** resulted in an explicit asymmetrical adjudication rule for `UC5`: smart contracts automate approval and 60-day SLA compliance logging (**NIIRA s. 210**), while routing all potential denials to a human claims adjuster. |
| **R03** | **Conflict between public blockchain immutability and NDPA 2023 right to erasure (s. 34(1)(d))** | Low | **Mitigated via Off-Chain PII + Salted Hash / ZK Architecture:** All eight candidate use cases enforce strict off-chain storage of raw PII in domestic encrypted databases (retained for 10 years per **§17.2(ii)**), anchoring only salted `Blake2b-256` hashes, Merkle roots, **Hyperledger Identus** DIDs, or **Midnight** ZK proofs on Cardano. |
| **R04** | **Absence of native Naira stablecoin (`cNGN`) and Nigerian weather feeds on Cardano** | Moderate | **Logged in Appendix D Matrix & Routed to Wave 3 / Cross-RFP Handoffs:** Desk research verified that `cNGN` is not yet deployed on Cardano (`RFP 03` handoff) and that **Charli3 / Orcfax** do not currently carry NiMet/CHIRPS Nigerian weather feeds (`RFP 07` handoff). Milestone 3 Wave 3 consultations will test custom oracle adapter costs and VASP edge-conversion feasibility. |
| **R05** | **Sponsor-affiliation or event-sample bias in primary interviews** | Low | **Mitigated via Explicit Tagging & Non-Symposium Triangulation:** All 12 Symposium sponsors/partners on the access roster are explicitly tagged `[Sponsor-Affiliated: M1 §6.4]` in the Stakeholder Ecosystem Map, and Waves 2–5 include 49 non-symposium institutions/groups across Northern and Southern Nigeria (enforcing Bias Controls 3, 5, 7, and 9). |
