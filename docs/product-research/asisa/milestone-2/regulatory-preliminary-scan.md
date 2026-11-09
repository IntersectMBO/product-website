---
title: "ASISA: Preliminary Regulatory Scan"
sidebar_label: "Regulatory Scan"
sidebar_position: 3
---

# Preliminary Regulatory Scan: Insurance, Digital Assets, Payments, Identity and Data Protection Across Eight Candidate Use Cases

**Project:** Cardano Market Entry into Nigeria Through Blockchain-Enabled Insurance (`CPC-26-0014` / `ER-0004b-25`)  
**Organisation:** Actuarial Science and Insurance Students Association, Ahmadu Bello University (ASISA ABU), Zaria, Nigeria  
**Principal Investigator:** Odufuwa O. Oluwakayode  
**Classification:** Public (Contract Clause 4.1) · Licence CC BY 4.0  
**Legal position reviewed as at:** November 2026

---

## 1. Purpose, Scope and Limits

This scan applies the regulatory assessment framework of Milestone 1 Appendix C to all eight candidate use cases across the five authorities named in Milestone 1 RQ3: the National Insurance Commission (NAICOM), the Securities and Exchange Commission (SEC Nigeria), the Central Bank of Nigeria (CBN), the National Identity Management Commission (NIMC) and the Nigeria Data Protection Commission (NDPC). The National Pension Commission (PenCom) is added for UC6 because group life cover is a pension-law obligation.

It is a research mapping of rules to use cases, prepared from statutes and regulator publications. It is not a legal opinion, which Milestone 1 §1.7 places out of scope. No regulator has been interviewed. Where the scan says a design "may" be permissible, it means the text read on its own does not prohibit it. It does not mean a regulator would approve it.

### 1.1 Classification Taxonomy (Milestone 1 RQ3.1 and Appendix C)

- **Hard prohibition:** a statute or binding instrument expressly forbids the activity whatever the licensing structure. Under Milestone 1 §3.4, only a hard prohibition in primary legal text can eliminate a use case at Gate A.
- **Conditional permission:** the activity may be lawful if the operator holds, or partners with, the required licence and meets stated conditions or prior-approval gates.
- **Regulatory silence:** current instruments neither authorise nor prohibit the mechanism, so general prudential, contract and data-protection rules apply. Silence is not permission.
- **Sandbox pathway:** a formal sandbox or incubation regime exists through which the mechanism could be tested under supervision.

### 1.2 Uncertainty Levels

Milestone 1 Appendix C requires an uncertainty level of High, Medium or Low for each use case. Before any regulator interview, this scan does not assign a flat "Low" to any use case. The lowest level used is **Low to Medium (pending regulator confirmation)**, applied where the governing text is clear but its application to a public ledger has not been confirmed by the regulator concerned.

---

## 2. Statutory and Regulatory Inventory

**Table 2.1: Instruments reviewed**

