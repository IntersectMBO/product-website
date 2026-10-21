---
title: "ASISA — Regional Screening Review Briefing Pack"
sidebar_label: "Regional Screening Briefing"
sidebar_position: 6
---

# Deliverable 5: Regional Screening Review Briefing Pack

**Prepared for:** The Cardano Product Committee (CPC), Intersect  
**Project:** Cardano Market Entry into Nigeria Through Blockchain-Enabled Insurance (`CPC-26-0014` / `ER-0004b-25`)  
**Organisation:** Actuarial Science and Insurance Students Association, Ahmadu Bello University (ASISA ABU), Zaria, Nigeria  
**Principal Investigator:** Odufuwa O. Oluwakayode  
**Checkpoint:** Regional Screening Review (Gate A — End of Desk Research & Ecosystem Mapping)  
**Classification:** Public (Contract Clause 4.1) · Licence CC BY 4.0  

---

## 1. Checkpoint Purpose and Decision Scope

This Briefing Pack is prepared for the **Cardano Product Committee (CPC) Regional Screening Review** at the conclusion of Milestone 2 (Desk Research, Preliminary Regulatory Scan, Stakeholder Ecosystem Mapping, and Gate A Provisional Screen). Its objective is to provide the CPC with a concise, decision-ready synthesis of the empirical evidence gathered during Phase 2 and Phase 3 and to confirm the priority ordering of the eight candidate use cases entering Milestone 3 primary stakeholder consultations.

In accordance with Milestone 1 Section 3.4, this checkpoint does **not** make a final market-entry Go/No-Go decision (which occurs at Gate C in Milestone 4 after primary fieldwork and scoring). Instead, it verifies:

1. Whether any candidate use case encounters a verified primary-statute **Hard Prohibition** in Nigeria;
2. How the newly enacted **2025–2026 Nigerian statutory framework** constrains or enables Cardano's technical architecture;
3. How Nigeria compares structurally against **Kenya, Ghana, and South Africa** across nine regulatory and market dimensions; and
4. Whether the **Gate A Provisional Priority Tiers** (`Tier 1: 45%`, `Tier 2: 40%`, `Tier 3: 15%` of Milestone 3 interview depth) align with CPC strategic priorities.

---

## 2. Six Core Findings from Milestone 2 Desk Research

### Finding 1 — Post-Recapitalisation Market Consolidation Creates Acute Compliance Demand Among 43 Verified Nigerian Underwriters
While Nigerian Gross Written Premium grew nominally to **₦1.562 trillion in 2024** and **₦2.30–₦2.35 trillion in 2025**, retail insurance uptake remains at **3% of adults** (EFInA, 2023) and GDP penetration stands at **~0.4%–0.5%**. On **2 August 2026**, NAICOM confirmed the completion of the 12-month statutory recapitalisation under **Section 15 of the Nigerian Insurance Industry Reform Act (NIIRA) 2025** (₦15bn non-life, ₦10bn life, ₦35bn reinsurance), verifying **43 compliant insurance and reinsurance companies** (plus 8 in final verification). These capitalised operators now face strict statutory enforcement under NIIRA 2025: a **60-day settlement deadline on admitted claims** backed by direct deduction from CBN statutory deposits and monthly compound interest penalties (**s. 210(2), (3), (7)**), mandatory **fraud reporting** (**s. 207(1)**), and **Risk-Based Capital supervision** (**ss. 24–26**).

### Finding 2 — The NAICOM Insurtech Guidelines (Effective 1 August 2025) Establish a Low-Capital Entry Vehicle (`Partnering Insurtech`) alongside Explicit Crypto and AI Red Lines
Direct inspection of the *NAICOM Guidelines for Insurtech Operations in Nigeria* (effective 1 August 2025) reveals a clear regulatory pathway coupled with three architectural red lines:
- **Low-Barrier Licensing Pathway:** Under **§2.1, §4.1, and §14.1**, a **Partnering Insurtech** partnering with a licensed underwriter requires **₦10,000,000 (~$6,500) minimum capital** plus a **₦100,000,000 Professional Indemnity policy** (compared to ₦1.0bn–₦1.5bn for a Standalone Insurtech and ₦10bn–₦35bn for a full underwriter), and may enter the **NAICOM Regulatory Sandbox (§5.0(vi))**.
- **Explicit Crop-Data & PKI Endorsement:** **§4.1(g)** explicitly permits Partnering Insurtechs to perform *"crop cutting, data collection and yield calculation"*, and **§9.1.4(iv)** directs insurtechs to *"consider Public Key Infrastructure (PKI) for authentication."*
- **Three Statutory Red Lines:**
  1. **§12.1(vi) (Crypto Gate):** Prohibits *"Acceptance of premiums or settlement of claims in cryptocurrency without prior approval of the Commission."*
  2. **§12.1(iv) (Human-in-the-Loop Gate):** Prohibits *"Complete reliance on Artificial Intelligence (AI) systems to decline claims without human intervention"* (reinforced by **NDPA 2023 s. 37**).
  3. **§14.4 & NIIRA s. 60(1) (Instant Insurer Credit Gate):** Requires advance premium payment and mandates that premiums collected by an insurtech **shall instantly credit the account of the licensed insurer**—forbidding unlicensed on-chain DeFi liquidity pools from holding retail premiums.

