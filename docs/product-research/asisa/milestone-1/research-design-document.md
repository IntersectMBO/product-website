---
title: "ASISA — Research Design Document"
sidebar_label: "Research Design"
sidebar_position: 2
---

## Acceptance Criteria Compliance Matrix

The CPC may verify Milestone 1 compliance against the four contractual acceptance criteria before reading the full report. Each criterion is mapped below to the chapter and evidence that satisfy it.

| # | Contractual acceptance criterion | Status | Where satisfied | Evidence |
|---|---|---|---|---|
| 1 | Applicable RFP requirements and proposal commitments are reflected in the research design | ✅ Met | Chapter 3 (phase architecture); Chapter 5 (screening model and decision gate map); Chapter 6 (bias register as design requirement) | All nine RFP decision gates are mapped to a method, a research phase and a named deliverable (Table 5.6). Five research questions and five hypotheses are confirmed (Chapter 2). |
| 2 | Methodology defined | ✅ Met | Chapter 3 (eight-phase architecture linked to Milestones 1 to 5); Chapter 5 (nine-criterion model, four-level scale, single-criterion disqualification rule); Chapter 6 (ten bias controls) | Screening rules are locked before fieldwork begins (§6.3). |
| 3 | Kickoff completed and research plan and workspace confirmed | ✅ Met | Chapter 9 (kickoff, workspace, cadence); Chapter 4 (primary research plan); Chapter 7 (catalyst event of 26 August 2026); Chapter 10 (progress) | **Physical Research Team Kickoff & CPC Alignment Record:** The project team conducted its physical inception kickoff on 14 August 2026 in Lagos alongside the executive/symposium planning committee session (conducted in-person as an integrated executive working session without a separate video recording), establishing the repository workspace (`docs/product-research/asisa/`), version-controlled documentation workflow, and internal research governance protocols. Because a live synchronous kickoff call with the CPC could not be completed prior to the Committee break despite four attempts to join the weekly CPC sync calls and follow-up enquiries on Discord, the Milestone 1 Inception Report submission and formal CPC Primary/Secondary Review sign-off serve as the documented record of CPC alignment on project scope, confirmed research questions, and research plan. GitHub (IntersectMBO/product-website/ and [GitHub repo: Mayorofweb3/product-website](https://github.com/Mayorofweb3/product-website)) is the public reporting workspace; encrypted institutional storage holds research data; bi-weekly progress updates to the CPC. |
| 4 | Inception documents complete | ✅ Met | This report in its entirety | Consolidates the Inception Report, Research Design, confirmed Research Questions and Primary Research Plan in a single submission. |

### Contractual clause compliance

| Clause | Requirement | Where addressed |
|---|---|---|
| 4.1 | Public classification of milestone reports | Title block; §9.7 |
| 4.2 | Disclosure of AI-assisted tooling | §8.4 |
| 4.3 | Retention of research data for at least 12 months after completion | §8.3 (retention guaranteed until at least January 2028) |

---

## Abstract

This report is the formal Project Inception and Research Design submission for Milestone 1 of the research grant pursued and awarded to Odufuwa O. Oluwakayode; President of Actuarial Science and Insurance Students Association, Ahmadu Bello University (ASISA ABU), 2025/2026, under RFP 05 of the Cardano Product Committee (CPC), through Intersect. The study investigates the viability, constraints and go-to-market pathways of Cardano blockchain-based solutions in the Nigerian insurance sector.

The research adopts a pragmatist epistemology (Morgan, 2014) and an exploratory, qualitative-led mixed-methods design organised as an eight-phase "funnel of viability", with each phase linked to a contractual milestone. Eight candidate use cases enter the study strictly as falsifiable hypotheses. Five research questions, each with sub-questions tied to Diffusion of Innovations, Institutional Theory and the Technology Acceptance Model, structure the fieldwork. A nine-criterion screening model, which operationalises the RFP's nine decision gates, scores each use case on a four-level ordinal scale, and a single Disqualifying score eliminates a use case. The analytical default is no-go. Ten bias-control protocols, reinforced by structural safeguards, protect against pro-blockchain optimism, funder favourability, event-sample bias and related distortions.

Following the formal project kickoff in August 2026, the research team aligned the inception phase with The Actuarial and Insurance Symposium 2.0 (26 August 2026). This gave the project warm access to twelve tier-one institutions across the regulatory, underwriting, Takaful, insurtech and professional-body segments: NAICOM, NDIC, FRCN, Leadway Assurance, Heirs Insurance Group, Tangerine.Africa Insurance, NSIA Insurance, Salam Takaful, Noor Takaful, InsureIQ, the Chartered Insurance Institute of Nigeria (CIIN) and the Nigerian Actuarial Society (NAS), the Nigerian Actuarial Development Programme (NADP). The Symposium is treated throughout as an access/relationship and evidence-collection mechanism, never as evidence of demand.

---

## Glossary and Abbreviations

Plain-English definitions are provided for both blockchain-specific and Nigerian insurance-sector terms used throughout the report. They are explanatory summaries, not legal definitions. Readers familiar with both domains may skip ahead.

### Blockchain and Cardano terms

| Term | Plain-English meaning |
|---|---|
| **DLT (Distributed Ledger Technology)** | A shared record book maintained by many computers, so that no single party controls or can quietly alter it. |
| **Blockchain** | A type of DLT in which records are grouped into linked "blocks". |
| **eUTxO (Extended Unspent Transaction Output)** | Cardano's ledger model. Value sits in discrete "outputs" that carry both data and the rules for spending them, and a transaction's validity can be checked before it is submitted (Chakravarty et al., 2020). |
| **Smart contract** | A program stored on a ledger that automatically enforces agreed conditions, for example "pay this amount if a defined event is recorded". |
| **Plutus** | Cardano's smart-contract platform. |
| **Aiken** | A programming language for writing Cardano smart contracts (Aiken, n.d.). |
| **Oracle** | A service that feeds real-world data (for example rainfall readings) to a smart contract, which cannot otherwise see outside the ledger. |
| **On-chain / off-chain** | Recorded on the ledger itself / kept in ordinary systems outside it. |
| **DID (Decentralised Identifier)** | An identifier that its holder controls, rather than a central registry (World Wide Web Consortium, 2022). |
| **Verifiable credential** | A digitally signed statement (for example "this person is the named beneficiary") that a third party can check. |
| **Hyperledger Identus** | An open-source decentralised-identity platform for Cardano, developed from Atala PRISM (Input Output Global, 2023). |
| **Stablecoin** | A digital token designed to hold a steady value against a reference such as the naira or US dollar. |
| **Off-ramp** | A service that converts digital tokens into ordinary currency in a bank or mobile-money account. |
| **VASP (Virtual Asset Service Provider)** | A business that exchanges, transfers or holds digital assets for others. |
| **Wallet** | Software that holds the keys needed to use digital assets or credentials. |

### Insurance terms

| Term | Plain-English meaning |
|---|---|
| **Underwriter / insurer** | The company that accepts risk in return for premiums and pays valid claims. |
| **Reinsurance** | Insurance for insurers: a reinsurer takes a share of an insurer's risk. |
| **Treaty (reinsurance)** | A standing agreement under which a defined share of an insurer's risks is passed to a reinsurer (ceded). |
| **Parametric (index) insurance** | Insurance that pays when a measured trigger is met (for example rainfall below a threshold) instead of after an assessed loss (Barnett & Mahul, 2007). |
| **Basis risk** | The risk that the trigger and the policyholder's actual loss do not match (Clarke, 2016). |
| **Microinsurance** | Low-premium insurance designed for low-income people (Churchill, 2006). |
| **Takaful** | Shariah-compliant cooperative insurance in which participants contribute to a shared fund from which claims are paid; an operator manages the fund (Archer et al., 2009). |
| **Tabarru'** | The donation-based contribution that participants make to a Takaful fund. |
| **KYC (Know Your Customer)** | Identity verification that regulated firms must perform before serving a customer. |
| **Penetration** | Total insurance premiums as a percentage of GDP. |
| **Recapitalisation** | The increase in minimum capital that insurers had to achieve under NIIRA 2025 (NAICOM, 2026). |

### Institutions

| Abbreviation | Body | What it does |
|---|---|---|
| **CPC** | Cardano Product Committee | The Intersect committee that manages Cardano development scope, including research (Intersect, n.d.). |
| **Intersect** | Intersect | The member-based organisation supporting Cardano's governance and ecosystem. |
| **NAICOM** | National Insurance Commission | Regulates and supervises insurance and reinsurance in Nigeria. |
| **NDIC** | Nigeria Deposit Insurance Corporation | Insures deposits in Nigerian banks and supports the stability of the deposit-taking system. |
| **FRCN** | Financial Reporting Council of Nigeria | Sets and oversees financial-reporting, actuarial and related professional standards (Directorate of Actuarial Standards, per Symposium programme). |
| **CBN** | Central Bank of Nigeria | Oversees monetary policy, banks and the payments system. |
| **SEC** | Securities and Exchange Commission | Regulates the capital market and, under ISA 2025, digital assets (Aluko & Oyebode, 2025). |
| **NIMC** | National Identity Management Commission | Manages the national identity database and issues the National Identification Number (NIN). |
| **NDPC** | Nigeria Data Protection Commission | Enforces the Nigeria Data Protection Act 2023 (KPMG Nigeria, 2023). |
| **CIIN** | Chartered Insurance Institute of Nigeria | Professional body for insurance practitioners. |
| **NAS** | Nigerian Actuarial Society | Professional body for actuaries. |
| **NADP** | Nigerian Actuarial Development Programme | Actuarial capacity-development initiative. |
| **NCRIB** | Nigerian Council of Registered Insurance Brokers | Professional body for insurance brokers. |
| **ASISA ABU** | Actuarial Science and Insurance Students Association, Ahmadu Bello University | The student association conducting this study. |

### Legislation and programme terms

| Abbreviation | Meaning |
|---|---|
| **NIIRA 2025** | Nigerian Insurance Industry Reform Act 2025 |
| **ISA 2025** | Investments and Securities Act 2025 |
| **NDPA 2023** | Nigeria Data Protection Act 2023 (replaced the NDPR 2019) |
| **ISSP** | Insurance Sector Strengthening Programme |
| **BVN** | Bank Verification Number |
| **NIN** | National Identification Number, issued by NIMC |
| **PII** | Personally Identifiable Information |
| **MVE** | Minimum Viable Ecosystem: the smallest set of participants needed to launch and sustain a product |
| **Gate A** | The pre-fieldwork provisional screen defined in §3.4 |
| **TAM** | Technology Acceptance Model |
| **RFP** | Request for Proposal |

---

## Chapter 1: Introduction and Contextual Background

### 1.1 The Nigerian Insurance Market: Scale, Failure and Opportunity

Nigeria is Africa's most populous country, with an estimated 232.7 million residents in 2024 (World Bank, 2025). Its insurance sector is small relative to that scale. Industry and regulator sources place penetration at about 0.5% of GDP (BusinessDay, 2026b; Middle East Insurance Review, 2025), with press analysis of 2025 industry data reporting 0.4% (BusinessDay, 2026a). Gross premiums written reached about ₦2.3 trillion in 2025, of which non-life business accounted for 68.4% (BusinessDay, 2026a). Insurers paid ₦307.2 billion in claims in 2025, up from ₦216.9 billion in 2024 (BusinessDay, 2026a).

Comparators sharpen the picture. African Insurance Organisation (AIO) data for 2023 place average continental penetration at 3.5% of GDP, and show Nigeria contributing only 2.1% of Africa's total premiums (Ecofin Agency, 2024). South Africa's total penetration was reported at 13.7% of GDP for 2020 in Swiss Re's sigma series (FAnews, n.d.). Nigeria's shortfall is therefore not simply a function of population or national income.

NAICOM's Commissioner has attributed weak penetration to limited understanding of insurance products, a trust deficit, capacity constraints and fragmented distribution channels (THISDAYLIVE, 2026). Practitioner commentary adds low public awareness, mistrust, limited access and low purchasing power among households and the informal sector (BusinessDay, 2025). Building on these diagnoses, the study hypothesises five interacting barriers, each to be tested rather than assumed under Research Question 1:

1. **Trust deficit.** A record of slow or disputed claims may suppress premium uptake (corroborated in part by NAICOM's own diagnosis, THISDAYLIVE, 2026).
2. **Distribution inefficiency.** Fragmented channels (THISDAYLIVE, 2026), concentrated in urban commercial centres such as Lagos, Abuja and Port Harcourt (EFInA, 2020), may leave northern and rural populations underserved; the research design therefore mandates northern and southern sampling.
3. **Administrative overhead.** Manual collection, issuance and adjudication may make small-ticket products uneconomic, a recognised problem in microinsurance generally (Churchill, 2006).
4. **Identity infrastructure gaps.** Weak digital verification may raise the cost of beneficiary verification, KYC and fraud prevention (tested under use cases 6 and 7). As of 2024, NIN enrollment covered approximately 104 million Nigerians, less than half the population (NIMC, 2024).
5. **Regulatory uncertainty.** NAICOM has shown openness to innovation through instruments such as its microinsurance guidelines (NAICOM, 2018) and Takaful frameworks, but treatment of distributed ledgers, smart contracts and digital assets in insurance may remain unsettled (§1.2).

The barriers interact. Distrust discourages premium payment; low volumes raise the proportional weight of overhead; high overhead makes affordable products uneconomic; and the absence of affordable products reinforces distrust. Distributed ledger technology is proposed as a way to address trust, cost and access together. Whether it can is an empirical question.

### 1.2 The 2025 to 2026 Policy and Regulatory Moment

Four developments frame the study and are carried into the Phase 3 regulatory assessment.

**Nigerian Insurance Industry Reform Act (NIIRA) 2025.** Signed on 31 July 2025, the Act set minimum paid-up capital at ₦10 billion for life, ₦15 billion for general, ₦18 billion for composite and ₦35 billion for reinsurance business (Leadership, 2026). NAICOM announced on 2 August 2026 that the twelve-month recapitalisation exercise was complete and that 43 insurers and reinsurers had met the new thresholds (NAICOM, 2026; Reuters, 2026). Legal commentary reports that the Act also introduces a risk-based capital framework, mandatory insurance categories and stricter treatment of claims delays (Bamgbose, 2026). These provisions will be verified against the Act's text in Phase 3. The recapitalisation is directly relevant to counterparty capacity: the underwriters on the access roster now operate on larger capital bases.

**Insurance Sector Strengthening Programme (ISSP).** Launched on 3 September 2026 with NAICOM's backing, the ISSP is a multi-year programme that targets an increase in penetration from 0.5% to 1.5% of GDP by 2028 and to 10% by 2031, with attention to trust, distribution, professional capacity, women, youth and MSMEs (BusinessDay, 2026b, 2026c; THISDAYLIVE, 2026). It is a policy tailwind for the inclusion-oriented use cases tested here. Its targets are recorded as stated aspirations, not as forecasts.

**Investments and Securities Act (ISA) 2025.** Assented to in March 2025 (Proshare, 2025), the Act treats digital and virtual assets as securities under the SEC's oversight, while the CBN retains oversight of the payments system (Aluko & Oyebode, 2025). Legal commentary indicates that stablecoin treatment depends on function: payment-oriented instruments tend toward the CBN and investment-like or yield-bearing instruments toward the SEC, and hybrids may face dual regulation (Banwo & Ighodalo, 2026; Chambers and Partners, 2025). Published sources differ on how far banks may currently facilitate crypto-related flows (Banwo & Ighodalo, 2026; Chambers and Partners, 2025). That uncertainty bears directly on use cases 1, 2 and 8 and is resolved use case by use case in Phase 3.

**Nigeria Data Protection Act (NDPA) 2023.** Signed in June 2023, the Act replaced the earlier NDPR 2019 as the principal data-protection framework and established the Nigeria Data Protection Commission (KPMG Nigeria, 2023). Its constraints on personal data are central to any design that would anchor identity or claims data on a public, immutable ledger.

### 1.3 The Blockchain Hypothesis

Cardano's Extended UTxO ledger model (Chakravarty et al., 2020), its smart-contract environment (Plutus and Aiken; Aiken, n.d.) and its decentralised identity tooling offer components that could support:

- transparent, auditable claims processing that might rebuild trust through verifiability;
- automated parametric products whose payouts are triggered by oracle data, reducing adjudication cost (Barnett & Mahul, 2007);
- decentralised identity and beneficiary verification that could bypass weak centralised registries; and
- low-cost payment rails for premium collection and claims disbursement.

Three qualifications are recorded at inception. First, early literature on blockchain in insurance frequently questions whether the technology is mature enough for production use (Gatteschi et al., 2018), and a general decision framework asks whether a blockchain is needed at all when a trusted party or ordinary database could serve (Wüst & Gervais, 2018). The study adopts that sceptical posture through the Necessity test of Criterion 3. Second, Cardano's identity stack, formerly Atala PRISM, was contributed to the Hyperledger Foundation (now part of LF Decentralized Trust) as Hyperledger Identus (Input Output Global, 2023; Input Output, 2025), and reports in 2024 indicated a reduction in IOG's own programme (Mitrade, 2024). Its maintenance model is therefore a Phase 3 diligence item (Appendix D). Third, technical fit does not equal market viability: a solution that is regulatorily blocked, commercially uneconomic or culturally unsuitable is not an entry play.

### 1.4 Statement of the Problem

Which candidate use cases for Cardano blockchain technology in Nigerian insurance can survive rigorous screening against regulatory permissibility, commercial viability, infrastructure readiness, counterparty accessibility, demand-side acceptance and measurable adoption pathways, and which should be rejected, deferred or handed to adjacent workstreams?

The problem is an empirical validation gap: a body of theoretical claims about what the technology could do has not been systematically tested against the structural, regulatory and commercial realities of the Nigerian market.

### 1.5 Research Objectives

**Primary objective.** To evaluate empirically the viability, constraints and go-to-market pathways for Cardano-based solutions within the Nigerian insurance sector, producing decision-grade intelligence for the CPC.

**Specific objectives:**

1. Construct a long-list of blockchain-enabled insurance use cases grounded in documented market failures.
2. Design and apply a multi-criterion screening model that operationalises the RFP 05 decision gates with transparent, auditable scoring.
3. Collect qualitative evidence from regulators, underwriters, insurtechs, Takaful operators, professional bodies, extended ecosystem actors and beneficiary-side organisations.
4. Synthesise a market-entry strategy: prioritisation matrix, regional playbook, regulatory landscape summaries, counterparty access map, infrastructure prerequisite assessment, adoption signal framework and research-to-action roadmap.
5. Document rejected hypotheses with root-cause analysis so that negative findings are as actionable as positive ones.

### 1.6 Significance of the Study

The significance of the study rests on the quality of the evidence it will produce, and on who can use it.

**For the CPC and Cardano ecosystem builders.** The study converts a set of untested propositions into scored, falsifiable findings. A ranked, evidence-graded list of use cases, with documented reasons for rejection, allows the committee to direct pilot funding, coordination effort and cross-RFP handoffs (for example stablecoin liquidity, identity and interoperability workstreams) toward opportunities that clear defined thresholds. Documented failures are equally valuable, because they identify what builders should not pursue and which dependencies would need to change.

**For Nigerian insurers, regulators and professional bodies.** Nigeria's insurance sector is in a period of structural reform (§1.2). Regulators and insurers are being asked to deepen penetration, build trust and innovate on newly enlarged capital bases (NAICOM, 2026; THISDAYLIVE, 2026). The study supplies a use-case-specific reading of the regulatory landscape (Research Question 3), a stakeholder-grounded view of operational bottlenecks and switching costs (Research Question 1), and a structured method for evaluating any emerging technology, not blockchain alone, against Nigerian constraints. Regulators may also find value in seeing how their own positions are interpreted and tested.

**For prospective policyholders and beneficiaries.** By including cooperatives, community organisations and identity-access institutions, and by conducting research in local languages, the study gives underserved populations a voice in decisions about products intended to serve them. This aligns with the trust and access objectives that NAICOM itself identifies (THISDAYLIVE, 2026).

**For the research literature.** Work on blockchain in insurance includes conceptual and prototype-oriented analyses of technological maturity (Gatteschi et al., 2018), and a substantial body of work exists on index insurance in low-income settings (Barnett & Mahul, 2007; Clarke, 2016). This study adds structured field evidence on how stakeholders in one under-penetrated, heavily regulated African market assess these ideas in practice, and contributes to the thin but growing literature on rigorous evaluation of blockchain applications in emerging-market financial services (Kshetri & Voas, 2018; Ozili, 2022). Its replicable screening framework, built from candidate hypotheses, multi-criterion scoring, bias controls, stakeholder triangulation and explicit confidence grading, can be reused for other financial-services technologies and adapted to other African markets. Phase 1 desk research will map the existing literature to establish precisely how much of this ground is already covered, and will report the result in the Market Framing Document.

**For research methodology.** The design embeds practices that counter well-documented distortions: a no-go default and pre-registered decision rules address confirmation bias (Nickerson, 1998); independent corroboration and attribution controls address social desirability (Nederhof, 1985); necessity testing addresses the tendency to apply a favoured tool to every problem (Maslow, 1966; Wüst & Gervais, 2018); and the commitment to publish rejected hypotheses addresses the selective reporting of positive results (Rosenthal, 1979).

**For local research capacity.** The study is conducted by a student-led research team in Northern Nigeria under departmental supervision, and links academic and industry participants, as the Symposium theme "Bridging Industrial and Academic Insights" reflects. It builds practical research capability within the Department of Actuarial Science and Insurance at Ahmadu Bello University.

### 1.7 Scope and Delimitations

**In scope:**

- The Nigerian insurance market, with attention to the north-south divide.
- Life, non-life, microinsurance, reinsurance, Takaful, and agricultural or parametric insurance.
- Supply-side (underwriters, regulators, infrastructure) and demand-side (beneficiary access, adoption) considerations.
- Kenya, Ghana and South Africa as desk-based comparators.

**Out of scope:**

- Regulatory legal opinions (regulatory work is decision-oriented mapping, not legal advice).
- Technical development, prototyping or pilot implementation.
- Primary research outside Nigeria.
- Cryptocurrency trading, tokenomics or speculative asset analysis.

### 1.8 Research Governance

The project was formally activated at a kickoff meeting in August 2026, at which the team confirmed alignment with the RFP 05 scope, confirmed the nine decision gates as the governing evidence framework, established the bi-weekly reporting cadence with the CPC and confirmed the digital workspace (Chapter 9). The Project Lead retains day-to-day operational control and primary investigatory responsibility. The Department of Actuarial Science and Insurance, Ahmadu Bello University, provides academic supervision where needed and appropriate.

---

## Chapter 2: Theoretical Framework, Research Questions and Hypotheses

### 2.1 Diffusion of Innovations (Rogers, 2003)

Rogers' framework models how a novel technology is adopted or rejected in a social system. Five attributes govern the rate of adoption: relative advantage, compatibility, complexity, trialability and observability. In this study, relative advantage and compatibility are tested through Research Questions 1 and 2, and complexity, trialability and observability through Research Questions 4 and 5. The screening model operationalises them: Problem severity and Cardano fit carry relative advantage; Infrastructure readiness carries compatibility; Adoption pathway carries complexity, trialability and observability. Rogers' model also informs interview sequencing: respondents are asked about business problems before technology features (Appendix A, sequencing rule).

### 2.2 Institutional Theory (DiMaggio & Powell, 1983; Scott, 2014)

Institutional Theory explains how organisations in a field converge under three isomorphic pressures:

- **Coercive:** mandates from NAICOM, the CBN, the SEC and the NDPC that constrain or enable adoption.
- **Mimetic:** the tendency of insurers to copy the technology behaviour of peers.
- **Normative:** the influence of professional bodies (CIIN, NAS, NCRIB) and academic institutions in legitimising a technology.

Because the sector is heavily regulated and professionally institutionalised, a use case that is commercially attractive but lacks regulatory legitimacy or professional endorsement is unlikely to be adopted. The stakeholder strategy (Chapter 4) is designed to capture evidence across all three channels. The institutional-economics dimension (North, 1990; Williamson, 1981) underpins the inquiry into switching costs and incentive structures in Research Question 1.

### 2.3 Technology Acceptance Model (Davis, 1989; Venkatesh & Davis, 2000)

TAM holds that acceptance is driven by perceived usefulness and perceived ease of use. It is extended here with trust, which is central to insurance and to online transactions (Gefen et al., 2003). It governs the demand-side inquiry of Research Question 5: when engaging beneficiaries, cooperative representatives and end-user proxies, the research assesses whether proposed solutions are perceived as both useful and usable within the constraints of the target population's digital literacy, connectivity and trust in technology-mediated services.

### 2.4 Conceptual Framework

| Analytical stream | Theory | Question answered | Research questions | Screening criteria |
|---|---|---|---|---|
| Supply-side legitimacy | Institutional Theory | Will regulators, professional bodies and peers permit and legitimise the use case? | RQ3, RQ4 | 4, 6, 7 |
| Economic rationale | Institutional economics; Diffusion (relative advantage) | Does it beat the status quo and non-blockchain alternatives after switching costs? | RQ1, RQ2 | 1, 3 |
| Demand-side acceptance | TAM with trust | Do end users find it useful, usable and trustworthy? | RQ5 | 2, 8 |
| Ecosystem formation | Diffusion (trialability, observability); game theory | Can a viable coalition form and reach critical mass? | RQ4 | 6, 7, 8 |
| Synthesis | Screening model and confidence scoring | How strong is the evidence and how sensitive is the conclusion? | All | 9 |

Evidence flows from stakeholder interviews, expert calls, beneficiary engagement and desk research, through the nine-criterion screening model, to a go or no-go decision for each use case.

### 2.5 Research Questions

Each research question is multi-layered, with a primary question and sub-questions that probe specific dimensions linked to the theoretical framework. The sub-questions are not exhaustive; they focus fieldwork on the dimensions most likely to determine viability. The five research questions are designed to be answerable through the fieldwork, to differentiate between use cases, and to yield findings that can be scored.

#### RQ1: Institutional economics of operational friction and switching costs

**What operational and administrative frictions in the Nigerian insurance value chain impose the highest costs, what cost structures and institutional arrangements perpetuate them, and under what threshold conditions would incumbent institutions accept the switching costs of adopting new shared infrastructure?**

- **1.1 Cost concentration and scale.** Where along the value chain (distribution, underwriting, claims, settlement, identity) do costs concentrate, and how does unit cost scale with policy size? At what premium level do collection, issuance and adjudication costs exceed margin, rendering a product uneconomic (Churchill, 2006)?
- **1.2 Perpetuating mechanisms.** Which frictions are technological, and which are sustained by incentives, such as the competitive value of proprietary claims data, income from delayed settlement or intermediary remuneration, so that new infrastructure alone would leave them intact (Williamson, 1981; North, 1990)?
- **1.3 Switching-cost thresholds.** What integration, retraining, regulatory re-approval and dual-running costs would adopters bear, what payoff ratio or external mandate would tip a decision, and how have these thresholds shifted with NIIRA-driven recapitalisation (Farrell & Klemperer, 2007; NAICOM, 2026)?
- **1.4 Variation by line of business.** How do cost structures and friction points differ between conventional insurance, microinsurance, Takaful and agricultural or parametric lines?

*Theoretical link:* Rogers (relative advantage, compatibility); Institutional Theory (coercive and mimetic pressure sustaining existing practice). *Feeds:* Criteria 1, 3 and 8; Decision Gate 2.

#### RQ2: Architectural necessity and comparative advantage

**For which use cases, if any, does Cardano's eUTxO ledger and its Plutus and Aiken smart-contract environment offer a demonstrable architectural advantage over conventional centralised or consortium database solutions once cost, governance, privacy and integration overheads are counted?**

- **2.1 Necessity test.** Applying the logic of Wüst and Gervais (2018), which use cases involve multiple writers, no mutually trusted operator and a need for public verifiability, and which could be served by a shared conventional registry operated by a trusted body such as an industry association or regulator?
- **2.2 Architecture-specific properties.** Do properties associated with the eUTxO model, such as locally verifiable transaction validity (Chakravarty et al., 2020), matter in practice for premium pooling, parametric triggers or treaty reconciliation, and do oracle dependencies (for example Charli3, n.d.) reintroduce the trust that the ledger is meant to remove?
- **2.3 Total cost and privacy.** What are on-chain execution costs relative to product margin and to off-chain alternatives (mobile money, payment gateways, bank transfers) at the volumes each use case implies, what data must remain off-chain to satisfy the NDPA 2023, and what maintenance and talent dependencies (for example for Aiken tooling or Hyperledger Identus) affect long-term viability?

*Theoretical link:* Rogers (relative advantage, complexity); Institutional Theory (technology fit as legitimacy). *Feeds:* Criteria 3, 4 and 5; Decision Gates 2 and 5.

#### RQ3: Regulatory decomposition by use case

**For each candidate use case, which regulatory constraints are hard prohibitions, which are conditional permissions, which reflect regulatory silence, and which have sandbox or supervised-pilot pathways, and how do the NIIRA 2025, ISA 2025, CBN payment-system rules and NDPA 2023 interact?**

- **3.1 Classification.** For each use case and each authority (NAICOM, SEC, CBN, NIMC, NDPC), into which of the four categories does each requirement fall: hard prohibition, conditional permission, regulatory silence or sandbox pathway?
- **3.2 Interaction and conflict.** Where do regimes overlap or conflict (stablecoin as payment versus security; automated settlement versus claims-handling and solvency duties; on-chain immutability versus data-subject rights), and which authority leads for hybrid cases (Banwo & Ighodalo, 2026)?
- **3.3 Trajectory and sponsorship.** What would a regulator require to sponsor a supervised pilot, and how does the regulator's own reform agenda (NAICOM, 2026; THISDAYLIVE, 2026) change the likelihood and timing of permission?
- **3.4 Privacy-preserving design and retrospective risk.** If selective-disclosure or zero-knowledge approaches are needed to keep personal data off a public ledger, are they technically mature on Cardano; and where classifications of stablecoins, smart-contract settlement or on-chain premium flows are absent, what is the risk of retrospective regulatory action?

*Theoretical link:* Institutional Theory (coercive isomorphism). *Feeds:* Criterion 4; Decision Gate 4; Hypotheses H2 and H4.

#### RQ4: Ecosystem formation and coordination

**What dynamics govern the formation of a minimum viable ecosystem for a Cardano-based insurance product: what incentivises a first mover, what coordination failures and free-rider problems arise, and what minimum coalition of underwriters, identity providers, payment operators and regulatory sponsors is required?**

- **4.1 First-mover incentives.** For each participant type (underwriter, insurtech, regulator, payments provider), under what payoff conditions is it rational to move early rather than wait, and what subsidies, guarantees or regulatory signals would change that calculation (Katz & Shapiro, 1985; Rochet & Tirole, 2003)?
- **4.2 Coordination failures.** For shared infrastructure such as a claims registry or reconciliation ledger, what collective-action problems arise (data-sharing free-riding, governance of the ledger, cost allocation; Olson, 1965), and which governance form (consortium, industry association, regulator-hosted) would participants accept?
- **4.3 Minimum coalition and critical mass.** What is the smallest coalition and transaction volume that makes a product self-sustaining within 12 to 24 months, and which actors hold effective veto power?
- **4.4 Anchor partners.** Which actors on the access roster (Chapter 4) have both the institutional authority and the operational capacity to serve as anchor partners for a pilot?
- **4.5 Externally owned prerequisites.** Which prerequisites depend on other CPC workstreams (RFP 01, 03, 06, 07, 08) or on infrastructure providers outside the project's control, and what are realistic timelines for resolving them?

*Theoretical link:* Rogers (trialability and observability through peer adoption); Institutional Theory (mimetic and normative pressure). *Feeds:* Criteria 6, 7 and 8; Decision Gates 3 and 6.

#### RQ5: Demand-side acceptance, trust and adoption

**Under what conditions would Nigerian consumers, cooperative members and beneficiaries accept and trust a blockchain-mediated insurance product, and which design features would drive or inhibit adoption?**

- **5.1 Awareness and education burden.** What is the current awareness and understanding of blockchain among target populations (agricultural cooperatives, MSME groups, unbanked individuals), and what education burden would precede adoption?
- **5.2 Usefulness and ease of use.** How do target segments evaluate automated payout, mobile-first onboarding and token or wallet handling relative to current arrangements (Davis, 1989; Venkatesh & Davis, 2000)?
- **5.3 Trust formation.** Is trust in a product transferred from the insurer, the regulator, community intermediaries or the technology itself, and does on-chain transparency raise or lower trust relative to a claims-settlement track record (Gefen et al., 2003)?
- **5.4 Contextual constraints.** How do language, literacy, connectivity, agent-mediated distribution, gender and age shape adoption, and what minimum UX requirements (for variable digital literacy, intermittent connectivity and low rural smartphone penetration) and other design features would mitigate them?

*Theoretical link:* TAM with trust; Rogers (complexity, trialability). *Feeds:* Criteria 2 and 8; Decision Gate 7.

### 2.6 Core Hypotheses

Five propositions enter the study as falsifiable hypotheses, each linked to the research questions that test it.

| # | Hypothesis | Tested through |
|---|---|---|
| **H1** | Insurance entry opportunities in Nigeria differ materially by use case and cannot be addressed by a single generic blockchain approach. | RQ1, RQ2 |
| **H2** | Some opportunities are blocked less by technology than by regulatory pathway, trust, distribution economics or off-ramp and settlement constraints. | RQ3, RQ5 |
| **H3** | Stablecoin and off-ramp access are prerequisites for premium- or payout-linked use cases, but not necessarily for verification- or identity-linked ones. | RQ2, RQ3 |
| **H4** | Regulators and trade bodies may act as legitimacy and coordination partners before they become direct users. | RQ3, RQ4 |
| **H5** | The strongest entry play combines a concrete use case, a reachable counterparty, a local delivery model and a measurable adoption signal, and some apparently promising opportunities will prove cosmetic when tested against those thresholds. | RQ4, RQ5 |

### 2.7 The Eight Candidate Use-Case Hypotheses

Use cases enter the study strictly as hypotheses to be tested, not as pre-selected solutions. If fewer than three clear the screening bar, the study will report that finding rather than promoting weak candidates to reach a target count. Each candidate is tested against its likeliest disqualifier so that the assessment is two-sided.

| # | Use case | Description | Primary disqualifier to test |
|---|---|---|---|
| 1 | Parametric agricultural insurance | Smart-contract payouts for crop failure triggered by decentralised weather-oracle data, for smallholder farmers (Barnett & Mahul, 2007) | Oracle reliability and granularity in rural Nigeria; basis risk (Clarke, 2016); stablecoin and off-ramp access for payouts |
| 2 | Microinsurance premium collection and pooling | Blockchain-aggregated fractional premium payments intended to lower per-transaction cost below the threshold at which very small policies are viable | Whether on-chain costs undercut existing mobile-money and gateway fees |
| 3 | Fraud-resistant shared claims registry | Industry-wide, append-only ledger of claims data to prevent one loss being recovered repeatedly from several insurers | Whether a distributed ledger beats a centralised shared database (Wüst & Gervais, 2018) |
| 4 | Reinsurance treaty reconciliation | Shared ledger automating ceding and assuming of risk between insurers and reinsurers | Willingness to share commercially sensitive treaty data; regulatory classification of automated settlement |
| 5 | Claims automation (smart adjudication) | Smart-contract processing where programmable conditions automate settlement without human adjusters | Regulatory acceptance; boundary between programmable and discretionary claims |
| 6 | Beneficiary verification | Decentralised identifiers to maintain tamper-evident records of life-insurance beneficiaries | NDPA 2023 privacy limits (KPMG Nigeria, 2023); NIMC integration feasibility |
| 7 | Identity-linked insurance services | Blockchain-based identity enabling KYC-compliant enrolment for the unbanked | Data-protection constraints; NIMC and BVN integration; added value over centralised verification |
| 8 | Stable-value settlement and payment rails | Cardano-native stablecoins and naira off-ramps for premium collection and claims disbursement | Stablecoin liquidity on Cardano; off-ramp cost and availability; CBN and SEC posture (Banwo & Ighodalo, 2026) |

**Table 2.7a: Position of each use case in the insurance value chain**

| # | Use case | Distribution | Underwriting | Claims | Settlement | Identity |
|---|---|---|---|---|---|---|
| 1 | Parametric agricultural insurance | | ● | ● | ● | |
| 2 | Microinsurance premium collection and pooling | ● | | | ● | |
| 3 | Fraud-resistant shared claims registry | | | ● | | |
| 4 | Reinsurance treaty reconciliation | | | ● | ● | |
| 5 | Claims automation | | | ● | ● | |
| 6 | Beneficiary verification | | | ● | | ● |
| 7 | Identity-linked insurance services | ● | | | | ● |
| 8 | Stable-value settlement and payment rails | ● | | ● | ● | |

---

## Chapter 3: Research Design and Methodology

### 3.1 Epistemological Position

The study adopts a pragmatist epistemology (Morgan, 2014; Creswell & Creswell, 2018). Pragmatism prioritises the practical consequences of knowledge, which suits a client that needs actionable intelligence. Validity is judged by utility: can the CPC make confident go or no-go decisions from the evidence produced?

### 3.2 Research Approach

The design is an exploratory, qualitative-led mixed-methods study (Creswell & Creswell, 2018; Tashakkori & Teddlie, 2010). Structured interviews, expert calls and beneficiary engagement provide the primary evidence base. Screening scores, market data and frequency analysis provide structured evaluation of the qualitative findings. This is consistent with the RFP's expectation that methodology be designed around its decision gates.

### 3.3 The Eight-Phase Research Architecture

The project is engineered as a funnel of viability: each phase filters, validates or eliminates candidates, and every rejection is documented. Phases are linked to the five contractual milestones (M1 to M5). Week numbers count from the start of the first milestone (Milestone 1; Inception report and Research design Documents) submission approval.

| Phase | Weeks | Milestone | Activities | Principal outputs |
|---|---|---|---|---|
| 1. Baseline desk research and market framing | 1 to 3 | M2 | Aggregate market, protection-gap and regulatory data; document distribution, claims and trust failures; review current insurtech activity; map the literature; compile the long-list without committing to any candidate | Market framing document; confirmed long-list |
| 2. Stakeholder ecosystem mapping | 3 to 6 | M1 to M2 | Map institutions whose cooperation materially affects entry (decision sponsor, regulator, distribution partner, technical implementer, compliance enabler, payment partner, beneficiary); record access status honestly | Counterparty and partner access map (draft) |
| 3. Regulatory readiness assessment | 5 to 9 | M2 | Identify authorities, rules, licensing needs, data constraints and stablecoin treatment for each shortlisted use case; label uncertainty and flag counsel-required items; finalise instruments and ethics review; run Gate A (§3.4) | Regulatory landscape summaries (draft); interview guides; ethics clearance |
| 4. Primary research: fieldwork | 8 to 15 | M3 | 25 to 35 interviews, expert calls and beneficiary engagements (§4.2), including northern and southern locations; symposium contacts converted into consented interviews (§7.8) | Primary evidence base; interview logs |
| 5. Institutional validation | 14 to 17 | M3 | Test draft findings against senior stakeholders and independent experts; separate ecosystem optimism from corroborated evidence | Validation log; confidence register |
| 6. Market prioritisation and use-case selection | 16 to 19 | M4 | Final screen against the nine-criterion model; select up to three priority use cases on evidence; document rejections | Market prioritisation matrix; use-case viability assessment |
| 7. Adoption pathway analysis | 18 to 21 | M4 | For each priority use case define milestone sequence, delivery model, prerequisites, adoption metrics and stop conditions | Draft playbook; adoption signal framework |
| 8. Final strategy and dissemination | 21 to 24 | M5 | Synthesise the regional playbook, decision memo, roadmap, cross-RFP handoff memo and public summary; produce a 20 to 45 minute dissemination video and host a live Q&A | Final report; video; close-out report |

### 3.4 Gate A: The Pre-Fieldwork Provisional Screen

At the end of Phase 3, a provisional screen is run using the same nine-criterion instrument, with every score labelled "desk evidence". Its purpose is to focus interview time. Three rules protect the no-go default:

1. Gate A may re-order interview emphasis but may not eliminate a candidate. All eight remain in the interview guides.
2. The only exception is a Disqualifying finding grounded in primary legal text (for example, a statute that expressly prohibits the function), documented and open to challenge in Phase 5.
3. Gate A scores are archived and never carried into the Phase 6 scorecard.

### 3.5 The Funnel in Summary

| Stage | Candidates in | Filter | Candidates out |
|---|---|---|---|
| Phases 1 to 2 | 8 | Long-list definition; ecosystem mapping | 8 (none committed to) |
| Phase 3 (Gate A) | 8 | Desk-evidence provisional screen; legal-text disqualifiers only | 8, ordered for interview emphasis |
| Phases 4 to 5 | 8 | Primary evidence collected and validated for every candidate | 8, with confidence-rated evidence |
| Phase 6 | 8 | Final nine-criterion screen; single-Disqualifying-score elimination | Up to 3 priority use cases (or fewer, per §2.7) |
| Phases 7 to 8 | Up to 3 | Adoption pathway, delivery model, stop conditions | Playbook and roadmap |

### 3.6 Data Collection Methods

| Method | Target | Volume | Instrument |
|---|---|---|---|
| Desk research | Public data, regulatory texts, industry and academic literature | Comprehensive scan | Data-source inventory template |
| Semi-structured interviews | Regulators, underwriters, insurtechs, Takaful operators, professional bodies, extended stakeholders | Core 11 to 15; extended 7 to 9 | Archetype guides (Appendix A) |
| Expert calls | Former regulators, sector experts, ecosystem actors | 5 to 8 | Adapted guide |
| Symposium engagement | Executives, practitioners, academics | Event-based | Structured observation and consented follow-up (Chapter 7) |
| Field visits | One northern and one southern location | Minimum 2 | Field observation protocol |
| Beneficiary engagement | Cooperative and community representatives | 2 to 3 groups | Plain-language guide (Appendix A, Module 5) |

### 3.7 Data Analysis Framework

Qualitative data are analysed by thematic analysis (Braun & Clarke, 2006) in six steps: familiarisation; initial coding (deductive codes mapped to the nine criteria plus inductive codes); theme identification across archetypes; theme review against the research questions; theme definition; and report production with traceable evidence chains. Screening scores and market data are analysed with descriptive statistics and cross-tabulation. Ecosystem-sourced evidence is coded separately and never counted toward Criteria 1 and 2 (Bias Control 1).

### 3.8 Validity and Trustworthiness

Trustworthiness is pursued through the criteria of credibility, dependability and confirmability (Lincoln & Guba, 1985):

- **Triangulation.** Each claim needing validation is tested against at least two respondent archetypes, for example an insurer's claim tested against a regulator's (Denzin, 2012).
- **Member checking.** Draft findings are tested with senior stakeholders in Phase 5.
- **Audit trail.** Every qualitative claim is traceable to a specific, possibly anonymised, interview.
- **Peer debriefing.** Findings are reviewed by the Industry Research Advisor (Dr. Opeyemi Oladunni) and by academic reviewers. Any advisor affiliation with an interviewed organisation is declared in the Phase 5 validation log and triggers the sponsor-affiliation flag (§6.4).
- **Negative case analysis.** Contradictory evidence is actively sought and documented.

### 3.9 Alignment of Instruments to Research Questions

| Instrument | RQ1 | RQ2 | RQ3 | RQ4 | RQ5 |
|---|---|---|---|---|---|
| Module 1: Regulators | | ● | ● | ● | |
| Module 2: Underwriters | ● | ● | ● | ● | |
| Module 3: Insurtech and Takaful | ● | ● | ● | ● | ● |
| Module 4: Professional bodies | | | ● | ● | |
| Module 5: Beneficiary-side | ● | | | | ● |

---

## Chapter 6: Quality Assurance and Bias Control Protocols

### 6.1 Design Rationale

A recognised risk in technology research is favouring a preferred tool regardless of the problem (Maslow, 1966), known in blockchain research as "hammer-and-nail" bias: forcing a blockchain onto a problem that does not require one (Kshetri & Voas, 2018). The risk is compounded by confirmation bias (Nickerson, 1998) and social desirability effects in interviews (Nederhof, 1985). The RFP's bias register is therefore treated as a design requirement. The ten protocols below operate structurally within the methodology and are not post-hoc checks.

### 6.2 The Ten Bias Control Protocols

| # | Risk | Control | How it is enforced | Structural safeguards absorbed |
|---|---|---|---|---|
| 1 | Cardano insider optimism | Ecosystem views are recorded and weighted separately and never counted as demand validation | Separate "Ecosystem Evidence" section in every analysis; excluded from Criteria 1 and 2 | Technological agnosticism in questioning (business problems asked before technology; Appendix A sequencing rule) |
| 2 | Funder favourability | The study can deliver a defensible no-go; conclusions tie to evidence thresholds | The no-go default is the baseline; affirmative evidence is required to advance | The no-go default; sunk-cost mitigation (budget independent of how many use cases pass); explicit failure reporting |
| 3 | Local-elite / capital-city bias | Mandatory beneficiary-side and rural evidence; northern and southern sampling | Minimum one northern and one southern site; rural respondents required | None (RFP register control) |
| 4 | English-language bias | Beneficiary-side research in Hausa, Yoruba, Igbo and Nigerian Pidgin as well as English | Multi-language capacity confirmed by team composition and ABU's northern location | None (RFP register control) |
| 5 | Event / conference sample bias | The Symposium is an evidence-collection mechanism, not an adoption signal | Symposium evidence tagged and cross-validated with non-symposium interviews (§7.8) | Screener rigour |
| 6 | Government-access bias | Where direct access to a public-sector decision-maker is infeasible, substitute former officials or intermediaries and disclose the effect on confidence | Substitution protocol in the access map | Screener rigour (seniority thresholds, Appendix B) |
| 7 | Partner self-promotion | Partner claims are corroborated by independent evidence | Every claim requiring validation is tested against at least one independent source | Stakeholder triangulation |
| 8 | Regulatory overclaiming | Uncertainty is labelled on all regulatory findings; counsel-required items are flagged; rules are interpreted for the specific use case | Regulatory Assessment Framework (Appendix C) | Negative data highlighting; peer review |
| 9 | Treating intent as adoption | Adoption-signal thresholds (Strong, Moderate, Weak, Misleading) apply before any recommendation to act; expressions of interest are weak signals | Adoption signal framework; "Warm" access is never treated as demand (§4.4) | Separation of design and execution |
| 10 | Small-sample overclaiming | Confidence scoring on every finding; explicit limitations in every deliverable | Findings graded by evidence strength | Data traceability; peer review |

### 6.3 The Design Lock

> [!IMPORTANT]
> **The design-lock rule:** The scoring criteria, the four-level scale, the decision rules of §5.4 and the interview guides are locked on acceptance of this submission. Any later change requires a written change note stating the reason, the date and its effect on comparability, and is reported to the CPC in the next progress update. This separation of design from execution is the principal defence against retrofitting criteria to preferred outcomes.

### 6.4 Sponsor and Recognition Disclosure

> [!NOTE]
> **Sponsorship is not research funding.** Several counterparties on the access roster sponsored the Symposium, and ASISA ABU presented an Institutional Award of Excellence to most of them (Figure 7.5). Sponsorship of a student-association event is not research funding, and ASISA ABU commits that no sponsor has any role in the design, analysis or conclusions of this study. Because sponsorship and recognition can still create goodwill and social-desirability effects, any respondent whose organisation sponsored the Symposium or received recognition there is flagged "sponsor-affiliated". Their claims about viability, demand or intent are corroborated independently under Bias Controls 5, 7 and 9 before they influence a score.

---

## Chapter 8: Research Ethics, Data Governance and Compliance

### 8.1 Ethical Principles

The research involves human participants and applies human-subject safeguards under institutional academic supervision. Departmental ethics review is completed before the first interview and is a Phase 3 exit condition.

- **Informed consent.** Respondents are told the purpose of the study, the research team's role and the funding source (Intersect and the Cardano ecosystem) before participating. Consent is explicit and, where recorded, confirmed on audio.
- **Voluntary participation.** No respondent is pressured, incentivised beyond reasonable acknowledgement, or misled about scope.
- **Do no harm.** The research must not expose respondents to political, employment, regulatory or institutional risk. Extra care applies to public-sector, rural and lower-income respondents.
- **Attribution control.** Attribution (attributable, anonymised or confidential) is agreed individually. The default is anonymised, for example "Director of Strategy at a Tier-1 Underwriter".

### 8.2 Data Classification and Handling

| Category | Description | Handling |
|---|---|---|
| **Public findings** | Methodology, aggregated findings, caveats, publishable recommendations | Published under CC BY 4.0 via GitHub |
| **Confidential findings** | Sensitive commercial or regulatory insights | Available to the CPC only; not published without prior approval |
| **Sensitive counterparty information** | Named attributions, commercial data | Anonymised unless explicit written consent is obtained |
| **Raw data** | Recordings, transcripts, field notes, event contact log | Encrypted storage; restricted access; retained per §8.3 |

### 8.3 Data Retention and Deletion

> [!NOTE]
> **Contract Clause 4.3:** All raw interview notes, anonymised transcripts, datasets and references are retained for a minimum of 12 months following project completion (retention guaranteed until at least January 2028) on secure, encrypted institutional drives with restricted access, to permit independent validation if the CPC requires. At the end of the retention period a deletion and archiving confirmation is produced and submitted with the Milestone 5 close-out.

### 8.4 AI Disclosure (Contract Clause 4.2)

> [!NOTE]
> **Disclosure of AI-assisted tooling:** This study utilized AI tools as assistive technology during multiple phases of the research process, including brainstorming and refining research questions, formatting citations, data organization, preliminary coding of secondary sources, introductory-stage analysis of publicly available market data, document structuring, and summarizing background context from published reports and regulatory documents. The AI functioned strictly as a supplementary tool under continuous human supervision. All outputs generated through AI assistance were critically evaluated, cross-referenced with empirical evidence and primary sources, and substantively revised by the research team. The Principal Investigator and research team assert complete responsibility for the validity, originality, and academic integrity of all findings, analytical frameworks, and conclusions presented in this submission.

### 8.5 Academic Oversight

The ethical framework and execution of the research operate where appropriate, under the academic supervision of the Department of Actuarial Science and Insurance, Ahmadu Bello University. Day-to-day operational control, stakeholder engagement and primary investigatory responsibility reside with the Project Lead, Odufuwa O. Oluwakayode.

### 8.6 Event Imagery

Symposium photographs were produced by the event photographer, Jimmy's Scope, and are credited in each caption. No image is used to identify individuals or to attribute views to them. Any person who appears in an image and wishes it removed may request this from ASISA ABU, and the image will be replaced in the next revision.
