---
title: "ASISA: Desk Research Report and Comparative African Screen"
sidebar_label: "Desk Research Report"
sidebar_position: 2
---

# Desk Research Report: Market Framing, Literature Map and Comparative African Screen

**Project:** Cardano Market Entry into Nigeria Through Blockchain-Enabled Insurance (`CPC-26-0014` / `ER-0004b-25`)  
**Organisation:** Actuarial Science and Insurance Students Association, Ahmadu Bello University (ASISA ABU), Zaria, Nigeria  
**Principal Investigator:** Odufuwa O. Oluwakayode  
**Classification:** Public (Contract Clause 4.1) · Licence CC BY 4.0

---

## 1. Scope, Evidence Rules and Link to the Research Design

This report is the Market Framing Document of the study. It covers the desk research and literature review (Phase 2) and the comparative jurisdictional work of Phase 3 set out in the Milestone 1 Research Design. It uses secondary and tertiary sources only: statutes, regulator publications, official statistics, peer-reviewed studies, operator documentation and press reporting. No interview, meeting or field visit has taken place. Every conclusion below is therefore provisional.

That boundary matters for how the report should be read. Desk sources can show that a rule exists, that a market statistic was published, or that an incumbent system operates. They cannot show whether Nigerian insurers, regulators or policyholders want a ledger-based alternative, would pay for one, or would trust one. Those questions belong to the primary research in Milestone 3.

### 1.1 Evidence Classes

Three labels are used throughout the Milestone 2 pages:

- **Finding.** A statement taken from an opened primary or secondary source and cited.
- **Inference.** A deduction the research team draws from stated findings. Each inference names what it rests on and is treated as a hypothesis for Milestone 3.
- **Data gap.** A question the public record does not answer, marked `[DATA GAP: ...]` with the Milestone 3 instrument that will address it.

The study applies Milestone 1's no-go default (Milestone 1 §5.4). Every candidate use case is presumed unviable until independent evidence shows otherwise. For each one, this report therefore starts from the Nigerian system that already does the job, and asks what a distributed ledger would have to add. In several cases the honest desk answer is "probably nothing".

### 1.2 Theoretical Anchoring

Milestone 1 Chapter 2 fixed four theoretical lenses. Table 1.1 shows what desk evidence can contribute under each lens, where it stops, and which Milestone 3 instrument picks up the question.

**Table 1.1: Theoretical lenses, desk contribution and Milestone 3 handover**

| Lens (Milestone 1) | What desk evidence can establish | Where desk evidence stops | Research question | Milestone 3 instrument |
|---|---|---|---|---|
| Diffusion of innovations (Rogers, 2003) | Whether a candidate offers relative advantage on paper over named incumbents; compatibility with statutes and existing rails | Whether adopters perceive that advantage; observability of a back-end ledger to end users | RQ1, RQ2, RQ5 | Modules 2, 3 and 5, Part A questions first |
| Institutional theory (DiMaggio & Powell, 1983) | Coercive pressure from NIIRA 2025, the NAICOM Insurtech Guidelines, NDPA 2023, ISA 2025 and the NIMC Act 2026; absence of mimetic precedent (no live blockchain insurance product in Nigeria was found) | Whether regulators or professional bodies would legitimise a ledger-based product | RQ3, RQ4 | Modules 1 and 4 |
| Institutional economics (North, 1990; Williamson, 1981; Olson, 1965) | Which frictions look technological and which may be sustained by incentives, such as float on delayed claims or reluctance to share client data | The actual weight of those incentives inside firms, and switching-cost thresholds (Farrell & Klemperer, 2007) | RQ1, RQ4 | Module 2, questions A2, A5 and T7 |
| TAM with trust (Davis, 1989; Gefen et al., 2003) | Constraints on usability: USSD reliance, language, inactive protocol-level fee abstraction on Cardano | Where policyholders place their trust (insurer, cooperative, regulator, bank alert or ledger) | RQ5 | Module 5 in Hausa, Yoruba, Igbo, Nigerian Pidgin or English |

### 1.3 Desk Status of the Core Hypotheses

**Table 1.2: Core hypotheses (Milestone 1 §2.6) after desk review**

| Hypothesis | Desk signal (secondary sources only) | What Milestone 3 must show to confirm or reject |
|---|---|---|
| **H1:** Opportunities differ by use case; no single generic blockchain approach fits | Consistent with desk evidence. Each use case faces a different incumbent (Section 4) and a different rule set (Preliminary Regulatory Scan) | Interviewees describe distinct problems and distinct incumbents per line of business |
| **H2:** Some opportunities are blocked less by technology than by regulation, trust, distribution economics or settlement constraints | Consistent with desk evidence. NAICOM Insurtech Guidelines §12.1(vi) and §14.4, NIIRA 2025 s. 60(1) and the CBN VASP circular constrain settlement designs irrespective of the ledger used | Regulators and underwriters name non-technical barriers before technical ones in Part A answers |
| **H3:** Stablecoin and off-ramp access matter for payment-linked use cases, less for verification use cases | Consistent on paper. UC8 depends on stablecoins that are absent or thin on Cardano; UC3, UC5 and UC7 do not | Payment and VASP interviews confirm the dependency; verification interviews do not raise it |
| **H4:** Regulators and trade bodies may act as legitimacy and coordination partners before they become users | Open. The NIA already coordinates a shared database (NIID); NAICOM already runs an online regulatory portal. Both are coordination roles | NIA, NAICOM, CIIN and NCRIB describe the role they would or would not play |
| **H5:** The strongest entry play combines a concrete use case, a reachable counterparty, a local delivery model and an adoption signal; some promising candidates will prove cosmetic | Open. Desk work cannot observe adoption signals | Adoption-signal thresholds (Milestone 1 Bias Control 9) applied to interview evidence |

---

## 2. Empirical Baseline of the Nigerian Insurance Market

### 2.1 Scale, Premium Growth and Claims

**Finding.** Gross written premium (GWP) passed ₦1 trillion in 2023 at about ₦1.003 trillion, reached about ₦1.562 trillion in 2024 and between ₦2.30 trillion and ₦2.35 trillion in 2025 (NAICOM, 2025b). Non-life business accounted for roughly 68% to 70% of GWP in both years, led by oil and gas, fire and motor. Life business was led by group life and annuities.

Claims figures differ by source. NAICOM market reviews report full-industry claims of about ₦622 billion for 2024 and between ₦724.7 billion and ₦882 billion for 2025 (NAICOM, 2025b). Press reporting of company filings gives ₦216.9 billion for 2024 and ₦307.2 billion for 2025 (BusinessDay, 2026a). The two series use different bases (full industry versus a subset of reporting companies, and gross versus net). Both are shown here. The study does not average them.