| Authority | Instrument | Date | Provisions relevant to the candidate use cases | Status |
|---|---|---|---|---|
| NAICOM | Nigerian Insurance Industry Reform Act (NIIRA) 2025 | Assented 31 July 2025; recapitalisation completed 2 August 2026 | s. 15(1): minimum capital of ₦15 bn (non-life), ₦10 bn (life), ₦35 bn (reinsurance) or risk-based capital. ss. 24 to 26: capital adequacy and risk-based supervision. s. 60(1): advance premium is a condition precedent to cover (penalty up to twice the premium, s. 60(3)); reinsurance governed by contract terms (s. 60(5)). s. 61(1): broker remittance deadlines. s. 68: group life. ss. 200 to 201: licensing of Takaful, microinsurance and electronic insurance. s. 202: KYC, AML, CFT and CPF policies. s. 204: domestic capacity before offshore reinsurance; s. 204(6) removes in-person engagement for programme-compliant offshore reinsurance. s. 207(1): duty to report fraud. s. 210: 60-day settlement of admitted claims; deduction from statutory deposit (s. 210(2)); ₦500,000 fine plus monthly compound interest (s. 210(7)). s. 212: Policyholders Protection Fund. s. 229: repeals five Acts and saves existing guidelines | In force |
| NAICOM | Guidelines for Insurtech Operations in Nigeria | Effective 1 August 2025 | §§1.2 to 1.3: registration. §§2.1, 4.1 to 4.2: partnering insurtech (works under an SLA with a licensed insurer; §4.1(g) permits "crop cutting, data collection and yield calculation") and standalone insurtech. §5.0(vi): sandbox. §8.0(xvi): insurer responsible for product and claims disputes. §9.1(ii): NDPA and Cybercrimes Act compliance. §9.1.4(ii) to (iv): link registration to NIN, passport or driver's licence; two-factor authentication; "The Insurtech shall consider Public Key Infrastructure (PKI) for authentication". §9.2(iv): KYC to insurer within 3 days. §9.2(viii): annual technology audit. §12.1(iii): no unapproved products or dynamic pricing. §12.1(iv): "Unsupervised automated claims rejections" impermissible. §12.1(vi): "Acceptance of premiums or settlement of claims in cryptocurrency without prior approval of the Commission" impermissible. §14.1: capital of ₦10 m plus ₦100 m indemnity (partnering); ₦1.5 bn non-life or ₦1.0 bn life (standalone). §14.4: insurtech "shall instantly credit the account of the insurer". §17.2(ii): 10-year record retention. §18.3(iii)(f) to (g): prior approval for third-party vendors and server location changes | In force |
| NAICOM | Microinsurance Guidelines 2018; Takaful Operational Guidelines 2013 | 2018; 2013; saved by NIIRA s. 229 | Microinsurance tiers (₦40 m, ₦100 m, ₦600 m); ₦2 m sum-assured cap; 7-day claims settlement. Takaful: separation of participants' risk fund (*Tabarru'*) and operator's fund; Advisory Council of Experts | In force |
| NAICOM | Online regulatory portal | Current | Returns, applications and approvals, including offshore reinsurance placement under s. 204 (NAICOM, n.d.). `[DATA GAP: scope of bordereau-level submissions not published]` | Operating |
| SEC Nigeria | Investments and Securities Act (ISA) 2025; Digital Assets Rules 2022; ARIP framework 2024 | Assented March 2025 | s. 355 and Second Schedule, Part I, para. 4: virtual assets, digital assets and DLT tokens are within SEC jurisdiction. ARIP approvals-in-principle for Busha and Quidax; cNGN issuer WrappedCBDC admitted | In force |
| CBN | VASP bank account guidelines (FPR/DIR/PUB/CIR/002/003); IMTO guidelines; PSV 2028 | 22 December 2023; 31 January 2024; 1 June 2026 | Designated VASP settlement accounts; no cash withdrawals; no third-party cheques; at most two naira sweeps a quarter; banks may not hold or trade virtual assets for their own account. Inbound IMTO remittances paid out in naira. Retail payments run on NIBSS Instant Payments, PSBs and mobile money operators | In force |
| NDPC | Nigeria Data Protection Act (NDPA) 2023; GAID 2025 | Gazetted 2023; 2025 | s. 24: minimisation and storage limitation. ss. 25 to 26: lawful basis and consent. s. 28: DPIA for high-risk processing. s. 30: sensitive data. s. 31: children. s. 34(1)(d): erasure without undue delay. s. 37: decisions based solely on automated processing. s. 38: portability. s. 40: breach notification within 72 hours. ss. 41 to 43: cross-border transfer. s. 44: registration as a data controller or processor of major importance. ss. 48 to 49: penalties | In force |
| NIMC | National Identity Management Commission (Establishment) Act 2026 | Assented 26 June 2026 | Repeals the NIMC Act 2007; sets out NIMC's role in the National Public Key Infrastructure; penalties for unauthorised access to or extraction of identity data. Private entities verify NIN through licensed verification service providers using consent and virtual NIN controls | In force |
| PenCom | Pension Reform Act 2014; PenCom benefit-administration circular | 2014; effective 1 June 2025 | s. 4(5): employer group life cover of at least three times annual total emolument. Administrators may process death and retirement benefits without prior Commission approval from 1 June 2025 (PenCom, 2025) | In force |

