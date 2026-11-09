---
title: "ASISA: Regional Screening Review Briefing Pack"
sidebar_label: "Regional Screening Briefing"
sidebar_position: 6
---

# Regional Screening Review Briefing Pack

**Prepared for:** The Cardano Product Committee (CPC), Intersect  
**Project:** Cardano Market Entry into Nigeria Through Blockchain-Enabled Insurance (`CPC-26-0014` / `ER-0004b-25`)  
**Organisation:** Actuarial Science and Insurance Students Association, Ahmadu Bello University (ASISA ABU), Zaria, Nigeria  
**Principal Investigator:** Odufuwa O. Oluwakayode  
**Checkpoint:** Regional Screening Review (Gate A: Close of Desk Research and Ecosystem Mapping)  
**Classification:** Public (Contract Clause 4.1) · Licence CC BY 4.0

---

## 1. Checkpoint Purpose and How It Operates

This briefing pack summarises the Milestone 2 desk findings for the Regional Screening Review set out in Milestone 1 §3.4 and §9.6. Within the Intersect repository workflow, written review and sign-off on Milestone 2 (`PR #75`) by the Cardano Product Committee serves as the asynchronous checkpoint record before formal Milestone 3 interview invitations are sent.

This checkpoint does not make a market-entry decision. That decision belongs to Gate C in Milestone 4, once primary interviews, field visits and Phase 5 corroboration are complete. Its purpose here is narrower:

1. Confirm whether any candidate use case hits an outright statutory ban in primary Nigerian law;
2. Place the existing Nigerian centralised systems and statutory rules in plain view alongside Cardano's current middleware limits;
3. Record why zero cells in the Gate A scorecard reach `Strong` on secondary evidence alone; and
4. Confirm the `40% / 40% / 20%` allocation of Milestone 3 interview depth across the eight open hypotheses, alongside any `RFP 01`, `03`, `06`, `07` and `08` handoff coordination.

---

## 2. Six Desk Findings Entering Primary Fieldwork

### Finding 1: Nominal Premium Growth Coexists With 3% Adult Insurance Uptake
Gross written premium rose in nominal naira from about ₦1.003 trillion in 2023 to ₦1.562 trillion in 2024 and between ₦2.30 trillion and ₦2.35 trillion in 2025 (NAICOM, 2025b), largely reflecting naira depreciation on dollar-linked corporate risks and repriced motor tariffs rather than broader retail coverage. Only 3% of adults hold any insurance product despite 64% formal financial inclusion (EFInA, 2023), and penetration remains near 0.4% to 0.5% of GDP. Following enactment of the Nigerian Insurance Industry Reform Act (NIIRA) 2025, NAICOM confirmed on 2 August 2026 that 43 insurers and reinsurers had met the new capital floors (₦15 billion non-life, ₦10 billion life, ₦35 billion reinsurance), with 8 more in final verification (NAICOM, 2026a). NIIRA 2025 s. 210 enforces a 60-day settlement limit on admitted claims, backed by CBN statutory-deposit deductions and monthly compound interest.

### Finding 2: Every Candidate Use Case Faces an Operating Non-Blockchain Incumbent
Desk review identified active centralised institutions or Web2 platforms in every single use-case slot:
- **UC1 (Parametric agriculture):** `NAIC`, `NIRSAL` and `Pula` already structure and administer index cover off-chain; basis risk across `NiMet`'s roughly 42 to 54 manned synoptic stations is a weather-station density problem that Plutus cannot fix.
- **UC2 (Microinsurance and Takaful):** Licensed Takaful operators segregate *Tabarru'* funds in bank accounts under Advisory Councils of Experts and external audit; collection runs on USSD, NIBSS Instant Payments, PSBs and agency banking.
- **UC3 (Shared claims registry):** The Nigerian Insurers Association already runs the central Nigerian Insurance Industry Database (`NIID`, `askNIID` and `*565*11#` USSD) for motor, marine and statutory liability policy verification. Extending `NIID` centrally is the default benchmark unless competitive confidentiality or non-NIA writers prevent central claims sharing.
- **UC4 (Reinsurance reconciliation):** NAICOM's online regulatory portal (`portal.naicom.gov.ng`) already receives s. 204 programme and offshore-placement filings, Lagos reinsurers (`Africa Re`, `Continental Re`) run SAP FS-RI and DXC SICS, and the global `B3i` reinsurance DLT consortium failed in 2022.
- **UC5 (Claims SLA audit):** Web2 claims vendors (`Curacel`, `Octamile`) and NIBSS Instant Payments already automate post-admission payouts, while insurer databases undergo annual technology audits (§9.2(viii)).
- **UC6 (Beneficiary verification):** Formal employer group life runs through pension fund administrators, PenCom removed prior approval for death payouts from 1 June 2025, and High Court probate or Islamic/customary succession law governs disputed estates.
- **UC7 (Reusable KYC):** NIMC-licensed verification providers (`Smile ID`, `Seamfix`, `Prembly`, `QoreID`) verify NIN and BVN by API in seconds for roughly ₦10 to ₦100 under the NIMC Act 2026 National PKI framework.
- **UC8 (Stablecoin settlement):** NIBSS Instant Payments processed roughly 11 billion naira transfers (about ₦1.07 quadrillion) in 2024 in seconds, while `PAPSS` and CBN's 2024 IMTO naira-payout rule cover regional and inbound remittance channels.