**Finding.** The Nigerian Insurance Industry Reform Act (NIIRA) 2025, assented on 31 July 2025, sets minimum capital at ₦15 billion for non-life insurers, ₦10 billion for life insurers and ₦35 billion for reinsurers, or a risk-based capital figure set by NAICOM if higher (NIIRA 2025 s. 15(1)). Primary-text review corrected early press reports of an ₦18 billion composite threshold: an insurer holding both licences needs the combined ₦25 billion. On 2 August 2026 NAICOM announced that 43 insurers and reinsurers had met the requirement, with 8 more in a 14-day final verification (NAICOM, 2026a).

**Finding.** The Insurance Sector Strengthening Programme, launched on 3 September 2026 with NAICOM backing, targets penetration of 1.5% of GDP by 2028 and 10% by 2031 (BusinessDay, 2026b, 2026c; THISDAYLIVE, 2026). These are policy targets. They are not forecasts.

**Table 2.1: Market indicators and their sources**

| Indicator | 2023 | 2024 | 2025 | Source and caveat |
|---|---|---|---|---|
| Gross written premium | ₦1.003 tn | ₦1.562 tn | ₦2.30 tn to ₦2.35 tn | NAICOM (2025b). Nominal naira; includes naira depreciation effects |
| Non-life share of GWP | about 68% | about 70% | about 68% to 70% | NAICOM (2025b) |
| Claims paid (regulator series) | not compiled here | about ₦622 bn | ₦724.7 bn to ₦882 bn | NAICOM (2025b). Range reflects differing review documents |
| Claims paid (press series) | not compiled here | ₦216.9 bn | ₦307.2 bn | BusinessDay (2026a). Subset of reporting companies |
| Operators meeting new capital rules | n/a | n/a | n/a | 43 verified, 8 in final verification as at 2 August 2026 (NAICOM, 2026a) |
| Penetration (% of GDP) | about 0.4% | about 0.4% to 0.5% | about 0.4% to 0.5% | OECD (2025); Ecofin Agency (2024), reporting African Insurance Organisation data |
| Adults holding any insurance product | 3% | `[DATA GAP: no later A2F survey]` | `[DATA GAP]` | EFInA (2023) |

### 2.2 Nominal Growth Without Retail Inclusion

**Finding.** EFInA's 2023 survey reports that 74% of Nigerian adults are financially included, 64% formally, and 26% excluded. Only 3% hold any insurance product (EFInA, 2023). African Insurance Organisation data for 2023 place Nigeria's share of African premiums at 2.1% against a continental penetration average of 3.5% (Ecofin Agency, 2024).

**Inference.** Two factors plausibly explain why GWP grew by 47% to 56% a year in naira while penetration stayed near 0.5%. First, much non-life premium sits in corporate oil and gas, marine and engineering risks whose sums insured are dollar-linked, so naira depreciation from 2023 raised premium values without adding policies. Second, repricing of compulsory third-party motor cover raised motor premium per vehicle. Neither factor implies more people insured. `[DATA GAP: NAICOM bulletins do not publish policy counts by line, so the split between price and volume growth cannot be measured from public data.]`

**Inference.** Account ownership is no longer the main barrier to insurance uptake, since 64% of adults already hold a formal account. The remaining candidates are low trust in claims settlement, high administrative cost relative to small premiums, the advance-premium rule, and weak low-cost verification at retail and smallholder level. These four candidates are hypotheses for RQ1. The desk record does not rank them.

### 2.3 Five Frictions and the Incentives That May Sustain Them

Milestone 1 RQ1.2 asks which frictions are technological and which are kept in place by incentives that new infrastructure would leave intact (Williamson, 1981; North, 1990). Each friction below is paired with that question.

**Friction 1: Claims settlement distrust.** NIIRA 2025 s. 210 requires admitted non-special-risk claims to be settled within 60 days of notification (s. 210(3)). Insureds may petition NAICOM to deduct unpaid claims from the insurer's statutory deposit at the CBN (s. 210(2)). Late settlement attracts a ₦500,000 fine plus monthly compound interest at the prevailing bank rate (s. 210(7)). A Policyholders Protection Fund is financed by a 0.25% levy on gross premium (s. 212(1)(a)). The legislature would not have written these penalties if slow settlement were rare. The incentive question is whether some insurers gain from holding claim reserves longer. If they do, a faster ledger changes nothing on its own. The statutory penalty is what changes the calculation.

**Friction 2: The advance-premium rule.** NIIRA 2025 s. 60(1) makes receipt of premium a condition precedent to cover: "there shall be no cover in respect of an insurance risk, unless the premium is paid in advance". Breach carries a penalty of up to twice the premium (s. 60(3)). The NAICOM Insurtech Guidelines add that where premium is paid through an insurtech, "the insurtech shall instantly credit the account of the insurer" (NAICOM, 2025a, §14.4). Any design that holds policyholder premiums in a smart-contract pool before they reach a licensed insurer breaches both provisions.

**Friction 3: Verification cost in smallholder agriculture.** Indemnity crop cover needs field loss assessment, which is costly for small plots. NAICOM Insurtech Guidelines §4.1(g) allow a partnering insurtech to carry out "crop cutting, data collection and yield calculation". Index cover avoids field assessment but carries basis risk when the index and the farmer's loss diverge (Barnett & Mahul, 2007; Clarke, 2016). Public sources put the Nigerian Meteorological Agency's manned synoptic network at roughly 42 to 54 stations for a land area of 923,768 km² (NiMet, n.d.). Basis risk here is a data-density problem. `[DATA GAP: no public figure for smallholder insurance uptake by state; to be raised with NAIC, NIRSAL and Pula in Module 2 and Module 3 interviews.]`

**Friction 4: Duplicate claims across insurers.** Insurers must report suspected fraud to NAICOM (NIIRA 2025 s. 207(1)). The Nigerian Insurers Association already runs a central database, the Nigerian Insurance Industry Database (NIID), which verifies whether a policy exists, principally for motor and marine cover (NIA, n.d.). Public material does not describe a cross-insurer claims-history function. The incentive question is direct: insurers may be reluctant to place claims and client data in any shared store, central or distributed, because rivals could use it at renewal. `[DATA GAP: no public estimate of losses from claims lodged with more than one insurer for the same event; Module 2 question A2 asks underwriters to estimate it.]`