---

## 3. Cross-Reference Matrix: Eight Use Cases by Authority

**Table 3.1: Regulatory treatment by use case (desk reading, pending regulator interviews)**

| Use case | NAICOM | SEC Nigeria | CBN | NIMC | NDPC | Overall classification | Uncertainty |
|---|---|---|---|---|---|---|---|
| UC1: Parametric agricultural insurance | Conditional: partnering insurtech licence (§14.1) under an SLA with a licensed insurer; §4.1(g) crop data; product approval (§12.1(iii)) or sandbox (§5.0(vi)) | Not triggered if premiums and payouts are in naira; triggered by tokenised risk shares or crypto payouts | Naira payouts over NIP or PSBs; crypto off-ramps restricted | Onboarding linked to NIN or group master policy KYC (§9.1.4(ii)) | Farm locations tied to named farmers are personal data; off-chain storage and DPIA (s. 28) | Conditional permission, with sandbox pathway | Medium |
| UC2: Microinsurance and Takaful pooling | Conditional: licensed microinsurer or Takaful operator (s. 200); s. 60(1) and §14.4 require premium to reach the insurer's account | Triggered if pool shares or stablecoins are used; not triggered for an accounting mirror of bank-held funds | Naira collection over USSD, NIP, PSBs | NIN or tiered KYC (§9.1.4(ii); s. 202) | Member registers off-chain; hashes only on-chain (ss. 24, 34(1)(d)) | Conditional permission for a mirror of bank-held funds; hard prohibition for an unlicensed on-chain pool holding premiums | Medium |
| UC3: Shared claims registry | Conditional: consistent on paper with s. 207(1); vendor approval (§18.3(iii)(f)) or partnering licence | Not triggered: no asset or token issued | Not triggered | Indirect: salted identifiers kept off-chain | DPIA (s. 28); lawful basis; erasure (s. 34(1)(d)); whether hashes sent to validator nodes abroad are cross-border transfers (ss. 41 to 43) is unconfirmed | Conditional permission | Low to Medium (pending NDPC and NAICOM confirmation) |
| UC4: Reinsurance reconciliation | Conditional: s. 204(3) and (6); vendor approval (§18.3(iii)(f)); interaction with NAICOM's portal unconfirmed | Not triggered for accounting records | Not triggered for accounting; FX rules apply to settlement | Not triggered | Pseudonymised bordereaux; standard processing agreements | Conditional permission | Low to Medium (pending NAICOM confirmation) |
| UC5: Claims automation and settlement audit | Conditional: automated approval and timestamping only; §12.1(iv) bars unsupervised automated rejection; §8.0(xvi) insurer liability | Not triggered unless payouts are in digital assets | Naira payouts over NIP or bank APIs | Claimant linked to onboarding KYC | s. 37 automated decisions; s. 30 health data; human review of rejections | Conditional permission (approval-only automation) | Medium |
| UC6: Beneficiary verification | Conditional: NIIRA s. 68; s. 210; §9.1.4(iv) PKI reference; PenCom rules for group life | Not triggered (non-transferable credentials) | Naira payouts to verified accounts | NIN-linked verification through a licensed provider | s. 30 sensitive data; s. 31 minors; s. 34(1)(d) | Conditional permission | Medium to High |
| UC7: Identity-linked enrolment | Conditional: §9.1.4(ii) to (iv); §9.2(iv); s. 202 | Not triggered | Consistent with CBN tiered KYC where BVN is linked | High dependency: any credential sits under the NIMC Act 2026 framework and a licensed provider | Consent and portability (ss. 26, 38); DPIA (s. 28); no personal data on-chain | Conditional permission | Medium to High |
| UC8: Stablecoin settlement | Restricted: §12.1(vi) prior approval; §14.4 instant credit | Full VASP regulation (ISA 2025 s. 355); ARIP-approved partner required | Two-sweep limit on VASP accounts; banks barred from own-account crypto; naira payout for IMTO remittances | Full VASP and insurer KYC | Travel-rule data; cross-border rules (ss. 41 to 43) | Conditional permission subject to multiple regulators; sandbox pathway | High |