### Finding 3 — NIIRA 2025 Section 204(6) Directly Opens Digital Cross-Border Reinsurance Reconciliation
While **NIIRA 2025 Section 204(3)** requires full utilisation of domestic capacity before offshore reinsurance placement, **Section 204(6)** introduces a landmark digital modernisation clause: where a risk is reinsured abroad under the annual reinsurance programme submitted to NAICOM, ***"no in-person engagement shall be required with the reinsurer by the insured or reinsured."*** Combined with **Section 60(5)** (exempting reinsurance contracts from retail prepayment rigidity), this creates a clear legal foundation for Cardano-based treaty bordereaux reconciliation (**UC4**).

### Finding 4 — NDPA 2023 Mandates Off-Chain PII and Salted Cryptographic Commitments
Under the **Nigeria Data Protection Act (NDPA) 2023 (Act No. 37 of 2023)**, data subjects hold an enforceable **right to erasure without undue delay (s. 34(1)(d))**, and health/biometric records constitute protected **sensitive personal data (s. 30)**. Storing plain-text policyholder names, NINs, BVNs, medical codes, or fraud accusations on the Cardano L1 ledger would breach Nigerian law. All candidate architectures must keep raw PII in encrypted off-chain domestic databases (retained for 10 years per **Insurtech Guidelines §17.2(ii)**) and anchor only **salted `Blake2b-256` hashes, Merkle roots, Hyperledger Identus DIDs/revocation lists, or Midnight zero-knowledge proofs** on-chain.

### Finding 5 — Cardano Technical Audit Identifies Three Concrete Middleware Requirements for Nigeria
Querying live Cardano mainnet parameters (Protocol v11.0: `txFeeFixed = 0.155381 ADA`, `txFeePerByte = 0.000044 ADA/byte`, `utxoCostPerByte = 0.004310 ADA/byte`) and ecosystem infrastructure establishes three technical realities:
1. **Batching & Fee Sponsorship Required for Micro-Policies:** Because creating an individual UTxO locks **~1.0–1.5 ADA** (`utxoCostPerByte = 4,310 lovelace/byte`) and protocol-level **Babel fees are not active on mainnet**, retail/microinsurance use cases (`UC1`, `UC2`) must use **ward/cooperative-level EUTxO Merkle-root batching** (&lt;0.001 ADA per policy) and **application-layer fee sponsorship** funded in fiat Naira.
2. **No Native Naira Stablecoin (`cNGN`) on Cardano:** Regulated `cNGN` (WrappedCBDC Ltd under SEC ARIP) is live on eight non-Cardano chains (Base, BNB, Celo, Ethereum, Polygon, Solana, Bantu, AssetChain) but **not on Cardano**. Meanwhile, domestic NIBSS Instant Payments (NIP) already settle Naira in seconds across all banks and PSBs, restricting on-chain stablecoin utility (`UC8`) to **cross-border reinsurance and diaspora-funded policies** using `USDM`/`USDA` or bridged rails.
3. **Custom Nigerian Agro-Meteorological Oracle Adapter Needed:** Cardano's native oracles (**Charli3** and **Orcfax**) provide financial/FX feeds and proof-of-reserve attestations, **not** calibrated Nigerian weather feeds. Deploying **UC1** requires a dedicated oracle adapter signing **NiMet** ground-station and **CHIRPS/NDVI** satellite indices onto Cardano.

### Finding 6 — Comparative African Screen Shows B2B Compliance Rails Can Deploy Immediately, While Retail Parametric Rails Should Copy Kenya's Fiat-Abstracted Model
Across **Nigeria, Kenya, Ghana, and South Africa**, all four jurisdictions now regulate virtual assets under formal statutory regimes (Nigeria *ISA 2025*; Kenya *VASP Act No. 20 of 2025*, effective 4 Nov 2025; Ghana *VASP Act 2025, Act 1154*; South Africa *FAIS Notice 1350 of 2022*). Kenya's Etherisc/ACRE Africa parametric deployments succeeded by abstracting blockchain smart contracts completely behind M-Pesa and USSD fiat rails. In Nigeria, pairing **B2B compliance middleware (`UC3`, `UC4`, `UC5`)** for immediate post-recapitalisation institutional adoption with **fiat-abstracted Partnering Insurtech pilots (`UC1`, `UC7`, `UC2`)** offers the highest probability of commercial traction.

---

## 3. Summary of Gate A Provisional Priority Tiers (`[Preliminary — Desk Evidence Only]`)