**Friction 5: Reinsurance reconciliation.** NIIRA 2025 s. 204(1) to (3) requires domestic capacity to be used before risk is placed offshore, with prior written NAICOM approval and penalties of up to five times total premium (s. 204(4)). Section 204(6) states that where reinsurance abroad conforms to the annual programme filed with NAICOM, "no in-person engagement shall be required with the reinsurer by the insured or reinsured". NAICOM already receives these filings and runs an online regulatory portal (NAICOM, n.d.). The large regional reinsurers use enterprise reinsurance accounting systems. Smaller cedants and brokers exchange spreadsheet bordereaux. `[DATA GAP: the scale of bordereaux disputes and settlement lag in Nigeria is not published; Module 2 and Module 4 interviews with reinsurers and brokers will ask.]`

---

## 3. Literature Map

Table 3.1 lists the 25 sources that ground the screen. Theme codes: `T1` blockchain in insurance; `T2` index and agricultural insurance; `T3` microinsurance and Takaful; `T4` Nigerian market data; `T5` statutes and regulation; `T6` Cardano architecture and operator status.

**Table 3.1: Coded literature and documentary map**

| Code | Source | Theme | Evidence type | What it says that bears on this study | Use cases |
|---|---|---|---|---|---|
| L01 | Gatteschi et al. (2018), *Future Internet*, 10(2), 20 | T1 | Peer-reviewed review | Smart contracts can cut administration for objective-trigger products but cannot adjudicate discretionary losses without trusted external inputs | UC1, UC3, UC5 |
| L02 | Wüst & Gervais (2018), CVCBT, 45-54 | T1 | Peer-reviewed decision framework | A blockchain is justified only where several mutually distrustful parties write to shared state with no trusted operator; otherwise a database is cheaper | UC1 to UC8 (Criterion 3) |
| L03 | Dominguez Anguiano & Parte (2024), *Management Review Quarterly*, 74, 1097-1118 | T1 | Systematic review | Ledger deployments in accounting and insurance cluster around inter-firm reconciliation and audit, not replacement of licensed intermediaries | UC3, UC4, UC5 |
| L04 | Shetty et al. (2022), *SAGE Open*, 12(1) | T1 | Systematic review | Data-protection conflicts, oracle reliability and regulatory uncertainty are the main barriers to production use | UC1, UC5, UC6, UC7 |
| L05 | Kshetri & Voas (2018), *IT Professional*, 20(2), 11-14 | T1 | Peer-reviewed analysis | In developing economies, value depends on coupling ledgers to existing mobile channels; low-income users should not be expected to manage keys | UC2, UC6, UC7 |
| L06 | B3i Services AG (2022) insolvency | T1 | Negative case | An insurer-backed reinsurance blockchain consortium that raised over US$40 million filed for insolvency in July 2022 after participants declined to migrate core processes | UC3, UC4 |
| L07 | Barnett & Mahul (2007), *AJAE*, 89(5), 1241-1247 | T2 | Peer-reviewed | Index cover reduces moral hazard and verification cost but remains exposed to basis risk and covariate risk | UC1 |
| L08 | Clarke (2016), *AEJ: Microeconomics*, 8(1), 283-306 | T2 | Formal model | Demand for index insurance falls as basis risk rises, even at subsidised prices | UC1 |
| L09 | Carter et al. (2017), *Annual Review of Resource Economics*, 9, 421-438 | T2 | Review | Uptake holds when cover is bundled with credit or inputs, sold through trusted aggregators, and uses multi-scale triggers | UC1, UC2 |
| L10 | Jensen & Barrett (2017), *Applied Economic Perspectives and Policy*, 39(2), 199-219 | T2 | Review | Payout speed matters for trust, but speed cannot compensate for a poorly calibrated index | UC1 |
| L11 | Etherisc and ACRE Africa (2021 to 2023) | T2 | Pilot reports | More than 17,000 Kenyan smallholders covered; farmers paid and were paid in shillings over M-Pesa while the ledger ran in the back office | UC1, UC2, UC8 |
| L12 | Churchill (2006) | T3 | Institutional text | Microinsurance needs simple terms, near-zero claims friction and collection that fits irregular income | UC2, UC5, UC6 |
| L13 | EFInA (2023) | T4 | National survey | 64% formal inclusion; 3% of adults insured | UC1 to UC8 |
| L14 | OECD (2025); Swiss Re Institute (2024 to 2025) | T4 | Cross-country data | Penetration around 11.5% to 12% of GDP in South Africa, 2.3% to 2.4% in Kenya, 1.0% to 1.1% in Ghana, 0.4% to 0.5% in Nigeria | Comparative screen |
| L15 | NIIRA 2025 | T5 | Statute | Capital (s. 15), advance premium (s. 60), licensing (ss. 200 to 201), KYC and AML (s. 202), offshore reinsurance (s. 204), fraud reporting (s. 207), 60-day settlement (s. 210) | UC1 to UC8 |
| L16 | NAICOM (2025a), Insurtech Guidelines | T5 | Regulation | Partnering and standalone insurtech tiers (§14.1); crop data (§4.1(g)); sandbox (§5.0(vi)); NIN linkage and PKI (§9.1.4); bans on unsupervised automated claim rejection (§12.1(iv)) and on crypto premiums or claims without approval (§12.1(vi)); instant credit (§14.4) | UC1 to UC8 |
| L17 | NAICOM (2018) microinsurance; NAICOM (2013) Takaful | T3, T5 | Regulation | Microinsurance capital tiers, ₦2 million sum-assured cap and 7-day claims rule; Takaful fund segregation under an Advisory Council of Experts | UC1, UC2, UC5 |
| L18 | ISA 2025; SEC (2024) ARIP | T5 | Statute and rules | Virtual and digital assets fall within the SEC's securities remit (s. 355; Second Schedule, Part I, para. 4); ARIP approvals-in-principle for Busha and Quidax; cNGN issuer admitted | UC2, UC8 |
| L19 | CBN (2023) VASP guidelines; CBN (2024) IMTO guidelines | T5 | Circulars | Designated VASP accounts with no cash withdrawals and at most two naira settlement sweeps a quarter; inbound IMTO remittances paid out in naira | UC2, UC8 |
| L20 | NDPA 2023; NDPC (2025) GAID | T5 | Statute | Minimisation (s. 24), DPIA (s. 28), sensitive data (s. 30), erasure (s. 34(1)(d)), automated decisions (s. 37), cross-border transfer (ss. 41 to 43), registration (s. 44) | UC3, UC5, UC6, UC7 |
| L21 | Chakravarty et al. (2020), LNCS 12063, 525-539 | T6 | Peer-reviewed | Defines the EUTxO model: validity and fees are determined before submission | UC1 to UC8 |
| L22 | Chakravarty et al. (2021) | T6 | Research paper | Proposes paying fees in native tokens; this is not active at protocol level on Cardano mainnet | UC1, UC2, UC8 |
| L23 | Koios (2026); DeFiLlama (2026), captured October 2026, re-checked 6 November 2026 | T6 | On-chain data | Protocol parameters in Table 4.1; Cardano stablecoin supply of roughly US$50 million to US$70 million, none naira-denominated | UC1, UC2, UC4, UC8 |
| L24 | Input Output Global (2023); Mitrade (2024); Cardano Foundation (2026); Midnight Network (2026) | T6 | Operator sources | Identus moved to LF Decentralized Trust in 2023; IOG reduced its own programme in 2024; Veridian spun out in October 2026; Midnight entered federated mainnet (Kūkolu) on 17 March 2026 | UC3, UC6, UC7 |
| L25 | Kenya VASP Act 2025; Ghana Act 1061 and Act 1154; South Africa Insurance Act 2017 and FSCA Notice 1350 | T5 | Comparative statutes | Statutory baselines for the comparative screen | Comparative screen |