---

## 4. Use-Case Scans (Milestone 1 Appendix C Format)

Each scan uses the eight Appendix C rows. The final row opens with the Appendix C determination of whether local counsel or specialist review is required, followed by the questions for Milestone 3 regulator interviews (Appendix A, Module 1).

### 4.1 Scan 1: UC1 Parametric Agricultural and Climate Micro-Insurance

| Dimension | Assessment |
|---|---|
| **Relevant authorities** | NAICOM (lead); NDPC; NIMC; CBN (payment rails); NiMet (official meteorological data); SEC only if risk is tokenised or payouts are in crypto |
| **Classification** | Conditional permission, with a sandbox pathway under §5.0(vi) |
| **Key rules** | NIIRA 2025 ss. 200(1) and 201(1): licence required for microinsurance and electronic insurance.<br/>Insurtech Guidelines §4.1(g): partnering insurtechs may carry out "crop cutting, data collection and yield calculation".<br/>§12.1(iii): no product or dynamic pricing without actuarial support and NAICOM approval.<br/>NIIRA s. 60(1) and §14.4: advance premium; instant credit to the insurer.<br/>Microinsurance Guidelines 2018: ₦2 m sum-assured cap; 7-day claims settlement |
| **Licence or approval need** | Partnering insurtech registration (₦10 m capital plus ₦100 m indemnity, §14.1) under an approved SLA with a licensed underwriter or microinsurer.<br/>Product and actuarial approval of the index, triggers and payout table (§12.1(iii)), or sandbox admission (§5.0(vi)).<br/>Vendor approval for oracle or ledger infrastructure (§18.3(iii)(f)) |
| **Data and privacy** | Farmer names, phone numbers, account numbers and farm boundaries linked to a person stay off-chain (NDPA ss. 24, 34(1)(d)). Only grid-level index values and salted policy roots could be recorded. DPIA required (s. 28). Records kept for 10 years off-chain (§17.2(ii)) |
| **Payment and stablecoin** | Premiums and payouts in naira through USSD, PSBs or NIP. Crypto payouts need prior NAICOM approval (§12.1(vi)) |
| **Uncertainty level** | **Medium.** The licensing route is written down. Whether NAICOM's actuarial staff would approve a trigger based on satellite or oracle data without physical loss assessment is untested |
| **Further diligence** | **Specialist review required:** actuarial review of the index and Nigerian insurance counsel before any §12.1(iii) filing or sandbox application.<br/>Questions for NAICOM: (1) Does approval of an index product require NiMet ground-station validation alongside satellite data? (2) On what terms would an oracle-triggered pilot be admitted to the §5.0(vi) sandbox? |

### 4.2 Scan 2: UC2 Microinsurance Premium Collection and Pooling, Including Takaful

| Dimension | Assessment |
|---|---|
| **Relevant authorities** | NAICOM (NIIRA s. 200; Microinsurance and Takaful Guidelines; Insurtech Guidelines); CBN (collection rails); NDPC; NIMC; SEC if pool shares are tokenised |
| **Classification** | Conditional permission for an accounting record that mirrors funds held in a licensed insurer's bank account. Hard prohibition for an unlicensed on-chain pool that holds policyholder premiums |
| **Key rules** | NIIRA s. 200(1): licence required for Takaful and microinsurance.<br/>NIIRA s. 60(1): advance premium received by a licensed insurer (or broker under s. 60(2)).<br/>Insurtech §14.4: "Where premium is paid through an insurtech, the insurtech shall instantly credit the account of the insurer."<br/>Takaful Guidelines 2013: separation of *Tabarru'* and operator funds under an Advisory Council of Experts.<br/>§12.1(vi): no crypto premiums without approval |
| **Licence or approval need** | Risk carried by a licensed microinsurer, Takaful operator or general insurer.<br/>Technology operator registered as a partnering insurtech (§14.1) under an SLA (§8.0).<br/>For Takaful, Advisory Council of Experts certification of any on-chain accounting logic and NAICOM Takaful approval |
| **Data and privacy** | Member records and contribution histories off-chain (NDPA ss. 24, 34(1)(d)); only batched commitments on-chain. KYC data to the insurer within 3 days (§9.2(iv)) |
| **Payment and stablecoin** | Naira collection that credits the insurer's account at once (§14.4). The ledger would hold only receipts or hashes mirroring bank balances |
| **Uncertainty level** | **Medium.** Keeping money in the insurer's account avoids breaching s. 60(1) and §14.4 on paper. NAICOM and Shariah boards have not assessed an on-chain mirror, and daily or weekly micro-premiums raise questions under s. 60(1) |
| **Further diligence** | **Specialist review required:** Shariah review by an Advisory Council of Experts and insurance counsel.<br/>Questions: (1) How would NAICOM and Advisory Councils assess on-chain records of surplus sharing and interest-free deficit loans? (2) Does NAICOM treat daily or weekly deductions as a series of short policies that satisfy s. 60(1)? |