### Finding 3: 2025 and 2026 Nigerian Rules Narrow Permissible Ledger Designs to Back-Office Records
Direct review of primary instruments established five hard design boundaries:
1. **Crypto payment gate (`NAICOM Insurtech Guidelines §12.1(vi)`):** Accepting premiums or paying claims in cryptocurrency is impermissible without prior NAICOM approval.
2. **Advance-premium and instant-credit gate (`NIIRA 2025 s. 60(1)`; `Insurtech Guidelines §14.4`):** Premium is a condition precedent to cover and must instantly credit a licensed insurer's bank account, ruling out unlicensed on-chain risk pools.
3. **Human-review gate (`Insurtech Guidelines §12.1(iv)`; `NDPA 2023 s. 37`):** Unsupervised automated claim rejections are prohibited; automation is confined to post-admission payment and timestamping.
4. **Erasure and data-protection gate (`NDPA 2023 ss. 24, 30, 34(1)(d), 41 to 43`):** Personal, health and farm-location data linked to individuals must stay off-chain in domestic systems; whether salted hashes replicated to foreign validator nodes count as cross-border transfers requires NDPC confirmation.
5. **National PKI and VASP gates (`NIMC Act 2026`; `ISA 2025 s. 355`; `CBN 2023 VASP circular`):** Identity credentials sit under NIMC's statutory PKI mandate, and VASP bank settlement accounts are capped at two naira sweeps per quarter.

### Finding 4: Cardano Mainnet Has Concrete Middleware and Operator Gaps for Nigerian Insurance
At protocol version 11.0 (captured October 2026; re-checked 6 November 2026), Cardano provides predictable transaction fees (`0.155381 ADA` base plus `44 lovelace/byte`), but four constraints stand out:
1. **Minimum UTxO deposit and fee currency:** Locking `1.0 to 1.5 ADA` per UTxO (`4,310 lovelace/byte`) with no active protocol-level fee payment in non-ADA tokens makes per-policy retail UTxOs uneconomic without Merkle batching and operator ADA fee sponsorship.
2. **No naira stablecoin on Cardano:** Regulated `cNGN` operates on eight other networks and is absent from Cardano (`RFP 03`).
3. **Missing Nigerian weather feeds and oracle concentration:** Neither `Charli3` nor `Orcfax` carries Nigerian weather or yield data (`RFP 07`). On 27 March 2026 `Orcfax` announced a halt to research, development and platform enhancement for lack of funding, with a contingency wind-down date of 31 July 2026.
4. **Early-stage identity and privacy connectors:** `Hyperledger Identus` and `Veridian` (spun out by the Cardano Foundation in October 2026) have no published connector to NIMC verification providers, and `Midnight` entered an early federated mainnet (*Kūkolu*) on 17 March 2026 (`RFP 06`).

### Finding 5: Comparative Evidence From Kenya, Ghana and South Africa Points Away From User-Facing Crypto
Across all four countries, virtual assets and personal data sit under statutory supervision (Nigeria `ISA 2025` and `NDPA 2023`; Kenya `VASP Act 2025` and `DPA 2019`; Ghana `Act 1154` and `Act 843`; South Africa `FAIS Notice 1350` and `POPIA 2013`). The main East African smallholder precedent (`Etherisc` and `ACRE Africa` in Kenya) hid the ledger entirely behind M-Pesa mobile money and relied on donor and climate-finance subsidies, leaving unsubsidised commercial viability unproven.