**What the literature says, read sceptically.** The peer-reviewed sources lean against broad claims for blockchain in insurance. L02 sets a demanding necessity test. L03 and L06 show that working deployments are narrow back-office reconciliation tools and that an expensive consortium failed. L07 to L10 show that the hard problem in index insurance is data quality and basis risk, which a ledger does not touch. L11 is the strongest positive precedent in Africa, and it worked by hiding the ledger completely behind mobile money. No peer-reviewed study of a production blockchain insurance product in Nigeria was found. That absence is itself a finding.

---

## 4. Evaluation of the Eight Candidate Use Cases Against Nigerian Incumbents

### 4.1 Cardano Mainnet Baseline

Table 4.1 records Cardano mainnet parameters and the status of the middleware each use case would depend on. Parameters were queried from the Koios mainnet endpoint at protocol version 11.0 in October 2026 and re-checked on 6 November 2026. Operator status reflects public notices as at November 2026.

**Table 4.1: Cardano parameters and middleware status**

| Parameter or layer | Value or status | What it means for Nigerian insurance use cases | Source |
|---|---|---|---|
| Base fee | `fee = a + b × size`; a = 155,381 lovelace (0.155381 ADA), b = 44 lovelace per byte | A simple 300-byte transaction costs about 0.1686 ADA. The fee is known before submission | Koios (2026) |
| Script execution | priceMemory 0.0577 lovelace per unit; priceSteps 0.0000721 lovelace per step; reference-script fee 15 lovelace per byte; maxTxSize 16,384 bytes | A typical Plutus transaction using reference scripts costs about 0.25 to 0.55 ADA. One transaction can batch many outputs or hashes | Koios (2026) |
| Minimum UTxO deposit | utxoCostPerByte 4,310 lovelace (0.004310 ADA) per byte | One UTxO per retail policy locks roughly 1.0 to 1.5 ADA. For a ₦1,500 monthly micro-policy this is capital-inefficient unless policies are batched under a Merkle root | Koios (2026) |
| Fee payment in other tokens | Not active at protocol level | Policyholders cannot pay network fees in naira or tokens. Any deployment needs an operator that holds ADA and charges clients in naira | Chakravarty et al. (2021) |
| Stablecoins on Cardano | USD-referenced: USDM (about US$13.4 million), USDA (about US$4.1 million), DJED (about US$1.45 million), iUSD (about US$1.34 million), plus bridged USDCx; total roughly US$50 million to US$70 million. Naira-referenced: none | The SEC-incubated naira stablecoin cNGN runs on eight other networks (Base, BNB Chain, Celo, Ethereum, Polygon, Solana, Bantu, AssetChain). It is not on Cardano | DeFiLlama (2026); WrappedCBDC (2025 to 2026) |
| Oracles | Charli3 publishes price and proof-of-reserve feeds. Orcfax announced on 27 March 2026 that it had halted research, development and platform enhancement for lack of funding, with a contingency wind-down date of 31 July 2026 | No Cardano oracle publishes Nigerian weather or yield data. Oracle supply on Cardano is concentrated and, in Orcfax's case, depended on ecosystem funding that ended | Charli3 (n.d.); Orcfax (2026) |
| Identity | Hyperledger Identus (LF Decentralized Trust) and Veridian (spun out by the Cardano Foundation in October 2026) | Neither has a published integration with NIMC verification service providers or with the National Public Key Infrastructure under the NIMC Act 2026 | Input Output Global (2023); Cardano Foundation (2026) |
| Privacy layer | Midnight entered a federated mainnet phase (Kūkolu) on 17 March 2026, run by a limited set of node operators | Zero-knowledge features exist in an early operating stage. They are not yet proven in regulated insurance production. Salted hashes on Cardano itself are available today | Midnight Network (2026) |

### 4.2 How Each Use Case Is Evaluated

Each use case below follows the same six-part structure, adapted from the claim-and-counterevidence format used in approved CPC submissions:

1. **Problem and data gaps:** what the record shows, and what it does not.
2. **Nigerian incumbent:** the system, institution or rail that already performs the function.
3. **Candidate Cardano hypothesis under test:** stated neutrally, as something the study may reject.
4. **Case against a ledger:** the strongest argument that a database, API or existing rail would do the job better (Wüst & Gervais, 2018).
5. **Cost and middleware friction on Cardano.**
6. **Milestone 3 test:** the evidence that would confirm or falsify the hypothesis, the respondents who can supply it, and the desk confidence level.

All eight are open hypotheses. None has been validated.

---

### 4.3 UC1: Parametric Agricultural and Climate Micro-Insurance

**Problem and data gaps.** Smallholders face drought, flood and late rainfall onset. Indemnity crop cover needs field loss assessment, which costs too much for small plots. `[DATA GAP: no public series on smallholder insurance uptake or claim delays by state.]`

**Nigerian incumbent.** Three institutions already run agricultural cover without a ledger. The Nigerian Agricultural Insurance Corporation (NAIC) is the federal agricultural insurer linked to public agricultural credit. NIRSAL Plc has structured area-yield and index products with private underwriters (NIRSAL, n.d.). Pula, an agricultural insurance structurer, runs satellite and area-yield index calculations on centralised systems with Nigerian underwriters and aggregators (Pula Advisors, n.d.). Payouts move in naira through banks, payment service banks or input credit. Weather ground truth comes from NiMet, whose manned synoptic network is put at roughly 42 to 54 stations (NiMet, n.d.).