### 4.3 Scan 3: UC3 Shared Claims and Policy Verification Registry

| Dimension | Assessment |
|---|---|
| **Relevant authorities** | NAICOM (s. 207; Insurtech Guidelines); NDPC (ss. 24, 25, 28, 34, 41 to 44); Nigerian Insurers Association as operator of NIID. SEC and CBN not triggered |
| **Classification** | Conditional permission |
| **Key rules** | NIIRA s. 207(1) to (3): insurers must report suspected fraud to NAICOM and may disclose to law enforcement.<br/>Insurtech §18.3(iii)(f) to (g): prior approval for third-party technology vendors and changes of server location.<br/>§9.1(ii) and §9.2(viii): NDPA and Cybercrimes Act compliance; annual technology audit |
| **Licence or approval need** | Operation as an approved technology vendor or industry utility (§18.3(iii)(f)), in partnership with the NIA or participating insurers, or as a partnering insurtech offering claims support.<br/>NDPC registration as a controller or processor of major importance (s. 44) |
| **Data and privacy** | Plain-text names, NINs, BVNs or medical details on a public ledger would conflict with NDPA s. 24, s. 30, s. 34(1)(d) and possibly ss. 41 to 43, since Cardano validators operate outside Nigeria. A candidate design records only keyed or salted hashes of a standard claim key; source records stay in insurers' domestic systems where they can be corrected or erased. Whether hashes are personal data for transfer purposes is an open question for the NDPC. DPIA required (s. 28) |
| **Payment and stablecoin** | None. Any subscription fees in naira; the operator funds ledger fees |
| **Uncertainty level** | **Low to Medium (pending NDPC and NAICOM confirmation).** The fraud-reporting duty is explicit and no payment or asset rule applies. Neither regulator has addressed hashes on a public ledger, and §18.3(iii)(g) was written with conventional servers in mind. The comparison with an expanded NIID is a commercial question, examined in the Desk Research Report |
| **Further diligence** | **Specialist review required:** a licensed data protection compliance organisation for the DPIA and the cross-border question; insurance counsel on §18.3(iii).<br/>Questions: (1) Does the NDPC treat salted claim hashes held by validators abroad as a cross-border transfer? (2) Does NAICOM regard a public ledger as a third-party vendor or server location under §18.3(iii)? (3) Would NAICOM prefer the NIA to extend NIID? |

### 4.4 Scan 4: UC4 Reinsurance Treaty Reconciliation and Bordereaux