### Finding 6: Gate A Withholds `Strong` Across All 72 Cells and Keeps All Eight Hypotheses Open for Falsification
Applying Milestone 1 §§3.4, 5.3 and 5.4, the Gate A provisional screen scores **`0 Strong · 30 Conditional · 42 Weak (26 W + 16 W*) · 0 Disqualifying`** across 72 cells, with **`Low` desk-only confidence** on every use case.

---

## 3. Gate A Priority Bands Entering Milestone 3 (`40% / 40% / 20%`)

**Table 3.1: Provisional Milestone 3 interview allocation (tentative pre-interview estimates)**

| Band | Order and candidate use case | Gate A cell tally (`S · C · W · D`) | Regulatory uncertainty (Reg. Scan) | Share of M3 interview depth | Core empirical test for Milestone 3 interviews |
|---|---|---|---|---:|---|
| **Band 1** | **#1 UC3:** Shared claims registry<br/>**#2 UC5:** Claims SLA audit<br/>**#3 UC4:** Reinsurance reconciliation | `0S · 7C · 2W* · 0D`<br/>`0S · 6C · 3W · 0D`<br/>`0S · 5C · 4W · 0D` | Low to Medium (`UC3`, `UC4`); Medium (`UC5`) | **40%** | Test whether commercial confidentiality blocks central `NIID` expansion (`UC3`), whether NAICOM values external timestamps above audited insurer logs under s. 210 (`UC5`), and whether treaty version disputes survive `NAICOM` portal filings and `B3i` failure lessons (`UC4`) |
| **Band 2** | **#4 UC2:** Microinsurance and Takaful<br/>**#5 UC1:** Parametric agriculture<br/>**#6 UC7:** Reusable KYC | `0S · 4C · 5W · 0D`<br/>`0S · 3C · 6W · 0D`<br/>`0S · 2C · 7W · 0D` | Medium (`UC1`, `UC2`); Medium to High (`UC7`) | **40%** | Test whether Shariah boards see any audit gap in bank-held *Tabarru'* accounts (`UC2`), whether crop disputes stem from calculation distrust rather than station basis risk and missing oracles (`UC1`), and whether ₦10 to ₦100 VSP APIs leave any micro-policy KYC problem (`UC7`) |
| **Band 3** | **#7 UC6:** Beneficiary verification<br/>**#8 UC8:** Stablecoin settlement | `0S · 2C · 7W · 0D`<br/>`0S · 1C · 8W · 0D` | Medium to High (`UC6`); High (`UC8`) | **20%** | Test whether any informal micro-life niche sits outside probate and PenCom's June 2025 PFA reform (`UC6`), and confirm whether `UC8` lacks a viable 12 to 24 month regulatory path and should be handed off to `RFP 03` |

---

## 4. Questions for CPC Review

1. **Interview depth split (`40% / 40% / 20%`):** Does the CPC agree with allocating 40% of Milestone 3 interview depth to Band 1 (`UC3`, `UC5`, `UC4`), 40% to Band 2 (`UC2`, `UC1`, `UC7`) and 20% to Band 3 (`UC6`, `UC8`), keeping all eight open under Milestone 1 §3.4?
2. **Active Cardano technical contacts and Cross-RFP links:** Given `Orcfax`'s March 2026 development halt, can Intersect or the CPC share technical points of contact for active teams at **Charli3** (`D13`), **Hyperledger Identus / Veridian** (`D15`), **Midnight** (`D17`) and adjacent workstreams (`RFP 01`, `03`, `06`, `07`, `08`) so Wave 3 integration cost estimates use realistic operator figures?
3. **No-Go discipline at Gate C (Milestone 4):** In line with Milestone 1 §5.4, where Milestone 3 primary evidence shows that expanding an incumbent Nigerian system (`NIID`, `NAICOM` portal, `NIBSS NIP` or `NIMC` VSP APIs) is cheaper and adequate, the study will recommend a `No-Go` for that use case rather than forcing a ledger design. Does the CPC have any additional comparative questions it wishes added before Wave 1 invitations go out?