**Candidate Cardano hypothesis under test.** Underwriter-approved trigger thresholds and enrolled-policy commitments are recorded on Cardano before the season. Signed weather or yield indices are posted during the season. A breach of the threshold generates a naira payout instruction through bank or payment service bank rails. The hypothesis is that pre-committed, publicly timestamped trigger rules reduce disputes between insurer, reinsurer and cooperative.

**Case against a ledger.** The binding problem is basis risk (Clarke, 2016; Jensen & Barrett, 2017). If a station 60 km away misses a local dry spell, executing the index on Plutus produces the same wrong payout as executing it on a cloud server. Index arithmetic is not where disputes appear to come from on the desk record; subsidy continuity, aggregator bundling (Carter et al., 2017) and NAICOM product approval (NAICOM, 2025a, §12.1(iii)) look more binding. Pula and NIRSAL already calculate and pay without a ledger.

**Cost and middleware friction.** Per-farmer UTxOs are uneconomic because of the minimum deposit. Ward-level batching under a Merkle root brings on-chain cost below 0.001 ADA per farmer per season, but adds an operator who maintains the batch. No Cardano oracle carries Nigerian weather data, and Orcfax has halted development. Payouts must be in naira unless NAICOM approves otherwise (§12.1(vi)).

**Milestone 3 test.** The hypothesis survives only if underwriters (Leadway, NAIC, Salam Takaful), reinsurers (Africa Re) or cooperatives (AFAN Kaduna and Zaria) report trigger or calculation disputes that a public pre-commitment would settle, and if a signed data source (NiMet, Pula or a satellite provider) is willing to publish to Cardano. It fails if interviewees locate disputes in basis risk or subsidy rather than in trust in the calculation. Modules 2, 3 and 5. **Desk confidence: low.**

---

### 4.4 UC2: Microinsurance Premium Collection and Risk Pooling, Including Takaful

**Problem and data gaps.** Low-income workers, market associations and faith-based groups report distrust of how pooled funds are managed and how Takaful surplus is shared (EFInA, 2023). `[DATA GAP: no public data on agent commission leakage or on participant complaints about Takaful surplus distribution.]`

**Nigerian incumbent.** Licensed Takaful operators (including Noor, Jaiz, Salam and Cornerstone) keep the participants' risk fund (*Tabarru'*) in bank accounts separate from the operator's fund, under an Advisory Council of Experts, external audit and NAICOM supervision (NAICOM, 2013). Microinsurers and embedded distributors (Casava, GOXI, Mutual Benefits, MyCover.ai, Paddy Cover) collect premiums of a few hundred naira through USSD, NIBSS Instant Payments, agency banking (Moniepoint, OPay, PalmPay) and payment service banks (MTN MoMo PSB, Airtel SmartCash PSB).

**Candidate Cardano hypothesis under test.** Premium receipts, *Tabarru'* and operator-fee splits, and surplus calculations are committed to Cardano as daily batched hashes. Money stays in the licensed insurer's bank account. The hypothesis is that Shariah boards, regulators or cooperative treasurers gain a verification they lack today.

**Case against a ledger.** NIIRA 2025 s. 60(1) and Insurtech Guidelines §14.4 require premium to reach the licensed insurer's account. A smart-contract pool cannot hold it. Cardano can therefore only mirror a bank balance. If the operator decides what is hashed, the ledger records the operator's own figures, and the audit value depends on whether the bank signs the balance directly. Policyholders paying by USSD will not inspect a block explorer; their trust comes from cooperative leaders, scholars and payout alerts (Gefen et al., 2003).

**Cost and middleware friction.** Settling each micro-premium on-chain at about 0.17 ADA plus a deposit is uneconomic. A daily batch hash costs about 0.30 ADA for thousands of receipts but adds an operator, a relayer and a reconciliation process alongside existing audit.

**Milestone 3 test.** The hypothesis survives if Advisory Council of Experts scholars, NAICOM Takaful examiners or cooperative treasurers name a specific audit gap in current Takaful reporting (for example, verification of *Wakalah* fees, interest-free deficit loans or surplus distribution) and accept bank-signed commitments as a remedy. It fails if current audited reporting is regarded as adequate. Modules 1, 3 and 5. **Desk confidence: low.**

---

### 4.5 UC3: Shared Claims and Policy Verification Registry

**Problem and data gaps.** Insurers report that the same loss can be claimed from more than one insurer, and that forged certificates and inflated claims occur across motor, health and property lines. `[DATA GAP: no public estimate of annual losses from multiple recovery; Module 2 question A2 asks underwriters to estimate it.]`

**Nigerian incumbent: the NIA's central database.** The Nigerian Insurers Association already operates the Nigerian Insurance Industry Database (NIID). Member insurers upload policy records to a central server. Police, road-safety officers and policyholders verify active cover through the askNIID web portal, a mobile application and the `*565*11#` USSD short code (NIA, n.d.). NIID's established scope is policy verification across compulsory motor third-party, marine cargo and statutory liability classes. It checks fake certificates and policies bought after a loss. Web2 providers such as Curacel and Octamile also sell automated claims-fraud scoring to individual insurers (Curacel, n.d.).

**Where the documented gap lies.** NIID confirms whether a policy exists. Public material does not describe a function that checks whether the same asset, chassis number, invoice or bill of lading has been claimed with two insurers. That cross-insurer claims check is the gap UC3 addresses.

**Why expanding NIID may be the better answer.** The NIA is already the trusted operator of a shared industry database. Adding a claims module and API to NIID, in a conventional relational database with access controls, would be cheaper and simpler than a ledger. It needs no smart contracts, no ADA float and no key management. If member insurers are willing to send claims data to the NIA, a blockchain fails the necessity test (Wüst & Gervais, 2018) and UC3 should be rejected.

**Candidate Cardano hypothesis under test.** Participating insurers and adjusters post salted or keyed hashes of a standard claim key (asset identifier, loss-date window, peril code) to Cardano or, for private queries, to Midnight. A match reveals a possible duplicate. No match reveals nothing about the insurer, the client or the policy.

**The three conditions a ledger would have to meet.** A distributed design adds value over an expanded NIID only if Milestone 3 confirms all of the following:

1. **Insurers refuse to share claims data centrally for competitive reasons.** Client lists, sums insured and renewal dates are commercially sensitive. If insurers will not place them in a central NIA store for fear of leakage or poaching at renewal (Williamson, 1981), a blind-matching design addresses a real barrier. If the obstacle is budget or data standards, it does not.
2. **Key writers sit outside the NIA's membership.** Fraud often involves loss adjusters, hospitals, repair workshops and police reports. If these parties must write to the registry and will not accept NIA administration, the multi-writer condition of the necessity test is met.
3. **A central store of sensitive claims data creates liability that participants will not accept.** Pooling health and injury data in one database raises breach and rectification exposure under NDPA 2023 ss. 24, 30, 34(1)(d) and 40. If participants or the NDPC see that exposure as decisive, distributed hashing with data kept at each insurer has an argument.

**Cost and middleware friction.** This is a business-to-business workflow. Batched hashes cost a small fraction of an ADA per claim against claim values of ₦100,000 and above, so fees are not the obstacle. Governance is. Shared registries face free-rider and cost-allocation problems (Olson, 1965), and B3i failed on exactly those grounds (L06). Midnight is in an early federated stage.

**Milestone 3 test.** Ask the NIA (C05) why NIID has no claims module. Ask claims heads (Leadway, NEM, AXA Mansard), ILAN (C07) and Curacel (C08) whether competitive confidentiality or non-member writers block central sharing. Part A questions on NIID come before any mention of ledgers. **Desk confidence: low.** This is the use case where desk evidence leaves the question most open, which is why it ranks first for interview depth. It is not evidence that a ledger is needed.

---

### 4.6 UC4: Reinsurance Treaty Reconciliation and Bordereaux

**Problem and data gaps.** Cedants, brokers and reinsurers report delays and disputes in reconciling proportional and excess-of-loss treaties. `[DATA GAP: no public measure of reconciliation lag or disputed balances in the Nigerian market.]`

**Nigerian incumbent.** NAICOM already receives annual reinsurance programmes, domestic declinature slips and offshore placement applications under NIIRA 2025 s. 204 through its online regulatory portal (`portal.naicom.gov.ng`; NAICOM, n.d.). `[DATA GAP: public sources do not state how much bordereau-level accounting data passes through the portal after initial placement approval.]` The large regional reinsurers headquartered in Lagos (Africa Re, Continental Re) run enterprise reinsurance accounting engines such as SAP FS-RI and DXC SICS alongside ACORD messaging templates. Smaller domestic cedants and brokers (NCRIB members, SCIB) exchange spreadsheet bordereaux.

**Candidate Cardano hypothesis under test.** Cedants and brokers post hashes of each bordereau version and computed balances to a shared ledger, so every party can show which version it relied on. Core accounting systems are not replaced.

**Case against a ledger.** Regulatory proof of domestic capacity exhaustion already flows to NAICOM's own systems; NAICOM has no need for a public ledger to verify filings it receives. Nigeria's treaty market involves a small number of reinsurers, a setting where bilateral trust and standard messaging may suffice. Disputes may arise from poor source data, exchange-rate timing and cash-flow incentives, none of which a hash corrects. B3i, backed by large global insurers and reinsurers, failed in 2022 trying to move this workflow onto a ledger (L06).

**Cost and middleware friction.** Fees are trivial against treaty balances. Adoption cost lies in data standardisation and consortium governance.

**Milestone 3 test.** The hypothesis survives if reinsurers and brokers report recurring version disputes that the portal and their own systems do not resolve, and say they would use a hash layer that needs no system replacement. It fails if they describe current tools as adequate or cite B3i-type objections. NAICOM's Reinsurance Directorate, Continental Re, Africa Re, SCIB, Leadway and NSIA; Modules 1, 2 and 4. **Desk confidence: low.**

---

### 4.7 UC5: Claims Automation and Settlement Audit

**Problem and data gaps.** Retail and SME policyholders face slow claims processing, and insurers face penalties under NIIRA 2025 s. 210 if admitted claims are not settled within 60 days. `[DATA GAP: NAICOM does not publish average settlement times by line or insurer.]`

**Nigerian incumbent.** Web2 claims platforms (Curacel, Octamile and in-house insurer portals) already handle first notice of loss, photo and document checks, tariff validation and naira payout through NIBSS Instant Payments (Curacel, n.d.). Disputes go to NAICOM's complaints process and the s. 210 deduction mechanism.

**Candidate Cardano hypothesis under test.** Claim state changes (`Notified`, `Admitted`, `Settled`, `Escalated to human review`) are timestamped on Cardano with the signatures of the adjuster or verifier. An admitted claim triggers a naira payout instruction. The hypothesis is that an independently verifiable timeline helps an insurer defend itself against s. 210(7) penalties and helps a claimant prove delay.

**Case against a ledger.** A smart contract may not reject a claim on its own. NAICOM Insurtech Guidelines §12.1(iv) list "unsupervised automated claims rejections" as an impermissible activity, and NDPA 2023 s. 37 restricts decisions based solely on automated processing. That leaves two functions: triggering payment after a human admits the claim, which a Web2 webhook already does, and timestamping. A signed audit log in the insurer's own database, covered by the annual technology audit (§9.2(viii)), may satisfy NAICOM without any public ledger.

**Cost and middleware friction.** About 0.20 to 0.40 ADA per claim lifecycle, or far less when batched. Integration with insurer core systems is the larger cost.

**Milestone 3 test.** The hypothesis survives if NAICOM's market conduct staff and ILAN say third-party verifiable timestamps would carry more weight in s. 210 disputes than an insurer's own audited log. It fails if they regard the insurer's log as sufficient. Modules 1, 2 and 4. **Desk confidence: low.**

---

### 4.8 UC6: Beneficiary Verification for Life and Group Life

**Problem and data gaps.** Group life and life claims can stall over beneficiary disputes and identity checks. `[DATA GAP: no public data on the share of life claims delayed by beneficiary verification.]`

**Nigerian incumbent.** Employers with three or more staff must hold group life cover of at least three times annual total emolument (Pension Reform Act 2014 s. 4(5); NIIRA 2025 s. 68). Benefits are processed through employers and pension fund administrators against nominated beneficiary schedules. PenCom has stated that from 1 June 2025 administrators may process death and retirement benefits without prior Commission approval (PenCom, 2025). Above small-estate levels, entitlement is decided by wills, probate and letters of administration, customary law, or Islamic inheritance rules. Identity checks use NIN and BVN through licensed verification providers.