| Dimension | Assessment |
|---|---|
| **Relevant authorities** | NAICOM (NIIRA ss. 20, 40, 204; online portal); NDPC (any personal data in bordereaux); CBN (FX settlement only) |
| **Classification** | Conditional permission |
| **Key rules** | NIIRA s. 20: records kept by reinsurers.<br/>s. 204(1) to (5): domestic capacity first; prior written approval for offshore placement; penalty up to five times premium.<br/>s. 204(6): "no in-person engagement shall be required with the reinsurer by the insured or reinsured provided the insurer is able to demonstrate that there is adequate reinsurance of the risk in accordance with the reinsurance programme submitted to the Commission at the beginning of every year."<br/>s. 60(5): reinsurance governed by contract terms.<br/>§18.3(iii)(f); §17.2(ii) |
| **Licence or approval need** | Operation as approved middleware (§18.3(iii)(f)), by a licensed reinsurance broker (s. 40) or a partnering insurtech. No reinsurance underwriting licence (s. 15(1)(c)) if the service carries no risk |
| **Data and privacy** | Pseudonymised policy references in bordereaux; named-insured documents exchanged off-chain with only integrity hashes recorded |
| **Payment and stablecoin** | None if balances settle through banks. Stablecoin settlement moves the case into UC8 |
| **Uncertainty level** | **Low to Medium (pending NAICOM confirmation).** Section 204(6) permits remote administration of programme-compliant offshore reinsurance. It does not mention ledgers. How a ledger record would relate to filings already made through NAICOM's portal is unknown |
| **Further diligence** | **Specialist review required:** reinsurance regulatory counsel on s. 204 and §18.3(iii).<br/>Questions: (1) Would NAICOM's Reinsurance Directorate accept ledger records as evidence of capacity use, or does the portal already meet its needs? (2) What formats (spreadsheet, ACORD messages) do Continental Re, Africa Re, Nigeria Re and brokers use for bordereaux? |

### 4.5 Scan 5: UC5 Claims Automation and Settlement Audit

| Dimension | Assessment |
|---|---|
| **Relevant authorities** | NAICOM (s. 210; Insurtech §§4.1(e), 8.0(xvi), 12.1(iv)); NDPC (ss. 28, 30, 34, 37); CBN (payout rails) |
| **Classification** | Conditional permission for timestamping and for payment of claims a human has admitted. Hard prohibition on unsupervised automated rejection |
| **Key rules** | NIIRA s. 210(1) to (4) and (7): 60-day settlement; deduction from statutory deposit; fine and compound interest.<br/>Insurtech §12.1(iv): "Unsupervised automated claims rejections: Complete reliance on Artificial Intelligence (AI) systems to decline claims without human intervention" impermissible.<br/>§8.0(xvi): insurer responsible for claims disputes.<br/>NDPA s. 37: right not to be subject to a decision based solely on automated processing with legal or similar effects, subject to safeguards including human intervention |
| **Licence or approval need** | Partnering insurtech (§4.1(e)) under an SLA, or licensed loss adjuster (NIIRA ss. 48 to 52). Any design must route non-matching or disputed claims to a human adjuster before a rejection is issued |
| **Data and privacy** | Health and accident files are sensitive data (s. 30) and stay off-chain. A candidate design records pseudonymous claim IDs, state changes and signer keys only |
| **Payment and stablecoin** | Naira payout through NIP or bank APIs after admission |
| **Uncertainty level** | **Medium.** The line between permitted automation and prohibited rejection is written down. Whether NAICOM would give ledger timestamps any weight in s. 210 proceedings, beyond an insurer's audited log, is unknown |
| **Further diligence** | **Specialist review required:** insurance counsel and data protection counsel on §12.1(iv) and s. 37.<br/>Questions: (1) Would NAICOM's inspectorate and complaints staff accept ledger timestamps as evidence of s. 210 compliance? (2) How do Curacel and similar providers structure human review with Nigerian insurers? |

### 4.6 Scan 6: UC6 Beneficiary Verification for Life and Group Life