In accordance with the **Design Lock** of Milestone 1 Section 6.3, Table 3.1 summarises the provisional scores across the locked nine criteria (`C1`–`C9`) using the four-level ordinal scale (`Strong [S]`, `Conditional [C]`, `Weak [W]`, `Disqualifying [D]`). Zero candidates receive a `Disqualifying (D)` score at Gate A.

| Priority Tier | Rank & Candidate Use Case | Gate A Ordinal Tally (`S / C / W / D`) | Regulatory Posture & Appendix D Status | Proposed Share of M3 Fieldwork | Strategic Rationale for CPC Review |
|---|---|---|---:|---|
| **Tier 1: Primary Fieldwork Emphasis** | **#1 — UC3:** Fraud-resistant shared claims registry<br/>**#2 — UC4:** Reinsurance treaty reconciliation<br/>**#3 — UC5:** Claims automation (smart adjudication) | **`7S · 2C · 0W · 0D`**<br/><br/>**`5S · 4C · 0W · 0D`**<br/><br/>**`3S · 6C · 0W · 0D`** | Conditional Permission (Low friction; zero crypto/VASP gates; aligned with NIIRA ss. 204(6), 207, 210; Appendix D core primitives `Met`/`Partial`) | **45%** | Directly addresses post-recapitalisation underwriter pain points (duplicate claim fraud, treaty reconciliation lags, and the 60-day statutory settlement penalty) using B2B API + Cardano hash/state anchoring without retail wallet or crypto-licensing friction. |
| **Tier 2: High-Impact Retail, Agri, Takaful & ID Emphasis** | **#4 — UC1:** Parametric agricultural insurance<br/>**#5 — UC2:** Microinsurance & Takaful pooling<br/>**#6 — UC7:** Identity-linked enrolment (Portable KYC) | **`2S · 6C · 1W · 0D`**<br/><br/>**`2S · 7C · 0W · 0D`**<br/><br/>**`2S · 6C · 1W* · 0D`** | Conditional Permission / Sandbox (§4.1(g) crop data, §5.0(vi) sandbox, §9.1.4(iv) PKI, §14.4 bank custody; UC1 weather oracle `Unmet` on Cardano) | **40%** | Addresses Nigeria's 97% retail exclusion gap and Northern Nigeria's Takaful market, provided architectures use NIBSS/PSB fiat settlement, bank-custodied risk pools, ward-level EUTxO batching, Hyperledger Identus PKI credentials, and a custom NiMet/satellite oracle adapter. |
| **Tier 3: Targeted Niche & Conditional Probes** | **#7 — UC6:** Beneficiary verification<br/>**#8 — UC8:** Stable-value settlement & payment rails | **`1S · 7C · 1W* · 0D`**<br/><br/>**`0S · 4C · 5W · 0D`** | Conditional Permission (UC6 shares UC7 stack; UC8 faces §12.1(vi) NAICOM prior-approval + SEC/CBN VASP gates + `Unmet` native `cNGN` on Cardano) | **15%** | Tested as targeted probes: UC6 is evaluated alongside UC7 as an Identus VC extension for Group Life (NIIRA ss. 68–70), while UC8 is tested specifically for diaspora premium remittance and cross-border reinsurance rather than domestic retail payments. |

---

## 4. Alignment Questions and Cross-RFP Handoff Signals for the Cardano Product Committee (CPC)

At the Regional Screening Review, the Principal Investigator requests CPC confirmation or feedback on three operational items before Milestone 3 interview invitations are dispatched:

1. **Confirmation of Gate A Provisional Re-Ordering (45% / 40% / 15% Split):** Does the CPC concur with allocating 45% of Milestone 3 interview depth to the high-readiness B2B institutional use cases (`UC3`, `UC4`, `UC5`), 40% to the high-inclusion retail/agricultural/Takaful/identity use cases (`UC1`, `UC2`, `UC7`), and 15% to the targeted niche probes (`UC6`, `UC8`), while keeping all eight candidates open per Milestone 1 Section 3.4?
2. **Cardano Ecosystem Technical Introductions & Cross-RFP Coordination (Archetype D & Appendix D):** Can the CPC or Intersect facilitate warm technical introductions during Milestone 3 to **Hyperledger Identus / Cardano Foundation Identity (`Veridian`)**, **Midnight** (`RFP 06`), **Charli3 / Orcfax** (`RFP 07`), and **stablecoin liquidity workstreams** (`RFP 03`) to validate the custom Nigerian weather-oracle adapter, NIN-linked Verifiable Credential specifications, and `cNGN`/`USDM` settlement pathways?
3. **Framing of Fiat-Abstracted vs Token-Settled Architectures:** Does the CPC support prioritising **fiat-settled, fee-sponsored Cardano state/hash/credential architectures** where required by **NAICOM Insurtech Guidelines §12.1(vi) and §14.4**, while reserving token/stablecoin settlement analysis for NAICOM §5.0(vi) Sandbox and cross-border/diaspora scenarios?