**Candidate Cardano hypothesis under test.** At policy inception, the policyholder's nominated beneficiary is bound to a verifiable credential issued through Hyperledger Identus or Veridian, with only issuer keys and revocation data on Cardano. At claim, the beneficiary presents the credential.

**Case against a ledger.** A credential cannot override a will, a court grant or a statutory beneficiary rule. An insurer that pays against a credential while a competing probate order exists risks paying twice, and the insurer is responsible for claims disputes (NAICOM, 2025a, §8.0(xvi)). Life policies run for decades. Low-income beneficiaries who lose a device or a key would need recovery through NIN or BVN, at which point the central check is doing the work.

**Cost and middleware friction.** Credential anchoring costs are small. Integration with the NIMC framework and with probate practice is the obstacle.

**Milestone 3 test.** Ask life underwriters (Heirs Life, AIICO, Leadway) and Family Takaful operators whether formal group life still has verification delays after the 2025 PenCom change. If delays persist mainly in informal micro-life below probate thresholds (for example, cover up to the ₦2 million microinsurance cap), test whether NIN-linked credentials would reduce them. Modules 2, 3 and 5. **Desk confidence: low.**

---

### 4.9 UC7: Identity-Linked Enrolment and Reusable KYC

**Problem and data gaps.** Insurers, brokers and aggregators repeat KYC for the same customer. NAICOM Insurtech Guidelines §9.1.4(ii) require registration to link to NIN, passport or driver's licence. `[DATA GAP: no public data on onboarding drop-off caused by KYC.]`

**Nigerian incumbent.** NIMC-licensed verification service providers (Smile ID, Seamfix, Prembly, QoreID and others) return NIN and BVN checks through APIs in seconds. Reported commercial tariffs fall roughly between ₦10 and ₦100 per check. `[DATA GAP: tariffs are not published uniformly; to be confirmed with providers in Milestone 3.]` The NIMC Act 2026, assented on 26 June 2026, repeals the 2007 Act and sets out NIMC's role in the National Public Key Infrastructure, with penalties for unauthorised access to or extraction of identity data (Federal Republic of Nigeria, 2026).

**Candidate Cardano hypothesis under test.** A licensed provider verifies a customer's NIN once and issues an off-chain verifiable credential. Other insurers check the provider's signature against a key anchored on Cardano, with the customer's consent (NDPA 2023 ss. 26 and 38), inside the three-day KYC transmission window (§9.2(iv)).

**Case against a ledger.** Any credential must sit under NIMC's statutory framework; Identus or Veridian cannot act as a parallel trust root. Each insurer remains liable for its own customer due diligence (NIIRA 2025 s. 202; Money Laundering Act 2022) unless reliance is permitted. If a fresh API check costs ₦50 and takes two seconds, insurers have little reason to build credential wallets and negotiate reliance arrangements.

**Cost and middleware friction.** Per-credential ledger cost is close to zero. The costs are legal (reliance, NIMC rules) and integration.

**Milestone 3 test.** The hypothesis survives only for micro-policies where a ₦50 to ₦100 check takes a large share of a ₦200 to ₦500 premium, or where offline rural enrolment fails, and only if NIMC and NAICOM confirm that reliance on a provider-signed credential is lawful. NIMC, NDPC, verification providers, MyCover.ai and Casava; Modules 1 and 3. **Desk confidence: low.**

---

### 4.10 UC8: Stable-Value Settlement and Payment Rails

**Problem and data gaps.** Naira depreciation and correspondent-banking delays affect cross-border reinsurance settlement, and diaspora Nigerians face remittance costs when paying for relatives' cover. `[DATA GAP: no public data on diaspora-funded insurance premiums.]`

**Nigerian incumbent.** NIBSS Instant Payments processed roughly 11 billion transactions worth about ₦1.07 quadrillion in 2024 (NIBSS, 2025), settling naira between banks, microfinance banks, mobile money operators and payment service banks in seconds for a fee of ₦10 to ₦50. The Pan-African Payment and Settlement System, backed by Afreximbank and the CBN, settles intra-African trade in local currencies (PAPSS, n.d.). CBN's 2024 IMTO guidelines require inbound remittances through licensed operators to be paid out in naira (CBN, 2024).

**Candidate Cardano hypothesis under test.** USD stablecoins on Cardano (USDM, USDA) settle cross-border reinsurance balances or diaspora premiums, with an SEC-approved VASP converting to naira and crediting the insurer's bank account.

**Case against a ledger.** For domestic payments the case fails on desk evidence alone: NIBSS Instant Payments is faster to reach users, universal and needs no conversion. For cross-border flows, four constraints apply at once. NAICOM must approve crypto premiums or claims (§12.1(vi)). Digital assets fall under the SEC (ISA 2025 s. 355). VASP bank accounts are limited to two naira sweeps a quarter (CBN, 2023). No naira stablecoin exists on Cardano, and Cardano's USD stablecoin supply is small next to Tron, BNB Chain and Ethereum.

**Cost and middleware friction.** The network fee is small. Conversion spread, VASP compliance and regulatory approval are the real costs.

**Milestone 3 test.** Ask NAICOM, SEC and CBN whether any approval route exists within 12 to 24 months for stablecoin settlement of cross-border reinsurance or diaspora premiums. Ask WrappedCBDC whether a Cardano deployment of cNGN is planned. If all answers are negative, UC8 should be recommended for rejection and handed to RFP 03. **Desk confidence: low.** Desk evidence already points towards rejection.

---

### 4.11 Summary: Incumbents and the Conditions a Ledger Would Have to Meet

**Table 4.2: Incumbent baseline and survival condition by use case**

| Use case | Nigerian incumbent that already performs the function | Condition under which a ledger could add value (to be tested) | Desk reading |
|---|---|---|---|
| UC1 | NAIC, NIRSAL, Pula; NiMet data; naira payouts through banks and PSBs | Disputes arise from distrust of the calculation, and a signed data source will publish to Cardano | Basis risk and missing oracles weigh against |
| UC2 | Bank-segregated Takaful funds; USSD, NIP, agency banking and PSB collection | Scholars or regulators name an audit gap that bank-signed commitments would close | Mirror of bank balance; low observability to users |
| UC3 | NIA's NIID; Web2 fraud scoring | Insurers refuse central claims sharing for competitive reasons, or non-NIA writers must participate | Most open question; expanding NIID is the default answer |
| UC4 | NAICOM online portal; reinsurer accounting systems; spreadsheets | Recurring version disputes that current tools do not resolve | B3i failure and small market weigh against |
| UC5 | Curacel, Octamile and insurer portals; NIP payouts; NAICOM complaints | Regulators give independent timestamps more weight than audited insurer logs | Automated rejection is barred; audited logs may suffice |
| UC6 | PenCom and pension administrators; probate; NIN and BVN checks | Delays persist in informal micro-life below probate thresholds | Credentials cannot override succession law |
| UC7 | NIMC verification providers; NIMC Act 2026 framework | Check cost is large relative to micro-premiums and reliance is lawful | Cheap API checks weigh against |
| UC8 | NIBSS NIP; PAPSS; IMTO naira payout rule | A regulator-approved cross-border route exists | Desk evidence points to rejection |