| Dimension | Assessment |
|---|---|
| **Relevant authorities** | NAICOM (NIIRA ss. 68 to 70, 210; §9.1.4); PenCom (Pension Reform Act 2014 s. 4(5)); NIMC; NDPC (ss. 24, 28, 30, 31, 34, 41 to 43) |
| **Classification** | Conditional permission |
| **Key rules** | NIIRA s. 68: group life requirements. s. 69: missing employees. ss. 70 to 73: limits and assignment.<br/>Pension Reform Act 2014 s. 4(5): employer group life of at least three times annual total emolument; PenCom benefit-administration circular effective 1 June 2025.<br/>Insurtech §9.1.4(ii) to (iv): authorised ID linkage, two-factor authentication, PKI to be considered.<br/>Succession law (wills, probate, letters of administration, customary and Islamic inheritance) governs entitlement above small-estate levels |
| **Licence or approval need** | Partnering insurtech (§4.1(c) to (e)) with a licensed life insurer (₦10 bn, s. 15(1)(b)). Licensed NIMC verification provider for NIN checks |
| **Data and privacy** | Family relationships, minors (s. 31) and biometric data (s. 30) stay off-chain. A credential design would record only issuer keys and revocation data |
| **Payment and stablecoin** | Naira to the verified beneficiary, estate or employer group life account |
| **Uncertainty level** | **Medium to High.** A credential cannot displace succession law or statutory beneficiary rules, and the 2025 PenCom change may already have reduced formal-sector delays |
| **Further diligence** | **Local counsel required:** succession, trust and pension law review before any design is proposed.<br/>Questions: (1) For policies below a sum-assured threshold such as ₦2 m, what proof of death and identity do insurers accept without a court grant? (2) Have formal group life delays fallen since 1 June 2025? |

### 4.7 Scan 7: UC7 Identity-Linked Enrolment and Reusable KYC

| Dimension | Assessment |
|---|---|
| **Relevant authorities** | NIMC (NIMC Act 2026); NAICOM (s. 202; §§9.1.4, 9.2(iv)); NDPC (ss. 24 to 28, 30, 34, 38, 41 to 44); NFIU (Money Laundering Act 2022); CBN where BVN is used |
| **Classification** | Conditional permission |
| **Key rules** | NIIRA s. 202(1): KYC, AML, CFT and CPF policies.<br/>§9.1.4(ii): registration linked to NIN, passport or driver's licence.<br/>§9.1.4(iv): "The Insurtech shall consider Public Key Infrastructure (PKI) for authentication."<br/>§9.2(iv): KYC to insurer within 3 days.<br/>NIMC Act 2026: NIMC's role in the National Public Key Infrastructure; penalties for unauthorised extraction of identity data.<br/>NDPA ss. 26 and 38: consent and portability |
| **Licence or approval need** | Partnering insurtech or approved vendor. Partnership with a licensed NIMC verification provider to perform the NIN check and issue any credential. NDPC registration (s. 44) and DPIA (s. 28) |
| **Data and privacy** | Under the candidate design, a licensed provider would issue an off-chain credential stating that a NIN was verified. No NIN, name or biometric would be written to the ledger; only the provider's public key and revocation data. A second insurer would receive the signed package with consent |
| **Payment and stablecoin** | None. Verification fees in naira |
| **Uncertainty level** | **Medium to High.** §9.1.4(iv) refers to PKI. Whether a credential may sit outside or alongside NIMC's National PKI role, and whether one insurer may rely on another's verification under s. 202 and the Money Laundering Act, are unanswered |
| **Further diligence** | **Specialist review required:** AML compliance counsel and a data protection compliance organisation; NIMC confirmation on the PKI framework.<br/>Questions: (1) May several insurers rely on one provider-signed verification, or must each run its own NIN check? (2) What do licensed providers charge per check for insurance onboarding? |

### 4.8 Scan 8: UC8 Stable-Value Settlement and Payment Rails

| Dimension | Assessment |
|---|---|
| **Relevant authorities** | NAICOM (§§12.1(vi), 14.4; NIIRA ss. 60(1), 204); SEC (ISA 2025; Digital Assets Rules; ARIP); CBN (VASP account rules; IMTO guidelines; FX rules; PSV 2028); NFIU; NDPC (ss. 41 to 43) |
| **Classification** | Conditional permission subject to several regulators at once; sandbox pathway |
| **Key rules** | §12.1(vi): crypto premiums or claims need prior NAICOM approval.<br/>§14.4 and s. 60(1): advance premium; instant credit to insurer.<br/>ISA 2025 s. 355: exchange or custody of stablecoins needs SEC authorisation.<br/>CBN 2023: banks may not hold or trade virtual assets for their own account; VASP accounts limited to two naira sweeps a quarter.<br/>CBN 2024: inbound IMTO remittances paid out in naira |
| **Licence or approval need** | Prior written NAICOM approval or sandbox admission. Partnership with an SEC-authorised VASP. Partnering insurtech licence |
| **Data and privacy** | Travel-rule data under the Money Laundering Act; wallet addresses must not be linkable to policyholders on-chain (NDPA ss. 24, 34(1)(d)) |
| **Payment and stablecoin** | Domestic: NIP already settles naira in seconds without any of these constraints, and cNGN is not on Cardano. Cross-border: a VASP could in principle convert a diaspora or reinsurance stablecoin payment and credit the insurer in naira or a domiciliary account, but this competes with PAPSS (PAPSS, n.d.), domiciliary accounts and licensed IMTOs and needs approval from three regulators |
| **Uncertainty level** | **High** |
| **Further diligence** | **Local counsel required:** joint insurance, capital-markets and banking counsel.<br/>Questions: (1) Has NAICOM received or granted any §12.1(vi) application? (2) If a VASP converts at the edge and the insurer receives naira, does NAICOM still treat the flow as crypto settlement? (3) Does WrappedCBDC plan a Cardano deployment of cNGN? |

---

## 5. Statutory Constraints and Candidate Design Hypotheses for Regulator Testing

Table 5.1 pairs each binding constraint with a design hypothesis that appears consistent with the text. None has been confirmed by a regulator. Each is a question for Milestone 3, not a compliance conclusion.

**Table 5.1: Constraints and design hypotheses**

| Constraint (source) | Design that would breach it | Candidate design hypothesis (subject to Milestone 3 regulator verification) |
|---|---|---|
| No crypto premiums or claims without prior approval (§12.1(vi)) | Requiring policyholders to hold ADA or stablecoins to pay or be paid | Naira at the user edge through NIP, PSBs or USSD; any ledger used only for records, with a §5.0(vi) or §12.1(vi) application for any cross-border token flow |
| Advance premium and instant credit to the insurer (s. 60(1); §14.4) | Holding premiums in an on-chain pool before they reach a licensed insurer | Premiums credited to the insurer's or *Tabarru'* account at once; any ledger records receipts only |
| No unsupervised automated rejection (§12.1(iv); NDPA s. 37) | A contract or oracle that issues a final rejection | Automation limited to payment of claims a human has admitted; every non-matching claim routed to a human adjuster |
| Erasure and sensitive data (NDPA ss. 24, 30, 34(1)(d), 41 to 43; §9.1(ii)) | Names, NINs, BVNs, farm coordinates, diagnoses or fraud flags on a public ledger | Personal data kept in domestic systems for the 10-year retention period (§17.2(ii)); only salted hashes, Merkle roots, credential keys or proofs on-chain, subject to NDPC views on cross-border transfer |
| Licensing of electronic insurance and insurtechs (ss. 200, 201; §§1.2, 14.1, 18.3(iii)(f)) | An unlicensed application selling cover to Nigerian residents | A Nigerian partnering insurtech or approved vendor working under an SLA with a licensed insurer |
| Authorised identity checks and National PKI (NIMC Act 2026; §9.1.4(ii) to (iv); NIIRA s. 202) | Extracting NIN records into an unauthorised credential store or treating a ledger DID as a sovereign trust root | NIN verification executed by a NIMC-licensed provider under the National PKI framework, with any credential issued off-chain and subject to NIMC and NAICOM confirmation on AML reliance |

---

## 6. What This Scan Cannot Establish

The scan reads rules. It cannot say how NAICOM, the NDPC, the SEC, the CBN, NIMC or PenCom would apply them to a specific design, how long approvals take, or whether any regulator would sponsor a pilot (Milestone 1 RQ3.3). Those questions go to Module 1 interviews in Milestone 3. Where a Desk-Identified regulator cannot be interviewed directly, Milestone 1 Bias Control 6 applies: a former official or licensed intermediary is substituted, and the confidence grade for that finding is lowered and disclosed.