---

## 5. Comparative African Screen: Nigeria, Kenya, Ghana and South Africa

Table 5.1 compares the four jurisdictions on nine dimensions. The aim is to see whether Nigeria is unusually restrictive or unusually open for ledger-based insurance, using the same criteria for each country.

**Table 5.1: Four-country comparison**

| Dimension | Nigeria | Kenya | Ghana | South Africa |
|---|---|---|---|---|
| 1. Insurance regulator and statute | NAICOM under NIIRA 2025 (assented 31 July 2025) and the NAICOM Act 1997 | Insurance Regulatory Authority under the Insurance Act (Cap. 487) | National Insurance Commission under the Insurance Act 2021 (Act 1061) | Prudential Authority and FSCA under the Insurance Act 18 of 2017 and the FAIS Act 2002 |
| 2. Penetration and scale | About 0.4% to 0.5% of GDP; GWP ₦2.30 tn to ₦2.35 tn in 2025; 43 operators verified after recapitalisation; 3% of adults insured (EFInA, 2023) | About 2.3% to 2.4% of GDP | About 1.0% to 1.1% of GDP | About 11.5% to 12% of GDP, mainly long-term life and pensions |
| 3. Microinsurance framework | NIIRA 2025 s. 200; Microinsurance Guidelines 2018 (₦40 m, ₦100 m and ₦600 m tiers; ₦2 m cap; 7-day claims rule); Takaful Guidelines 2013 | IRA microinsurance regulations | Act 1061 covers microinsurance and index insurance in primary law | Dedicated microinsurance licence under the 2017 Act |
| 4. Insurtech licensing and sandbox | NAICOM Insurtech Guidelines 2025: partnering tier (₦10 m capital plus ₦100 m indemnity) and standalone tier (₦1.5 bn non-life, ₦1.0 bn life); sandbox under §5.0(vi); SEC ARIP | IRA sandbox; CMA sandbox since 2019 | Act 1061 innovative insurance provisions; SEC Ghana virtual asset sandbox (16 participants, August 2026) | Intergovernmental Fintech Working Group innovation hub and sandbox |
| 5. Virtual asset regime | ISA 2025 places virtual assets under the SEC; CBN 2023 VASP account rules; NAICOM §12.1(vi) approval for crypto premiums or claims | VASP Act 2025 in force from 4 November 2025; no VASP licensed as at the CBK and CMA notice of 18 November 2025 | VASP Act 2025 (Act 1154); joint policy position by BoG, SEC and FIC | Crypto assets declared a financial product (FSCA Notice 1350, 2022) |
| 6. Data protection | NDPA 2023: erasure (s. 34(1)(d)), automated decisions (s. 37), DPIA (s. 28), cross-border rules (ss. 41 to 43) | Data Protection Act 2019 | Data Protection Act 2012 (Act 843) | POPIA 2013: automated decisions (s. 71), cross-border transfers (s. 72) |
| 7. Retail payment rails | NIBSS Instant Payments; mobile money operators and PSBs; 64% formal inclusion | M-Pesa mobile money used by most adults | Mobile money interoperability across networks | Bank accounts held by most adults; PayShap instant payments |
| 8. Index and blockchain insurance precedent | NAIC, NIRSAL, Pula index programmes; no live blockchain insurance product found | ACRE Africa index programmes; Etherisc and ACRE pilot covering more than 17,000 farmers with the ledger hidden behind M-Pesa | Ghana Agricultural Insurance Pool | Commercial crop insurance for large farms; smallholder index pilots |
| 9. National identity | NIN (more than 115 million enrolled by 2026) and BVN; NIMC Act 2026 | National ID and Maisha Namba | Ghana Card as primary ID | National Population Register and Smart ID |

### 5.2 Working Inferences From the Comparison

Each inference below rests on the table above and remains a hypothesis for Milestone 3.

**Inference 1. Nigeria now has an insurtech licensing route on paper.** Before August 2025 Nigeria had no dedicated insurtech regime. The partnering tier (₦10 million capital) is far cheaper to enter than an underwriting licence (₦10 billion to ₦15 billion). Whether NAICOM licenses partnering insurtechs promptly, and whether it will treat a ledger-based service as an ordinary technology service, is unknown until NAICOM is interviewed.

**Inference 2. The Kenyan precedent depended on hiding the ledger.** Farmers in the Etherisc and ACRE pilot never handled tokens or keys. Premiums and payouts moved in shillings over M-Pesa. Pilot reporting also indicates reliance on donor and climate-finance support, so commercial sustainability without subsidy is not demonstrated. Nigerian rules point the same way: NAICOM §12.1(vi) and NIIRA s. 60(1) require naira at the user edge. A Nigerian design would at most use a ledger in the back office.

**Inference 3. Business-to-business uses face fewer statutory gates, but stronger incumbents.** UC3, UC4 and UC5 do not trigger SEC or CBN virtual-asset rules. They do face the NIA's NIID, NAICOM's portal and Web2 claims platforms. Fewer legal gates is not evidence of demand.

**Inference 4. All four jurisdictions restrict personal data on immutable ledgers.** Erasure and automated-decision rules exist in Nigeria, Kenya, Ghana and South Africa. Any candidate design keeps personal data off-chain and records only salted hashes, credential keys or proofs.

---

## 6. Limits of This Report

Four limits apply.

1. **No primary evidence.** Every statement about demand, willingness to share data or trust is inference. Milestone 3 provides the test.
2. **Uneven public data.** Nigerian sources do not publish policy counts, loss estimates for duplicate claims, reconciliation lag, KYC costs or smallholder uptake. Each is marked as a data gap above.
3. **Fast-moving operator status.** Cardano middleware status (Orcfax, Midnight, Veridian) and stablecoin supply change quickly. Figures carry capture dates and will be re-checked before Milestone 4.
4. **Regulatory interpretation is not legal advice.** The companion Preliminary Regulatory Scan maps rules for research purposes only (Milestone 1 §1.7).
