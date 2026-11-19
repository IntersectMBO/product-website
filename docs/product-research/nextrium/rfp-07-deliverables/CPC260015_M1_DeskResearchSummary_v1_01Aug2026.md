---
title: "Desk Research Summary - NexTrium Milestone 1 (CPC-26-0015)"
sidebar_label: "Desk Research Summary"
---

**NEXTRIUM**

Global Innovations Ltd

**Desk Research Summary**

*L2 Adoption and Interoperability Demand in African Emerging Markets:  
A Builder-Embedded Research Study*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D-M1-04                                                                         |
| **Version**               | 1.0                                                                             |
| **Date**                  | 1 August 2026                                                                   |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This Desk Research Summary establishes the publicly documented state of Cardano's Layer 2 and interoperability landscape as at 31 July 2026. It is a formal M1 deliverable required by the grant agreement.

It covers six research areas: the Cardano L2 and partner-chain landscape, the bridge and interoperability provider landscape, Hyperledger Identus resolution status, infrastructure provider documentation, Catalyst and Intersect funding history, and peer ecosystem benchmarking. It also records cross-cutting findings, implications for primary research, and stated limitations.

Every status claim carries a verification date and method. Claims that could not be verified from a current source are excluded rather than qualified. The research surfaced material that changes several positions recorded in the Preliminary VAL-Case Evidence Set (D-M1-02); those changes are carried in version 1.1 of that document and are noted here where relevant.

This document should be read alongside the submitted proposal and RFP 07, in the order of priority established by the grant agreement: (1) Grant Agreement, (2) NexTrium Submitted Proposal, (3) RFP 07.

**1. Overview of Findings**

**1.1 Scope**

This desk research covered publicly available documentation, provider communications, on-chain governance records, Catalyst and Intersect funding records, and peer ecosystem data. It did not include primary interviews, proprietary datasets, or paid expert calls. Where a claim could not be verified from a current source it was excluded.

**1.2 The Seven Most Consequential Findings**

Every observed case of Cardano infrastructure adoption in 2026 was achieved through subsidy, and in the one case where the subsidy ended, the provider failed. Orcfax, USDCx and Pyth all reached users on funded or waived costs. Orcfax is winding down having lost that support.

Support for maintaining infrastructure is far weaker than support for building it. Critical Integrations V1 passed with over 80% DRep support. V2, to maintain the same integrations, passed at 66.96% against a 66.67% threshold, with approximately 63.6% of active stake abstaining.

The African stablecoin market is large, growing, and not blocked by missing L2 capability. Sub-Saharan Africa received over \$205 billion in on-chain value between July 2024 and June 2025, 43% of it stablecoins. That demand is being served today by Tron and Celo at near-zero cost through existing distribution.

No African operator assessed has selected Cardano. Six operators with documented chain selections were identified, including Nigeria's SEC-regulated naira stablecoin deployed on seven chains with three further testnets. Cardano appears in none.

Cross-chain integration complexity on Cardano is documented by the programme administrator itself. Intersect states that standard cross-chain patterns designed for account-based chains require fundamental rework rather than porting for eUTxO. The Wanchain exploit root cause independently corroborates this.

The Cardano oracle layer is in transition and the accounts of why do not reconcile. Orcfax's wind-down was scheduled for 31 July 2026. Pyth Pro went live in May 2026. Orcfax, Charles Hoskinson and Intersect have each stated materially different accounts of the same events, all on the record.

Provider viability is a live dependency risk that this research had not weighted. Four provider status changes occurred within the research window: Wanchain offline, Milkomeda deprecated, Orcfax winding down, SecondFi shut.

**1.3 Effect on the VAL-Case Evidence Set**

Desk research disproved or refined several positions recorded in D-M1-02. The claim that no lightweight DID resolution path exists on Cardano is withdrawn. The VAL-006 gap is reframed from stablecoin availability to access channel. The VAL-005 intelligence layer is split by layer, with a Cardano-native alternative identified for orchestration. These are carried in D-M1-02 version 1.1.

**1.4 Decision Gate Coverage**

| **Gate**                       | **Informed by**                                                                                         | **Section** | **Coverage**                |
|--------------------------------|---------------------------------------------------------------------------------------------------------|-------------|-----------------------------|
| 1, blocked applications        | L2 landscape, peer benchmarking                                                                         | 3, 8        | Partial                     |
| 2, L2 capability priority      | Existing capability, discoverability, documented absences; unknown absences carried to primary research | 3, 5        | Partial by design           |
| 3, blocker classification      | Registry absence, eUTxO complexity, Identus, providers                                                  | 3, 4, 5, 6  | Substantive                 |
| 4, demand at scale             | Subsidy pattern, African market data                                                                    | 8, 9        | Substantive                 |
| 5, interoperability features   | Provider landscape, identity, settlement                                                                | 4           | Four of seven feature types |
| 6, net-positive pathways       | Preliminary classifications, partner chain independence                                                 | 3, 4        | Preliminary only            |
| 7, dependency and leakage risk | Provider viability, Wanchain, peer benchmarking                                                         | 4, 8, 9     | Substantive                 |
| 8, partner prioritisation      | Operator selection, provider viability, contracting constraints                                         | 4, 6, 7     | Substantive                 |
| 9, provider constraints        | Operator chain selection, Orcfax, Wanchain, IOG                                                         | 4, 6, 7     | Substantive                 |
| 10, evidence thresholds        | Catalyst failure analysis, governance outcomes                                                          | 7, 9        | Substantive                 |
| 11, cross-RFP handoff          | Throughout                                                                                              | 10          | Partial                     |

Gates 1, 6 and 11 remain partial at desk research stage by design; each requires primary evidence. Gate 5 coverage is limited to four of seven interoperability feature types, with message passing and wallet UX carried to primary research.

**2. Method and Status Verification Protocol**

This section records the method because four provider status errors were made and corrected during this research. Disclosing them makes every claim that follows verifiable rather than merely asserted.

**2.1 Status Verification Requirement**

Every provider or infrastructure claim in this document carries a verification date and a verification method. Claims that could not be dated to a current source are excluded rather than qualified. Where a source is older than 60 days and no newer source was found, that is stated and the item is flagged for primary confirmation in M2.

**2.2 Source Hierarchy**

Sources were weighted in the following order.

| **Priority** | **Source type**                                                      | **Reason**                                                                                            |
|--------------|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| 1            | Normative documentation with a ratification or publication date      | Dated, authoritative, revisable in public                                                             |
| 2            | On-chain records and milestone registers                             | Financially consequential, independently inspectable                                                  |
| 3            | Repository activity and release notes                                | Reflects work done rather than work announced                                                         |
| 4            | First-hand testing by the research team                              | Current by definition, recorded with date and tester                                                  |
| 5            | Press and provider announcements                                     | Treated as signals to verify, never as evidence                                                       |
| 6            | Attributed single-source statements from named industry participants | Recorded with attribution, labelled Low confidence, and carried to primary research for corroboration |

**2.3 Observation Protocol for Funded Infrastructure**

For Catalyst-funded and treasury-funded projects, four rules applied. Normative documentation first, milestone status second, repository activity third, announcements last. Where a project's public communications and its milestone record diverge, both are recorded with dates rather than one being selected. The observation date is stated. Unresolved divergences become interview questions for M2 rather than inferences here.

**2.4 Treatment of Unverifiable Third-Party Claims**

Where a third-party claim could not be verified, it was excluded from this document without characterisation. A claim is described as incorrect only where a contradicting primary source is held.

**2.5 Corrections Made During This Research**

Corrections were made throughout this research as newer sources superseded earlier ones. Four provider status errors are recorded below as representative; further corrections are noted in the sections where they occur.

| **Claim initially recorded**        | **Actual position**                                         | **Source that corrected it**                                                                                          |
|-------------------------------------|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| Wanchain bridge operational         | Cardano bridge offline since 21 July 2026 following exploit | First-hand interface test by the lead researcher, 30 July 2026, corroborated by BlockSec incident analysis            |
| Milkomeda active                    | Deprecated, shut down since September 2025                  | Milkomeda's official X account profile description                                                                    |
| Orcfax operational                  | Wind-down scheduled 31 July 2026                            | Orcfax published transition announcement, 27 March 2026                                                               |
| LayerZero not integrated, then live | In active development                                       | Intersect, Critical Integrations Technical Progress Update, 31 March 2026, and Program Status Update Report, May 2026 |

The LayerZero item was corrected twice. An initial assessment was reversed on a secondary source reporting LayerZero's announcement of 17 March 2026, then restored when Intersect's stated position was found consistent across two reports two months apart.

**2.6 Limitations of Desk Research in This Ecosystem**

Three observations bear on how much weight this document can carry.

Intersect's Critical Integrations Technical Progress Update of 31 March 2026 was four months old when consulted and was materially behind actual execution on two of five integration pillars.

Intersect's Programme Closure Report of 15 May 2026 was retitled to a Program Status Update Report within a week, with a published apology from the Pentad for the original title and framing. Intersect publishes these reports in its role as Administrator of the Critical Integrations Budget.

LayerZero announced a live Cardano integration on 17 March 2026 that Intersect described as in active development on 31 March 2026 and again in May 2026.

No single source proved sufficient. This is the principal reason primary research in M2 is load-bearing rather than confirmatory.

**3. Cardano L2 and Partner-Chain Landscape**

This section addresses Decision Gates 1, 2 and 3, identifying which Layer 2 and scaling capabilities exist on Cardano, their current status, and what a builder assessing them can and cannot establish from public sources.

**3.1 Two Distinct Findings on Capability**

Decision Gate 2 asks which type of L2 capability would unlock the most immediate adoption value. That question admits four answers, and desk research can address only two of them.

| **Capability state**               | **Can desk research find it** | **Evidence in this document** |
|------------------------------------|-------------------------------|-------------------------------|
| Exists and is discoverable         | Yes                           | Sections 3.3 to 3.12          |
| Exists but is not discoverable     | Partially                     | Section 3.2                   |
| Does not exist, absence is known   | Yes, where documented         | Section 3.13                  |
| Does not exist, absence is unknown | No                            | Carried to primary research   |

The fourth category is structurally invisible to desk research. A capability that no builder has publicly articulated a need for, and that no project has proposed, leaves no documentary trace. It can only be surfaced by asking builders what they required and could not find. This is a principal justification for the primary research design and is recorded in Section 10.

**3.2 No Authoritative Registry Exists**

No published registry of Cardano Layer 2 and scaling solutions is maintained by Input Output, Intersect or the Cardano Foundation. This inventory was assembled from fourteen distributed public sources including project repositories, Catalyst records, research session summaries and provider announcements. Several initiatives were identified through a single source.

Of fourteen initiatives identified, ten have status verifiable as at 31 July 2026 and four do not.

A builder assessing Cardano's Layer 2 landscape cannot obtain a reliable, current answer from any single source. Existing capability that cannot be discovered cannot be evaluated, and is functionally equivalent to absent capability from a deployment decision perspective. This bears on Gate 3, since the resulting blocker is a coordination and ecosystem problem rather than a technical one.

**3.3 Verified Initiatives**

| **Initiative**         | **Type**                                  | **Status**                                                   | **Verified** |
|------------------------|-------------------------------------------|--------------------------------------------------------------|--------------|
| Hydra                  | State channels                            | Adoption phase since February 2026; v2.2.0 released          | 31 Jul 2026  |
| Ouroboros Leios        | Base-layer scaling overlay                | Public testnet live 23 June 2026; mainnet targeted late 2026 | 31 Jul 2026  |
| Peras                  | Fast-finality overlay                     | In development; targets approximately 2-minute settlement    | 31 Jul 2026  |
| Midnight               | Partner chain                             | Mainnet 31 March 2026; Kukolu phase                          | 31 Jul 2026  |
| Materios               | Partner chain                             | Testnet from 10 April 2026                                   | 31 Jul 2026  |
| Partner Chains Toolkit | Framework                                 | Substrate-based, Apache 2.0; in use by Midnight and Materios | 31 Jul 2026  |
| Midgard                | Optimistic rollup                         | Whitepaper 12 June 2026; mainnet targeted end of 2026        | 31 Jul 2026  |
| zkFold                 | ZK rollup and wrapper                     | Rollup milestone completed, reported 24 July 2026            | 31 Jul 2026  |
| Mithril                | Light-client and bootstrap infrastructure | Recursive SNARK verification finalised; in production use    | 31 Jul 2026  |
| Milkomeda C1           | EVM sidechain                             | Deprecated, shut down September 2025                         | 31 Jul 2026  |

**3.4 Initiatives Without Verifiable Status**

| **Initiative** | **Type**                                             | **Last documented**        |
|----------------|------------------------------------------------------|----------------------------|
| Gummiworm      | Hydra-inspired DeFi rollup, Sundae Labs              | June 2025 research session |
| Eryx           | Zero-knowledge bridge between Cardano-based networks | June 2025 research session |
| Hydrozoa       | Lightweight and flexible Hydra Heads                 | Catalyst Fund 12           |
| Mamba          | EVM sidechain                                        | Not established            |

No claims are made regarding these four. They are carried to primary research for confirmation.

**3.5 Delivery Timelines**

Catalyst Fund 8, in 2022, opened a dedicated Cardano scaling solutions category. Its stated rationale was that Cardano faced potential scaling problems in 2022 as high-demand protocols in DeFi, NFTs and gaming emerged, and that without alternative scaling solutions in place there was a risk of overloading demand on the main chain. The category invited zero-knowledge and optimistic rollups, Hydra extensions, and solutions ported from other blockchains.

As at 31 July 2026, Leios targets mainnet in late 2026 and Midgard targets mainnet at end of 2026. Four years elapsed between the stated scaling requirement and the current delivery targets.

This bears on Gate 2. Capability sequencing recommendations should account for demonstrated delivery timelines rather than stated targets alone. \[Confidence: High\]

**3.6 Hydra**

Hydra entered its adoption phase in February 2026. Version 0.10.0 and later are mainnet-compatible. Version 2.2.0 introduced upgraded benchmarks, with partial fanout and directly open heads in development.

Documented constraints remain material. The participant set and UTxO set are fixed before a head opens. Opening and closing carry cost and time overhead. Participant numbers are limited, network topology is statically configured, and large UTxOs carry fund lock-up risk.

DeltaDeFi is the most advanced documented deployment, operating a mainnet strategy in which funds remain on Layer 1 while compressed state commitments operate inside a head. DeltaDeFi adopts a federated trust model among head operators, diverging from a purely adversarial assumption in favour of operational reliability.

Input Output has named Blockfrost integration to remove the requirement to run a local Cardano node as a roadmap item, describing it as targeting a persistent barrier and reducing setup friction for new builders. Section 5 documents the same barrier from a separate workstream.

**3.7 Ouroboros Leios**

The Musashi Dojo public testnet went live on 23 June 2026, running through five stages. Leios targets throughput of approximately 200 KB/s against a current 4.5 KB/s, described by Input Output as 30 to 65 times current levels, and over 1,000 transactions per second against approximately 10 currently. The proposal passed with approximately 84% DRep approval, unlocking 27.7 million ADA. Over 705,000 lines of code have been produced. Mainnet is targeted for late 2026, contingent on testnet results.

If base-layer throughput increases by that magnitude within twelve months, capabilities currently described as requiring Layer 2 may be satisfied at Layer 1. Any claimed L2 blocker recorded in primary research is therefore time-sensitive. The interview instruments include a question testing whether respondents' stated requirements would be met by Leios-scale improvements.

**3.8 Midnight**

Midnight's genesis block was created on 17 March 2026 and mainnet activated on 31 March 2026, with approximately 130 non-critical post-launch fixes queued at launch. Its roadmap runs through Kukolu, the current federated mainnet phase, Mohalu in mid-2026 bringing stake pool operator decentralisation and staking, and Hua in late 2026 making its privacy layer embeddable into applications on other chains.

Midnight maintains its own ledger, consensus mechanism and dual-token system. It is a partner chain, not a Layer 2 settling on Cardano, and integrates with ecosystems beyond Cardano. This distinction is material to value-flow assessment and is carried in Section 9.

**3.9 Partner Chains Toolkit**

The toolkit is Substrate-based and distributed primarily under Apache 2.0. A partner chain may combine any consensus model and transition to Layer 1 status with complete independence from Cardano, with no lock-in mechanism.

Partner-chain security derived from Cardano is therefore a design choice by the partner chain rather than a structural guarantee. This bears on Gates 6 and 7.

**3.10 Midgard**

Midgard is the first optimistic rollup on Cardano, developed by Anastasia Labs with Input Output partnering. Its whitepaper is dated 12 June 2026. It is tokenless, avoids cross-chain bridges, and is isomorphic to the eUTxO model, so existing Aiken and Plutus contracts can be redeployed without rewriting for a new execution environment. Operators sequence and commit blocks in rotating one-hour shifts, with fraud proofs settled on Layer 1. A functional node with live Layer 1 state settlement was reported in September 2025. Mainnet is targeted for end of 2026.

Performance claims of up to 300 times current speeds are project claims and have not been independently benchmarked. \[Confidence: Low\]

Midgard's eUTxO isomorphism removes migration friction for developers moving from Cardano Layer 1 to the rollup. Section 4 establishes that EVM compatibility functions as an entry requirement for external operators, and that cross-chain tooling designed for account-based chains requires fundamental rework rather than porting for Cardano. Midgard addresses friction inside the Cardano ecosystem. It does not address the barrier facing operators deciding whether to enter it.

**3.11 zkFold**

zkFold pursues a phased approach beginning with zkWrapper, which takes an Untyped Plutus Core script and produces a zero-knowledge version of constant length, moving execution off-chain while the on-chain script verifies only the proof. This addresses the 16KB Cardano transaction size limit. A stated dependency on CIP-0381 BLS signatures is satisfied: Plutus Core ships native BLS12-381 primitives including scalar multiplication, point addition, hash-to-curve and pairing checks. A zkFold Rollup milestone was reported completed in Intersect's update of 24 July 2026.

**3.12 SPO-Anchored Security**

Midnight and Bifrost, the latter assessed in Section 4, both derive security from Cardano stake pool operator participation rather than from a dedicated validator set. Bifrost distributes trust across over 3,000 stake pools and states this avoids the 1-of-n honest-participant assumption of BitVM-style bridges.

SPO-anchored security is therefore an architectural pattern spanning partner chains and bridges rather than a partner-chain-only feature. Its value-flow implications are assessed in Section 9.

**3.13 Documented Capability Absences**

Three capability gaps are documented in public sources rather than inferred. Each is an answer to Gate 2 that no existing initiative in this inventory addresses.

| **Capability absent**                                             | **Evidence**                                                                                                                                                        | **Section** |
|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| Phone-number-addressed stablecoin distribution with sub-cent fees | No Cardano wallet or payment interface identified supporting phone-number addressing or USSD access                                                                 | 4, 8        |
| Lightweight DID resolution for credential issuance                | A lightweight path exists for resolution; issuance requires a full Cardano node, wallet and database because Blockfrost does not support DID operation publishing   | 5           |
| Tier-one omnichain messaging on Cardano testnets                  | A Catalyst Fund 14 proposal states Cardano lacks a tier-one omnichain messaging layer, limiting cross-chain application deployment and stablecoin and RWA liquidity | 4           |

Two of the three are absences of capability rather than failures of existing capability. Classifying them under the Appendix B taxonomy places them as Ecosystem blockers, not Technical, since no Cardano infrastructure component has failed. This distinction affects the recommended action: absent capability requires build or partner decisions, whereas failed capability requires engineering or documentation remedies.

Unknown absences are not enumerated here. Their existence is assumed but their content cannot be established from public sources. Primary research instruments include an open question directed at Categories 1 and 2 asking what capability respondents required and could not locate, without prompting from this inventory.

**3.14 Coverage Limitations**

This inventory may omit initiatives with limited public presence or announcements postdating this research. Two actions are carried to primary research: Category 2 respondents will be asked whether relevant initiatives are absent from this list, and the four initiatives in 3.4 will be confirmed through primary research rather than asserted from prior sources.

**4. Bridge, Interoperability and Infrastructure Provider Landscape**

This section presents evidence on provider and operator engagement with Cardano, addressing Decision Gates 5, 7, 8 and 9. Providers build bridge, interoperability, wallet or infrastructure services. Operators, per the RFP definition, make practical deployment, integration, scaling or chain-support decisions. Both are assessed, on different dimensions.

**4.1 Cardano's African Position**

Input Output has operated in Africa since 2017. Approximately 150 Africa-related projects have been funded through Project Catalyst, distributing approximately \$2.5 million to \$3 million across agricultural traceability, education, humanitarian coordination and off-grid energy (Source: Alex Maaza, Ecosystem and Enterprise Growth Lead, Cardano Foundation, June 2026).

Governance presence is established. Nairobi was one of two host cities globally for the Constitutional Convention in December 2024, with one fifth of 120 delegates from Africa. Catalyst Fund 12 launched from Nairobi. The Intersect Regional Hub opened there in September 2024. DirectEd has trained over 300 students and runs the African Blockchain Championship with more than 1,500 contestants.

The Catalyst Fund 14 proposal "2026 African Blockchain Championship - Cardano" states in its problem statement that Cardano lacks real-world solutions built by African developers.

**4.2 Operator Chain Selection**

Six African operators have documented chain selections. Cardano appears in none.

| **Operator** | **Description**                                       | **Chains selected**                                                                           |
|--------------|-------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| cNGN         | Nigeria's SEC-regulated naira stablecoin              | Bantu, Base, Ethereum, BNB Smart Chain, Polygon, Tron, Asset Chain; Lisk, Monad, Arc testnets |
| Flutterwave  | Africa's largest payments infrastructure provider     | Polygon, default for cross-border payments                                                    |
| Zone         | Nigerian interbank blockchain settlement network      | Proprietary network                                                                           |
| Routefusion  | Multi-rail infrastructure, 11 African countries       | Ethereum, Solana, Polygon, Tron, Celo                                                         |
| ADAPT        | African digital trade identity and logistics platform | IOTA                                                                                          |
| Afroza Pay   | Central African financial inclusion, ID4Africa 2026   | Polygon                                                                                       |

cNGN is issued by WrappedCBDC Ltd under the African Stablecoin Consortium, regulated by the Nigerian Securities and Exchange Commission, and backed by Access Bank, Sterling Bank, Providus, First Bank, Interswitch, Korapay, Budpay and Convexity. It is deployed on seven chains with three further testnet deployments. Its stated strategy is that broader chain coverage reduces integration restrictions for developers and exchanges, and that future network rollouts are considered based on market demand and strategic requirements. In November 2025 it recorded \$7.03 million in transfers across four of its chains, a 539% increase from August, with Base accounting for 41.8% of holders (Source: Dune Analytics).

Cardano's absence from cNGN constitutes a demand signal rather than a technical exclusion. \[Confidence: Medium\]

Zone routes transactions directly between institutions without a central intermediary. Zenith Bank, First Bank and UBA joined in July 2024, and the network processed over 1 trillion naira by end of 2024. NIBSS joined as a regulatory node, reported as the first instance of a major regulator operating within a blockchain payment network at that scale. Zone's chain selection does not include Cardano.

Nigeria accounts for 40% of African stablecoin inflows, approximately 25.9 million crypto users, and second place globally in crypto adoption (Source: Chainalysis 2025 Geography of Cryptocurrency Report). Findings specific to Nigeria are identified as such and are not extrapolated to other African markets.

**4.3 Factors in Chain Selection**

Four factors are evidenced, and one commonly assumed factor is not.

Multi-chain deployment is the default strategy among operators assessed, with chains added on demand signals. Cardano is outside the default set.

EVM compatibility functions as an entry requirement. Base, Ethereum, BNB Smart Chain, Polygon, Asset Chain, Lisk, Monad and Arc are EVM or EVM-adjacent, allowing a single deployment pattern to serve multiple chains. Intersect states that cross-chain tooling designed for account-based chains requires fundamental rework rather than porting for Cardano's eUTxO model, covering messaging, state management and replay protection.

One market analysis attributes USDT's African dominance to accessibility across chains, high liquidity and lower KYC requirements, characterising the average African user as prioritising accessibility over transparency. Single source, contested characterisation. \[Confidence: Low\]

Ola Oyetayo, CEO of Verto, states that Nigerian businesses prioritise settlement speed over rate optimisation, because devaluation risk during a slow settlement cycle can exceed the cost of a worse rate. Single attributed source. If corroborated, settlement speed rather than transaction cost is the binding commercial constraint. \[Confidence: Low\]  
  
Grant deployment does not appear among the factors evidenced in these selections. Polygon, the chain most frequently selected by the operators in 4.2, deployed approximately \$50,000 across 31 startups in its single identified 2022 Africa programme. Celo, selected once, has deployed approximately \$2 million through its ecosystem grant programme over four years alongside an Africa-specific incubator. Cardano has deployed approximately \$2.5 million to \$3 million into Africa through Catalyst and appears in none of the six selections. No operator assessed cites ecosystem funding as a selection criterion. On this evidence, grant capital is not a mechanism through which chain selection is influenced. \[Confidence: Medium\]

**4.4 Identity and Data Portability**

African identity infrastructure development is active and occurring on non-Cardano chains.

ADAPT, announced by the IOTA Foundation in May 2026, provides self-sovereign digital identities using decentralized identifiers and verifiable credentials, integrated with Kenya's eCitizen and Nigeria's NIMC. It establishes a single source of truth for trade documents and logistics supported by smart contracts, AI-driven compliance and IoT cargo tracking, targeting a reduction in border clearance times of more than half, with an interoperable finance layer connecting mobile money, banks, stablecoins and digital currencies.

At the Africa Digital ID Hackathon 2026 in Abidjan, held alongside the ID4Africa Annual General Meeting in May 2026, Team Afroza Editor from Cameroon built self-sovereign identity for Central African financial inclusion on Polygon, using verifiable credentials, OCR, selfie biometrics with liveness detection, and a digital wallet storing a DID and QR code. Team TML used eSignet authentication with DID-bound sessions connected via OIDC, drawing DIDs from the national digital identity authority. The winning entry, TrustSeal, provides portable seller reputation through verifiable credentials stored on a self-sovereign decentralized identity chain.

Nigeria's digital ID has passed 130 million enrolments. Ghana adopted an instant decentralized issuance model with over 15 million registered in its first year. Nigeria, Kenya and Morocco were selected for AfCFTA digital identity and DPI rollout. Sierra Leone's National Digital Identity Platform has used the Kiva Protocol with DIDs and verifiable credentials since 2019.

No unified African identity system exists. Nigeria operates BVN and NIN, Kenya operates Huduma Namba, Ghana operates the Ghana Card. Portability across these systems is the problem African identity builders are addressing.

No documented African deployment of Hyperledger Identus was identified in this research.

**4.5 Atala PRISM Discontinuation**

In 2021, Input Output partnered with Ethiopia's Ministry of Education to deploy Atala PRISM across 3,500 schools, 5 million students and 750,000 teachers, described at the time as the largest blockchain deployment globally and positioned within the Digital Ethiopia 2025 strategy.

In October 2024, Input Output ceased development of Atala PRISM. Community reports described approximately 25 layoffs including the product team, with maintenance transferring to a contingent at Input Output Engineering. No official statement accompanied the change.

Charles Hoskinson stated that PRISM had become Hyperledger Identus approximately ten months earlier, that it is an Apache 2.0 open source framework maintained by Input Output Engineering alongside community contributions, that Midnight, RealFi and Lace would use it for identity needs, that this is common practice in open core development, and that identity should not be the product.

Section 5 documents seven undocumented configuration issues in the Identus stack, a Quick Start Guide that does not extend to Cardano deployment, a lightweight resolver contributed by a community developer, and a closed-source indexer pending audit. Those findings were established independently of this context and are consistent with it.

**4.6 Settlement Interoperability**

The South African Reserve Bank noted in 2026 that distributed ledger technology does not automatically integrate with existing payment systems, and that decentralised infrastructure requires clear rules governing when transactions become legally final.

This is the only substantive evidence identified on settlement interoperability in an African context. The feature type is in scope under Decision Gate 5 and remains insufficiently evidenced by desk research.

**4.7 Provider Viability**

Of seven Cardano-relevant providers assessed, three changed status adversely within the research window and one announced mainnet availability while testnet support remained an unfunded proposal.

| **Provider** | **Change**                                                     | **Date**       |
|--------------|----------------------------------------------------------------|----------------|
| Wanchain     | Cardano bridge offline following exploit                       | 21 July 2026   |
| Milkomeda    | Deprecated, shut down                                          | September 2025 |
| Orcfax       | Wind-down scheduled                                            | 31 July 2026   |
| Bifrost      | 1 of 6 milestones complete against three passed delivery dates | 31 July 2026   |

Provider viability is not a weighted factor in any Cardano assessment framework examined. Catalyst category criteria assess the proposal. The Cardano Foundation's stated voting criteria consider delivery track record where relevant. The Critical Integrations oversight structure verifies Statements of Work. None measures continuity.

**4.8 Integration Failure: Wanchain**

On 20 July 2026 an attacker withdrew approximately 515.2 million NIGHT tokens from the Cardano-side reserve pool of Wanchain's Cardano to BNB Chain bridge in four transactions between 14:46 and 14:55 UTC, representing approximately 97% of that pool. Reported losses were between \$9 million and \$13 million. The bridge was taken offline on 21 July 2026.

BlockSec identified the root cause as non-injective signed-message encoding in the TreasuryCheck validator, a Plutus V2 contract. Fourteen variable-length redeemer fields were raw-concatenated without delimiters or length prefixes, allowing distinct field combinations to produce identical byte strings and hashes. A signature authorising approximately 3,110 NIGHT on BNB Chain was reused for a Cardano withdrawal of 203,001,692 NIGHT.

Cardano's SerialiseData function was present in the contract and unused.

Wanchain had operated across dozens of chains for over eight years without a major incident. Minswap and other decentralised exchanges paused NIGHT trading. The Midnight Foundation confirmed the breach was confined to third-party bridge infrastructure.

Interface testing on 30 July 2026 confirmed the bridge remains functionally unavailable: a Cardano wallet connects, Cardano assets cannot be selected, and chain options are unavailable.

**4.9 Announcement and Delivery Divergence**

LayerZero announced Cardano connectivity on 17 March 2026. Intersect described the integration as at architecture-iteration stage on 31 March 2026 and listed it in May 2026 as the sole Critical Integrations pillar in active development. A Catalyst Fund 14 proposal separately sought funding to deliver LayerZero v2 on Cardano testnets.

FluidTokens described Bifrost as entering final development in January 2026. The Catalyst Fund 14 record shows one of six milestones complete against April, May and June 2026 delivery targets that have passed.

Both positions are public and dated. Resolution requires primary research.

**4.10 Provider Status**

| **Provider**  | **Type**                   | **Status**                                                       | **Verified** | **Method**                                          |
|---------------|----------------------------|------------------------------------------------------------------|--------------|-----------------------------------------------------|
| Wanchain      | Decentralised bridge       | Cardano bridge offline since 21 Jul 2026                         | 30 Jul 2026  | Interface test; BlockSec analysis                   |
| Rosen Bridge  | UTxO-native bridge         | Operational; 84 invalid Cardano events rejected in a July attack | 31 Jul 2026  | Provider release notes                              |
| Cardinal      | Bitcoin to Cardano bridge  | Operational since December 2025                                  | 31 Jul 2026  | Provider documentation                              |
| Bifrost       | SPO-secured Bitcoin bridge | In development, 1 of 6 milestones                                | 31 Jul 2026  | Catalyst record; documentation ratified 15 Jul 2026 |
| LayerZero     | Omnichain messaging        | In active development per Intersect                              | 31 Jul 2026  | Intersect reports, March and May 2026               |
| Circle, USDCx | Native stablecoin issuance | Live since 27 Feb 2026                                           | 31 Jul 2026  | Intersect status report                             |
| Milkomeda C1  | EVM sidechain              | Deprecated September 2025                                        | 31 Jul 2026  | Milkomeda account                                   |

**4.11 Preliminary Pathway Classifications**

Classifications are demand and value-flow assessments, not architecture recommendations. All are applicant-supplied desk research pending triangulation in M2.

| **Pathway**  | **Classification**                    | **Basis**                                                                   | **Confidence** |
|--------------|---------------------------------------|-----------------------------------------------------------------------------|----------------|
| Rosen Bridge | Mutual-value                          | Bidirectional Cardano and Ergo benefit; consensus retained on Ergo          | Low            |
| Cardinal     | Mutual-value                          | Bitcoin liquidity inflow with Cardano-side retention                        | Low            |
| Bifrost      | Mutual-value, pending delivery        | SPO participation creates Cardano-side reward retention                     | Low            |
| LayerZero    | Neutral-access, pending delivery      | Connectivity established; adoption impact unproven                          | Low            |
| Circle USDCx | Value-accretive, subsidy-dependent    | Direct issuance on Cardano; flows unproven post-subsidy                     | Low            |
| Wanchain     | Dependency-risk                       | Offline; single contract flaw stranded 97% of the Cardano-side reserve pool | Low            |
| Celo MiniPay | Dependency-risk to value-leakage risk | Distribution layer external to Cardano                                      | Low            |

**4.12 Retractions and Reclassifications**

The position that Wanchain is the incumbent stablecoin bridge carrying USDC and USDT to Cardano is withdrawn. It rested on a September 2025 source. Current Wanchain stablecoin routes are unconfirmed.

Swifin and Reltime were initially assessed as Cardano bridge or interoperability providers. They operate Reltime's Layer 1 Proof of Authority chain and have no documented Cardano relationship. They are reclassified as operators and negative-case respondents.

**4.13 Coverage Limitations**

Decision Gate 5 requires assessment of seven interoperability feature types. This section addresses asset bridging, identity and data portability, settlement interoperability, and liquidity routing in part. Message passing and wallet UX are insufficiently evidenced by desk research and are carried to primary research.

**4.14 Candidates for Screening**

cNGN, Flutterwave, Zone, Routefusion and the IOTA Foundation ADAPT programme were identified through this research and were not in the respondent design at the time of the Research Design Document version 1.0. Each has a documented chain selection excluding Cardano and is relevant to Decision Gate 9. They are carried to the screening phase for assessment against the screening criteria, not added to the respondent list.

**5. Hyperledger Identus Resolution Status**

This section addresses Decision Gates 1, 2, 3, 5 and 9. Identus is assessed as Layer 2 infrastructure, consistent with its own description as a Layer 2 blockchain solution using a distributed ledger as a verifiable data registry.

Findings are graded by evidence quality. Where exact error text or on-chain evidence exists this is stated. Where only behavioural description exists this is stated and the finding is labelled accordingly.

**5.1 Platform Composition**

Identus comprises the Cloud Agent providing self-sovereign identity services, a DIDComm V2 Mediator, and Edge Agent SDKs for TypeScript, Swift and Kotlin Multiplatform. Core libraries include Apollo for cryptographic operations and Castor for decentralized identifier operations. The SDK was re-architected around a plugin system, extracting AnonCreds, DIF and OEA credential formats into independent plugins and removing the previous Pollux monolith. Connection management is now internal to the agent.

Identus is an LF Decentralized Trust project under Apache 2.0. Input Output Engineering maintains the core team alongside community contributions.

**5.2 Identity Interoperability Constraint**

Identus shares features with Hyperledger Aries but was developed independently. It does not work with Hyperledger Aries due to a difference in DIDComm protocol version. It uses the AnonCreds open specification.

This is an interoperability constraint at the identity layer and bears on Decision Gate 5, which requires assessment of identity and data portability as an interoperability feature type. Credentials issued through Identus are not exchangeable with Aries-based systems without additional work. \[Confidence: High\]

**5.3 Infrastructure Asymmetry Between Resolution and Issuance**

A lightweight resolution path exists and was verified during this research. NeoPRISM has joined the Identus Platform as a standalone component providing W3C-compliant DID resolution with multiple deployment modes and Cardano data source integration. It is a Rust implementation requiring only a Cardano node, eliminating the cardano-db-sync requirement of the legacy architecture. Public hosted instances operate at neoprism.patlo.dev for mainnet and neoprism-preprod.patlo.dev for preprod. A development mode runs with an in-memory database and mock Cardano data source.

On 30 July 2026 the research team resolved a PRISM DID published on Cardano preprod through the public preprod instance with no local infrastructure.

Issuance carries no equivalent path. Publishing a DID requires a Cardano node, a Cardano wallet, and a database, because Blockfrost does not support creating or publishing DID identity operations. NeoPRISM replaces the indexing and resolution component, not the Cloud Agent, and does not perform DIDComm messaging, credential issuance, connection management, mediation, presentation exchange or credential status lists.

The lightweight path therefore serves verification and resolution. Issuance retains the full infrastructure requirement. \[Confidence: Medium\]

Whether NeoPRISM implements the gRPC interface the Cloud Agent expects, and can therefore replace the legacy indexer in an existing deployment without code changes, could not be established from public sources. This determines whether the lightweight path is available to issuers at all and is carried to primary research.

**5.4 Documentation Path**

The Identus Quick Start Guide demonstrates a single-tenant deployment with API key authentication disabled and an in-memory ledger for published DID storage, described as the simplest configuration for a developer. Two agents are launched via a local infrastructure script. No Cardano node, database synchronisation service or wallet is included.

A developer following the guide can create a DID, publish it, create a schema, issue a JWT credential, establish DIDComm connections and verify a presentation without connecting to Cardano. Published DIDs exist in memory.

The transition to a Cardano-backed deployment is signposted in a single reference to multi-tenancy management and environment variable configuration options. No dedicated Cardano deployment guide is referenced from the Quick Start Guide.

NeoPRISM does not appear in the Quick Start Guide. The verifiable data registry section names only the legacy indexer component.

The guide states minimum development requirements of four cores, 16 GB of memory and 128 GB or more of solid-state storage. These apply to the in-memory configuration. No specification guidance is published for a Cardano-backed deployment, which additionally requires a Cardano node, a database synchronisation service, its database, and per-agent indexer instances. \[Confidence: High\]

**5.5 Documented Deployment Barriers**

Nine barriers were documented during validation of a three-agent Identus deployment on Cardano preprod using Cloud Agent 2.2.0 and the legacy indexer at version 2.6.0. All were resolved and the deployment completed a full sequence of DID publication, credential issuance and independent presentation verification.

Barriers are graded by available evidence.

| **Barrier**                                                                                                                                                | **Type**      | **Evidence grade**                  |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|-------------------------------------|
| Network value accepts Testnet or Mainnet only; passing a preprod value causes a startup exception                                                          | Tooling       | Exact error text                    |
| Cloud Agent requires KV version 2 secrets engine; version 1 produces key pair and wallet seed errors                                                       | Tooling       | Exact error text, commit-referenced |
| Secrets store file backend exceeds Linux path length limits with DIDComm key names                                                                         | Tooling       | Exact error text                    |
| Bridge network gateway configuration across separate container networks produces silent failure                                                            | Coordination  | Partial error text                  |
| Out-of-band invitations accept base64 encoding only; incorrect format returns a server error                                                               | Tooling       | Partial error text                  |
| Ledger configuration defaults to in-memory; without explicit configuration the agent reports publication without submitting a transaction                  | Documentation | Behavioural description             |
| Credential status registry URL is controlled by a distinct environment variable and embedded in issued credentials rather than registered as a DID service | Documentation | Behavioural description             |
| Cloud Agent REST API does not expose holder-side acceptance of connectionless credential offers                                                            | Ecosystem     | Behavioural description             |
| Repeated publication of an already-published DID incurs transaction fees for operations subsequently rejected                                              | Coordination  | On-chain evidence                   |

Three barriers carry exact error text and are independently reproducible. Two carry partial error text and are inspectable but not reproducible from the documentation held. Three carry behavioural descriptions only and are recorded as documented observations rather than verified findings. One carries on-chain evidence and is described in 5.6.

Independent technical review of two of these barriers was commissioned as part of Milestone 1 and is reported separately.

**5.6 Publication Cost Without State Verification**

The Cloud Agent submits DID creation operations without verifying whether the DID is already published. PRISM operations are carried in Cardano transaction metadata, so the wrapping transaction is valid and the fee is charged on inclusion, while operation validity is assessed off-chain by the indexer afterwards. Rejected operations therefore incur full transaction fees with no refund mechanism at this layer.

During validation, an identical signed creation operation was submitted three times. The first succeeded. The second and third were rejected with an error indicating the operation was a creation operation against existing DID state. Fees were 0.183365, 0.183365 and 0.195421 ADA, totalling 0.562151 ADA, of which 0.378786 ADA or 67.4% was expended on rejected operations.

Identus documentation states that the publication status returned by the Cloud Agent is the agent's internal status and does not indicate the lifecycle of the DID observed on the blockchain, directing developers to verify separately through the resolution endpoint. No documented guard against republication was identified.

A local state check before submission, which the agent has sufficient information to perform, would prevent the expenditure. This finding is scoped to Cloud Agent 2.2.0 with indexer version 2.6.0. Current component behaviour was not tested. \[Confidence: Medium\]

**5.7 Component Continuity**

Development of the predecessor identity product ceased in October 2024. Community reports described approximately 25 departures including the product team, with maintenance transferring to Input Output Engineering. Input Output has stated that Identus is an Apache 2.0 open source framework maintained by its engineering team alongside community contributions, that Midnight, RealFi and Lace will use it for identity needs, and that identity should not be the product.

The lightweight resolution component was contributed by a community developer and subsequently adopted into the platform. The legacy indexer was closed source pending security audit at the time it was scheduled for deprecation.

Input Output's Identus roadmap states that broader adoption of self-sovereign identity on Cardano requires robust, accessible and standardised solutions including offline-first approaches, and commits to enhancing capabilities including offline-first solutions, lightweight infrastructure, and education to drive adoption of decentralized identifiers and verifiable credentials.

Lightweight infrastructure and offline-first operation are named as priorities by the maintaining organisation. Both correspond to barriers documented in 5.3 and 5.4.

**5.8 Adoption Evidence**

Identus maintains an adopters register listing organisations and projects using the platform in production or active development, and a use-cases documentation set. The contents of these were not retrieved during this research and are recorded as a gap.

Input Output states that Identus contributions are publicly available in its repositories for feature development, community outreach and support for developers implementing the platform in development, test and production environments.

No documented African deployment of Identus was identified in this research. Section 4 records African identity infrastructure development occurring on other distributed ledgers. \[Confidence: Low\]

**5.9 Classification and Routing**

Under the Appendix B taxonomy, the barriers in 5.5 classify as four tooling, two documentation, two coordination and one ecosystem. None classify as technical. No Cardano ledger component failed during validation; the ledger functioned correctly as the verifiable data registry throughout.

Recommended actions are documentation improvement for the documentation barriers, coordination for the network configuration and publication cost barriers, and provider engagement for the connectionless issuance gap. None requires engineering investment in Cardano infrastructure.

The RFP places full developer tooling audit outside scope. Barriers documented here are retained where they directly affect adoption of identity infrastructure on Cardano. Remaining developer experience findings are routed to the developer experience workstream through the Cross-RFP Handoff Memo.

**5.10 Limitations**

The adopters register and use-cases documentation were not retrieved. Whether the lightweight resolution component can replace the legacy indexer behind an existing Cloud Agent deployment was not established. The relationship between released Cloud Agent version identifiers observed during this research was not resolved and no claim is made regarding version currency. Three of nine documented barriers rest on behavioural description without error text and are labelled accordingly. Current component behaviour with respect to the publication cost finding was not tested.

Each is carried to primary research with the Identus maintainer community, which holds weekly public community calls and maintains public discussion channels.

**6. Infrastructure Provider Documentation**

This section assesses oracle and intelligence infrastructure providers relevant to Cardano, addressing Decision Gates 3, 6, 7, 8 and 9. Status is verified as at 31 July 2026 except where stated.

**6.1 Oracle Layer Transition**

Cardano's oracle layer changed materially between December 2025 and July 2026. Three parties have published accounts of that change. The accounts differ on cause and consequence, and all three are recorded here without adjudication.

Orcfax, a Cardano-native oracle operating on mainnet since September 2023, published a transition announcement on 27 March 2026 stating the project was unfunded and entering operational mode, with a wind-down of the network prepared for 31 July 2026 should new funding not be found. It named three causes: the conclusion of Cardano Builder DAO support after a second funding round was not approved; a market in which most Cardano projects were unable or unwilling to pay for independent oracle feeds, opting for free single-source APIs; and the loss of a signed service level agreement with a major Cardano DeFi platform when that platform switched to Pyth. Orcfax stated disappointment that official Cardano entities had chosen to sponsor external projects while requests for cooperation from the two long-running Cardano-native oracle projects went unanswered, and warned that the ecosystem risked losing proven native solutions and centralising on a single data provider.

Charles Hoskinson, announcing the Pyth integration in December 2025, stated that Cardano had tried to build an indigenous oracle solution and that it had not worked out as well as it should, and that oracles were the first part of major integrations.

Intersect, in its Critical Integrations technical progress update of 31 March 2026, stated that the addition of a widely adopted institutional-grade oracle provider strengthens the ecosystem's data infrastructure, building on and complementing existing oracle solutions already developed within the community.

The three accounts describe replacement, failure and complement respectively. Resolution requires primary evidence from the parties and is carried to Milestone 2. \[Confidence: High on the accounts as published; no finding is asserted on cause\]

**6.2 Provider Dependency on Core Team Deliverables**

Both Cardano-native oracle providers document structural dependency on Input Output deliverables.

Orcfax suspended its ADA/USD mainnet feed on 15 May 2024 following failure of the Plutus-Chain-Index module used by its Cardano Open Oracle Protocol. Orcfax states that Input Output discontinued support for the Plutus Application Backend and Plutus-Chain-Index shortly after the protocol's release in mid-2023, creating a technical debt dependency that eventually took the feed offline. Its subsequent protocol version moved to community-maintained components. Its published incident report records that the backup was unusable because database mount snapshots were not being taken, and that development delays at a contracted party affected the rollout schedule. At the time of the outage, one project was using the mainnet feed in production.

Charli3's partner-chain oracle proposal states that the biggest risk is that functionality Input Output has promised may be delayed, in which case the project would pause until unblocked, expressing confidence that the required functionality will be delivered.

Two independent Cardano-native oracle providers, one of which subsequently entered wind-down, both identify dependency on core team deliverables as a principal risk. This classifies as a Coordination blocker under the Appendix B taxonomy rather than a Technical one, and bears directly on Gate 9. \[Confidence: Medium\]

**6.3 Orcfax**

Orcfax operated as a second-generation Cardano oracle implementing the Cardano Open Oracle Protocol, with fact statements triangulated from a minimum of three independent sources, structured as JSON-LD and serialised to CBOR, published through three Plutus V2 scripts and archived on Arweave. Orcfax states that all off-chain and on-chain code was open source and audited. Feed types comprised exchange rate feeds and Cardano Native Token feeds. Publication operated on heartbeat and on-demand models. Mainnet and testnet environments were supported.

Validator participation required a Validator License NFT, minted in April 2024 and available on secondary markets, together with a token deposit and node infrastructure. An incentivised testnet ran through four phases toward a stated target of 100 distributed validators.

Orcfax stated openness to custom oracle solutions for aligned projects and operated a sponsored feed model under which third parties could fund feeds. Among its final deliverables was a demonstration application illustrating how custom non-price oracle feeds could be deployed on its infrastructure for emerging markets including AI provenance and real-world asset valuations. Custom data publication was technically supported and was not available as a self-service path.

The complete technical stack was open sourced on entering operational mode. The datum format and publishing scripts therefore persist independently of the network.

Wind-down was scheduled for 31 July 2026. Whether it proceeded is not established. \[Confidence: High on the announcement; status on the stated date unconfirmed\]

**6.4 Charli3**

Charli3 has operated on Cardano since April 2021, with an ADA/USD mainnet feed live since October 2022. It provides push and pull oracle models, with feeds available on mainnet and preprod. Node operators submit values which are aggregated on-chain within a eUTxO datum, which Charli3 describes as the only oracle built natively in that manner on Cardano. The pull model operates on a pay-per-request basis with data available on-chain after approximately 20 seconds, which Charli3 identifies as the best achievable on current architecture against a stated preference for sub-second finality.

A Catalyst Fund 13 proposal describes a self-service pull-based oracle platform with an open-source SDK, enabling builders to request, launch and integrate a pull-based feed for any Cardano Native Token price pair in minutes. Delivery status was not established. If delivered, this addresses the self-service gap identified in 6.3.

No indication of funding distress was identified. Funding position was not independently verified. \[Confidence: Medium\]

**6.5 Pyth**

Pyth's institutional oracle was announced in December 2025 as the first confirmed vendor under the Critical Integrations framework, approved by the five Cardano entities operating as the Pentad. It went live on Cardano in early May 2026, with Indigo Protocol as the first integration, which states it will use the feeds across its forthcoming update including synthetic assets and forex products.

Pyth operates a pull-based model in which applications fetch updates from an off-chain service and submit them to an on-chain contract that cryptographically verifies authenticity, aggregating data from institutional publishers into a single reference price with a confidence interval. Reported latency is sub-100 milliseconds.

In June 2026 Intersect announced that Cardano ecosystem projects can claim one year of free unlimited API access, funded through the Critical Integrations budget.

Separately, a Pyth protocol upgrade dated 31 July 2026 introduces mandatory API keys and paid subscriptions, merging its previously free tier into the paid service, with plans starting at \$500 per month. This ends the free permissionless data model globally. Cardano projects are shielded by the funded access period until approximately June 2027.

The interaction between a funded free period and a market in which projects were unwilling to pay for oracle feeds is assessed in Section 9. \[Confidence: High\]

**6.6 Intelligence Layer**

The Agentverse platform operated by Fetch.ai hosts approximately 2.7 million registered agents with 160 million agent-to-agent messages exchanged, providing framework-agnostic registration, hosting and discovery via an on-chain registry with 48-hour registration renewal. ASI Cloud, providing inference compute on decentralised GPU infrastructure, launched in September 2025 and exited beta in December 2025.

Fetch.ai is not Cardano infrastructure. Assessment of its relevance to this research required establishing whether a Cardano-native equivalent exists.

**6.7 Masumi**

Masumi is a Cardano-native protocol for agent payments, identity and decision logging, developed by NMKR with Plan.Net Group of the Serviceplan Group. It comprises the protocol layer, a marketplace and discovery layer, and a distributed runtime for deploying, executing and monitoring agent services. Agents register as blockchain-backed non-fungible tokens providing immutable identity. The platform is framework-agnostic.

Payment contracts are live on mainnet and preprod. The platform operates its own improvement proposal process, provides command-line tooling, a package distribution, and a model context protocol server, and includes a workflow automation node providing Cardano paywall functionality. It is documented in the Cardano Developer Portal. A payment service handles wallet management, agent-to-agent and human-to-agent transactions, token swapping between stablecoins and ADA, and transaction batching to reduce fees. Fiat-to-ADA ramps are provided through NMKR's minting and payment infrastructure.

Enterprise engagement is documented with named multinational firms seeking compliant and transparent AI systems.

A Catalyst Fund 14 project describes plans for a scalable Layer 2 with settlement to Cardano Layer 1 to handle high-volume agent interactions, together with developer software development kits embedding decentralized identifiers into agents. One of six milestones is recorded complete. This constitutes a Layer 2 initiative not identified in the inventory at Section 3 and is added there by reference.

**6.8 Layer Distinction in Intelligence Infrastructure**

Masumi and Fetch.ai address different layers. Masumi provides agent payments, identity, discovery and runtime on Cardano. Fetch.ai provides an agent framework and hosting; ASI Cloud provides inference compute.

For agent identity, payments, discovery and runtime, a Cardano-native option exists. For decentralised inference compute, no Cardano-native equivalent was identified.

Where a Cardano-native alternative exists, selection of an external provider is an architectural preference rather than evidence of a Cardano capability gap. Where none exists, absence of capability is the finding. Value-flow classification of intelligence infrastructure must therefore be assigned by layer rather than to the stack as a whole. \[Confidence: Medium\]

**6.9 Core Infrastructure Stewardship**

Input Output submitted nine treasury proposals for 2026 with a funding request under half the previous year's, spanning protocol maintenance, consensus, upgrades, scaling, developer experience and smart contracts. It returned 4.1 million ADA after concluding that newer scaling research had made an earlier pricing initiative obsolete.

Input Output has stated an intention to taper its treasury reliance annually, with external contractors expected to inherit substantial portions of the protocol development pipeline by the close of 2026.

A dedicated Layer 2 scaling entity is being established to take on long-term stewardship of Cardano's Layer 2 infrastructure by the end of 2026, with funding sought to expand engineering, codebases and roadmaps into it.

Stewardship of Layer 2 infrastructure is therefore changing during the period this research covers. Investment sequencing recommendations produced in Milestone 3 should identify the intended owner of each recommended action, which may differ from the owner assumed at the time of the RFP. \[Confidence: Medium\]

**6.10 Classification and Routing**

Under the Appendix B taxonomy, findings in this section classify as follows. The oracle provider dependency on core team deliverables is a Coordination blocker. The absence of a self-service path for custom oracle data is an Ecosystem blocker. The absence of Cardano-native inference compute is an Ecosystem blocker. No Technical blockers were identified in oracle or intelligence infrastructure.

Recommended actions are coordination for the dependency finding, and partner or build assessment for the two capability absences. None requires engineering investment in Cardano ledger infrastructure.

Findings concerning artificial intelligence commercial positioning are routed to the relevant adjacent research initiative through the Cross-RFP Handoff Memo rather than expanded here.

**6.11 Limitations**

Orcfax's status on 31 July 2026 was not established. Charli3's funding position was not independently verified and the delivery status of its self-service platform was not established. Pyth's Cardano usage since launch was not quantified. The delivery status of the Masumi Layer 2 project was not established beyond its recorded milestone position.

**7. Catalyst and Intersect Funding History**

This section addresses Decision Gate 10, which asks what evidence should be required before funding Layer 2 or interoperability proposals. It does not describe funding mechanisms, which are known to the commissioning body. It documents what has been funded in this research area, what became of it, and what that record implies for evidence standards.

**7.1 Layer 2 and Interoperability Funding Record**

Catalyst has funded work in this area since 2022.

Fund 8 opened a dedicated scaling solutions category inviting zero-knowledge and optimistic rollups, Hydra extensions, and solutions ported from other blockchains, on the stated rationale that Cardano faced scaling problems as demand grew and risked overloading main-chain capacity without alternatives.

Fund 13 funded an eUTxO Layer 2 interoperability project run by the Hydra team, exploring interoperability for payments and smart contract execution across Cardano Layer 2 solutions, with the stated aim of avoiding liquidity fragmentation and producing standardised improvement proposals so that new Layer 2 designs incorporate interoperability from the outset. Its stated motivation is to apply lessons from Ethereum's Layer 2 fragmentation before comparable conditions develop on Cardano.

Fund 14 received or funded a multi-chain wallet software development kit connecting Cardano applications to non-Cardano wallets, Bitcoin Lightning payments via a Cardano bridge, a zero-knowledge software development kit bridging banking to Cardano decentralised finance, omnichain messaging support on Cardano testnets, a cross-chain interoperability protocol using on-chain configuration contracts, an agent network with a planned Layer 2, and a stake-pool-secured Bitcoin bridge at 739,000 ADA.

Catalyst has separately funded a Hydra application ecosystem comprising node distribution, mobile software development kits, a regional loyalty programme, financial systems libraries, point-of-sale systems and payment applications.

Bridge and interoperability work was also funded outside Catalyst. An EVM sidechain received funding in 2021 for a rollback handler, multi-signature for EVM bridges, and a cross-chain asset transfer standard.

**7.2 Outcomes of Funded Work**

Delivery outcomes were traced where public records permit.

| **Funded work**                                                                               | **Status as at 31 July 2026**                                         |
|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| EVM sidechain bridge standards, 2021                                                          | Deprecated, shut down September 2025                                  |
| Oracle infrastructure, funded via stake pool offering, token launch, Catalyst and Builder DAO | Wind-down scheduled 31 July 2026                                      |
| Stake-pool-secured Bitcoin bridge, Fund 14, 739,000 ADA                                       | 1 of 6 milestones complete against three passed delivery dates        |
| Agent network with planned Layer 2, Fund 14                                                   | 1 of 6 milestones complete                                            |
| Zero-knowledge rollup                                                                         | Rollup milestone reported complete, July 2026                         |
| Lightweight Hydra Heads, Fund 12                                                              | Status not verifiable from public sources                             |
| Hydra-inspired decentralised finance rollup                                                   | Status not verifiable from public sources                             |
| Zero-knowledge bridge between Cardano-based networks                                          | Status not verifiable from public sources                             |
| Self-service pull oracle platform, Fund 13                                                    | Delivery status not established                                       |
| Omnichain messaging on testnets, Fund 14                                                      | Sought after mainnet endpoints were announced; status not established |

Of ten funded or proposed items traced, one is confirmed delivered, two ended in deprecation or wind-down, two are substantially behind stated schedules, and four cannot be status-verified from public sources.

Fund 8's stated scaling rationale dates from 2022. The base-layer scaling upgrade and the optimistic rollup both target mainnet at end of 2026. Four years separate the funded requirement from current delivery targets.

Catalyst publishes a public project tracker recording milestone status, so delivery against funded scope is verifiable for each proposal. The four items above could not be status-verified because the question asked here is not whether milestones completed but whether the work is operational today. That is a different question, and it is not answered by any published record. Milestone completion establishes that a deliverable was produced and accepted. It does not establish whether the resulting infrastructure is running, adopted, or discontinued. \[Confidence: Medium\]

**7.3 Evidence Standards in Use**

Catalyst applies published criteria by category. The Cardano Use Cases Product category will not fund proposals lacking sufficient evidence of an existing product or service demonstrating adoption, usage or traction, or lacking evidence that the outcome will leverage Cardano. The Partners and Products category requires measurable adoption outcomes with a clear link to Cardano such as transaction volume, user growth or liquidity metrics, leadership by or partnership with a business holding a two-year track record, and evidence of a working product.

The Cardano Foundation states that its assessment of 2026 proposals considered feasibility risks, open-source commitments, prior ecosystem funding, and delivery track records where relevant.

Both standards assess the proposal at the point of funding.

**7.4 Where Those Standards Did Not Predict Outcomes**

The two items in 7.2 that ended in deprecation or wind-down each satisfied the standards applied when funded.

The EVM sidechain was funded for bridge infrastructure work and publicly endorsed by ecosystem leadership. The oracle provider held audited open-source code by its own account, operated a mainnet product from September 2023, published incident reports with root cause analysis, and secured funding through four separate mechanisms. Neither failed on the criteria assessed. One was overtaken by ecosystem direction; the other by absence of sustaining revenue.

Four documented weaknesses in the selection process are recorded in public sources. The Cardano Foundation stated in December 2024 that concerns it had raised since 2021 had not all been addressed, naming the specific concern that high-quality proposals from new entrants do not receive sufficient ecosystem support, and allocated 180 million ADA to vote in Fund 13 in response. Reporting in February 2026 noted criticism that Catalyst has funded many small projects without clear measurable impact. A Fund 11 proposal to build reputation scoring states that voters lack trust in community reviews and that Fund 10 showed low participation and limited engagement; it records two of four milestones complete. Catalyst's documented review process screens submitted reviews for length, similarity, profanity and use of artificial intelligence, and weights non-allocated reviews lower to reduce gaming.

**7.5 Implication for the Evidence Threshold Framework**

Selection criteria assess the proposal at the point of funding. The milestone framework then verifies delivery during execution, with fund release conditional on verified completion. Delivery against stated claims is therefore measured, and milestone records provide visible evidence of progress, including where projects fall behind schedule as shown in 7.2.

Measurement ends at the final milestone.

No mechanism was identified that assesses whether a completed project remains operational, whether it achieved adoption, or whether it generates activity on Cardano after funding concludes.

The two outcomes in 7.2 that ended in deprecation and wind-down both occurred after their funded work was complete. The EVM sidechain delivered bridge standards in 2021 and was shut down in 2025. The oracle provider delivered a mainnet product and operated it for over two years before entering wind-down. Milestone verification would have recorded both as successfully delivered. Neither outcome would have been visible through any assessment applied.

This is the specific gap. Funding decisions are made on proposal quality and released on delivery verification. Neither measures survival, adoption, or chain activity, which are the outcomes that determine whether funded infrastructure produces the value the funding sought.

Four design directions follow, recorded for testing in primary research rather than asserted here: proposer track record extended beyond delivery completion to operational continuity; outcome measurement at a defined interval after final milestone rather than at completion; sustainability evidence addressing conditions after any subsidy ends; and independent technical verification for claims a community reviewer is not equipped to assess. \[Confidence: Medium\]

Continuation funding is assessed on a different basis to initial funding, and that difference is examined in Section 9.

**7.6 Contracting as a Constraint on Delivery**

Intersect states that the hardest part of administering the Critical Integrations programme was contracting at speed in an environment where vendors required confidentiality and commercial terms varied substantially. Of five funded pillars, the one that did not deliver within its window failed on unmet commercial terms rather than on technical grounds.

Where a funding decision depends on agreement with an external tier-one vendor, commercial negotiation rather than technical feasibility may determine delivery. This bears on Gate 8, which asks which partners Cardano should prioritise, and suggests that partner assessment should weight commercial reachability alongside technical fit. \[Confidence: High\]

**7.7 Limitations**

Outcome status could not be established for four of the ten traced items. Delivery outcomes for the Hydra application ecosystem were not assessed. The relationship between funded proposals and subsequent chain adoption by external operators was not established and is not asserted. Whether the weaknesses documented in 7.4 have been addressed under current stewardship was not established.

**8. Peer Ecosystem Benchmarking**

The RFP requires that benchmarking explain what Cardano can learn, adapt, avoid or test, and that it not become a generic competitor report. This section is structured accordingly. Ecosystem descriptions are included only where they support one of those four conclusions.

**8.1 Scope**

Four ecosystems were assessed for conversion of Layer 2 and interoperability infrastructure into adoption in African markets: Celo, Tron, Stellar and Polygon.

Lisk, Hedera, Algorand and Base were surveyed and excluded. Recent verifiable African-specific adoption data could not be established for any of them. Their exclusion reflects the absence of evidence, not an assessment of relevance.

Polygon is included with limited coverage. Its Open Money Stack, a modular framework for stablecoin payments and cross-border transfers announced in January 2026, is verified. African adoption figures are not, and no quantified claim is made.

**8.2 Demand Baseline**

Sub-Saharan Africa received more than \$205 billion in on-chain value between July 2024 and June 2025, an increase of 52%, with stablecoins representing 43% of that activity. Nigeria accounts for 40% of African stablecoin inflows, has approximately 25.9 million crypto users, and ranks second globally in crypto adoption. Ethiopia recorded 180% year-on-year growth in retail-sized stablecoin transfers following currency devaluation. Kenya ranks fifth globally for transactional stablecoin use.

Over 8% of regional value transferred was under \$10,000, against 6% globally, indicating individual rather than institutional activity.

A February 2026 survey reported that 95% of Nigerian respondents would prefer to receive payments in stablecoins rather than local currency. A separate survey of 4,658 crypto users across 15 countries found Africa held the highest stablecoin ownership rate, with 79% of Nigerian and South African respondents holding stablecoins.

Remittance costs to Sub-Saharan Africa average 8.78% on a \$200 transfer, against a United Nations target of 3%, on \$56 billion received in 2024.

This demand is served today. It is not waiting on Layer 2 capability. \[Confidence: High\]

**8.3 What Cardano Can Learn: Distribution Precedes Infrastructure Adoption**

MiniPay surpassed 16 million activated wallets across more than 65 countries as at June 2026, with the majority of users in African markets. Growth ran from 13 million at end-2025 to 15 million in the first quarter of 2026 to 16 million by June.

Celo leads all Ethereum Layer 2 networks on user metrics, with peak daily active users of 840,000 and monthly actives of 1.3 million, ahead of Base, Arbitrum and Optimism. It has recorded over one billion lifetime transactions and monthly stablecoin volume above \$3 billion.

MiniPay launched in September 2023 inside a mobile browser with an existing installed base of hundreds of millions of African users, before becoming a standalone application in 2025. A user opens a browser already present on a low-cost Android device, accesses the wallet without a separate installation, and sends stablecoins to a phone number at sub-cent cost without a bank account, seed phrase prompt or gas token.

The adoption did not follow from superior infrastructure. It followed from embedding within an existing distribution channel.

Cardano has no equivalent distribution partnership. This is a Gate 1 and Gate 4 consideration: the constraint on African adoption evidenced here is reach, not capability. \[Confidence: High\]

**8.4 What Cardano Can Adapt: Grant Design Rather Than Grant Volume**

Grant deployment volume does not explain adoption outcomes.

Celo has deployed approximately \$2 million through its ecosystem grant programme over four years, across more than 575 applications and over 120 signed grant contracts, alongside a flagship accelerator and an Africa-specific incubator. Cardano has deployed approximately \$2.5 million to \$3 million into Africa through Catalyst across approximately 150 projects. The two are comparable in quantum. Celo holds 16 million activated wallets with the majority of users in African markets. Cardano does not appear in any of the six operator chain selections recorded in Section 4.2.

Polygon deployed approximately \$50,000 across 31 startups in a single 2022 Africa programme and is the chain most frequently selected by those operators.

Stellar's adoption fund has deployed \$100 million across more than 160 projects and holds commercial relationships with PayPal, Franklin Templeton and MoneyGram, with inclusion in the S&P Digital Markets Index in October 2025.

Two differences in grant design are evidenced rather than differences in volume.

Celo's principal grant pool is gated on demonstrated on-chain transaction volume. Awards are tiered by daily transaction count, at approximately \$25,000 for teams at 10,000 to 100,000 daily transactions, approximately \$50,000 at 100,000 to 500,000, and case-by-case above 500,000. Stated criteria include verifiable evidence of real usage in transactions, users and revenue, a clear path to generating meaningful transaction volume or protocol income, and teams building revenue-generating applications contributing to sustainable chain economics.

Celo also operates an invite-only pool delivered with its foundation's developer relations team, explicitly designed to fast-track projects with a proven track record in other ecosystems onto Celo.

Cardano's grant criteria assess the proposal at the point of funding and verify delivery at milestone completion, as recorded in Section 7. Neither gates award on demonstrated chain activity, and no equivalent mechanism for acquiring proven projects from other ecosystems was identified.

The variable evidenced here is what grant capital is conditioned on, not how much of it is deployed. \[Confidence: Medium\]

**8.5 What Cardano Can Avoid: Single-Chain Stablecoin Exposure**

Documented African market guidance warns against building on a stablecoin that lacks deep liquidity on African exchanges and multiple blockchain deployments, citing the discontinuation of a major stablecoin that left holders stranded.

Nigeria's regulated naira stablecoin is deployed across seven chains with three further testnet deployments, on the stated strategy that broader chain coverage reduces integration restrictions for developers and exchanges. USDT is available across more.

The tier-one stablecoin deployed on Cardano in February 2026 is Cardano-only. It has neither multi-chain presence nor documented liquidity on African exchanges.

Any Cardano application targeting African users and depending on that instrument carries concentration exposure that the market guidance identifies as a known failure mode. This is testable in primary research with Category 1 respondents. \[Confidence: Medium\]

**8.6 Fee Position and Cost Structure**

Cardano fees are deterministic, calculated as a fixed base component plus a per-byte component, set on-chain and adjustable through governance. A 200-byte transfer costs approximately 0.1641702 ADA and a 360-byte transfer approximately 0.17120156 ADA. A typical simple transfer costs 0.17 to 0.20 ADA.

Transactions carrying native tokens, metadata or multiple outputs are larger and cost more. Cardano stablecoins are issued as native tokens, so a stablecoin transfer costs more than the simple-transfer baseline.

At ADA prices observed in 2026 sources, a simple transfer costs approximately \$0.06 to \$0.08, and a stablecoin transfer more.

| **Route**                   | **On-chain cost for a small-value transfer**                                 |
|-----------------------------|------------------------------------------------------------------------------|
| Cardano stablecoin transfer | Above 0.17 ADA, approximately \$0.06 to \$0.08 or more                       |
| Tron USDT                   | Approximately \$0.01, with gas-free transfers introduced by protocol upgrade |
| Celo MiniPay                | Sub-cent                                                                     |

Cardano's cost position is favourable relative to gas-auction networks. Against the routes currently serving African small-value transfers it is approximately six to nine times more expensive, and the comparison worsens as competing routes move toward zero. \[Confidence: High\]

Three structural characteristics compound this for the population this research covers.

Fees are denominated in ADA at fixed protocol parameters. Appreciation in the ADA price therefore increases the cost in local purchasing terms of using Cardano for payments. For a payments use case competing against sub-cent alternatives, token appreciation is adverse to adoption. This follows from the fee formula rather than from market conditions. \[Confidence: High\]

Fee size scales with the number of transaction inputs. A wallet holding one consolidated unspent output transacts cheaply; the same balance held across many small outputs requires many inputs, producing a larger transaction and a higher fee, with periodic consolidation recommended as remedy. Informal economy participants receiving frequent small payments accumulate fragmented outputs as a direct consequence of their activity pattern. Their per-transaction cost therefore rises with usage. This dynamic does not arise on account-based chains. \[Confidence: High\]

Smart contract transactions require collateral of at least 150% of the transaction fee, and that collateral must contain only ADA with no native tokens. A participant holding only stablecoins cannot interact with a Cardano smart contract. They must acquire and hold ADA both to pay fees and to post collateral. This is a direct barrier to the use case of a participant with no prior blockchain experience and no reason to hold a volatile asset. \[Confidence: High\]

Recorded alongside these: Cardano fees are predictable, do not operate as a gas auction, and do not spike under network congestion. Collected fees are pooled and distributed across all stake pools that produced blocks in an epoch rather than paid to the processing pool. Fee predictability is a genuine advantage. It is not the characteristic on which African payment adoption is currently being decided.

Under the Appendix B taxonomy these are Ecosystem and UX blockers rather than Technical ones. No Cardano component fails. The cost structure operates as designed, and its design is unfavourable to high-frequency small-value transfers by participants who do not hold ADA. Recommended action is assessment of whether fee structure, collateral requirements or output management can be addressed for this transaction class, which is a protocol and wallet-layer question rather than a Layer 2 question.

This bears on Gate 2. On the evidence assembled, the capability that would most affect African payment adoption is not additional throughput but a change in the cost and asset requirements of small-value stablecoin transfer.

**8.7 Contextual Factor**

Mobile money systems trained a large African population to move value through a phone before stablecoin rails were available. Adoption of stablecoin transfer followed an established behavioural pattern rather than creating one.

Ecosystems that succeeded in these markets entered an existing behaviour. This bears on how deployment conditions are assessed in the demand map produced in Milestone 3.

**8.8 Limitations**

African-specific adoption data could not be verified for Lisk, Hedera, Algorand or Base, and no assessment of those ecosystems is offered. Polygon's African adoption is unquantified. Post-subsidy performance of the Cardano tier-one stablecoin was not established. The relationship between grant deployment and commercial conversion in 8.4 is correlational; no causal claim is made.

**9. Cross-Cutting Findings**

Seven findings emerge across multiple sections and are not attributable to any single research area. Each is mapped to the decision gates it informs.

**9.1 Infrastructure Adoption Has Been Subsidised in Every Observed Case**

Three integrations reached users on funded or waived costs.

An oracle provider supplied free feeds under Builder DAO funding, explicitly to remove payment as a barrier for integrators. That funding was not renewed and the provider entered wind-down.

A tier-one stablecoin launched in February 2026 with all bridging costs covered for the first ten days, extended by a further ninety days to 28 May 2026. Reported supply growth of over 40% occurred within that period. The stated goal is that flows become self-sustaining, which is an acknowledgement that they were not at launch.

An institutional oracle went live in May 2026 with one year of free unlimited access funded from the integrations budget, while the same provider ended its free permissionless tier globally on 31 July 2026, moving to subscriptions from \$500 per month.

In the single case where subsidy ended, the provider did not survive.

The funded access period for the oracle expires around June 2027. At that point Cardano projects face paid oracle costs of the same character that the market declined to pay a native provider. Whether they will pay is unestablished and is testable in primary research.

Gates 4 and 10. \[Confidence: High on the pattern; the forward question is untested\]

**9.2 Willingness to Pay Is the Recurring Constraint**

The same constraint appears from three independent directions.

A native oracle provider stated that most Cardano projects were unable or unwilling to pay for independent feeds, opting for free single-source interfaces, and that dialogue typically began only after those free services failed.

Bridging costs on the tier-one stablecoin were waived for a hundred days to establish flows.

The cost analysis in Section 8 establishes that Cardano's per-transaction cost for small-value stablecoin transfer is approximately six to nine times the routes currently serving African users, with competing routes moving toward zero.

Infrastructure providers report that Cardano builders will not pay for infrastructure. Cardano's own cost structure is uncompetitive against the alternatives its target users already use. These are the same constraint observed at different points in the stack.

Gates 4 and 9. \[Confidence: Medium\]

**9.3 Continuation Funding Faces a Materially Higher Bar Than Initial Funding**

Initial funding for the integrations programme carried over 80% delegate approval. Continuation funding for the same integrations cleared its threshold by approximately 0.29 percentage points, with a third of participating stake opposed and approximately 63.6% of active stake abstaining.

The contrast is not explained by general voter fatigue. Within the same period, budget proposals ranged from 68.45% to 85.67% approval on 84.39% participation, and none cleared narrowly.

The continuation request was scoped to maintenance and an upgrade framework, excluded applications, liquidity and marketing, and introduced a steering committee and treasury oversight. Narrowing scope and adding oversight were the conditions under which continuation proceeded.

For Gate 10 this establishes an evidence standard that is already operating. Proposals seeking to build attract support on the strength of the proposition. Proposals seeking to continue attract scrutiny of what the prior funding produced, and secure support by narrowing scope and adding accountability structure. Any Layer 2 or interoperability proposal requiring recurring funding will meet that standard, and an evidence framework that addresses only initial funding does not prepare a proposal for it.

This connects directly to 9.4. Continuation is assessed against outcomes, and outcomes are the thing no mechanism currently measures.

Gate 10. \[Confidence: Medium\]

**9.4 Measurement Stops at Delivery, Not at Outcome**

Funding decisions assess the proposal. Milestone frameworks verify delivery, with fund release conditional on completion. Both mechanisms operate as designed.

Neither measures whether a completed project remains operational, achieves adoption, or generates chain activity.

Of ten funded or proposed Layer 2 and interoperability items traced in Section 7, one is confirmed delivered, two ended in deprecation or wind-down after their funded work completed, two are substantially behind schedule, and four cannot be status-verified from public sources. Both failures would have been recorded as successful deliveries.

Provider viability is correspondingly absent as a weighted factor in any assessment framework examined. Of seven Cardano-relevant providers assessed in Section 4, three changed status adversely within the research window.

Gates 8 and 10. \[Confidence: Medium\]

**9.5 Information Exists But Is Not Maintained in Decision-Usable Form**

Four discoverability failures were identified independently.

No authoritative registry of Cardano Layer 2 and scaling solutions is published. Four of fourteen identified initiatives cannot be status-verified from public sources.

Milestone completion is publicly tracked, but no record establishes whether funded infrastructure is operational after delivery concludes.

The primary identity documentation path terminates before Cardano deployment, and the lightweight resolution component adopted into the platform does not appear in it.

Provider status changes are not centrally tracked. Three of the four provider status errors corrected during this research arose from authoritative sources that had gone stale within a quarter.

Existing capability that cannot be discovered is functionally equivalent to absent capability at the point of a deployment decision. These classify as Coordination and Ecosystem blockers, not Technical ones.

Gates 2 and 3. \[Confidence: High\]

**9.6 Integration Cost Falls Disproportionately on Cardano**

Intersect states that cross-chain tooling designed for account-based chains requires fundamental rework rather than porting for the eUTxO model, covering messaging, state management and replay protection.

The consequence is documented in three places.

Operators deploying multi-chain treat EVM compatibility as an entry requirement, allowing one deployment pattern to serve many chains. Cardano requires separate work. Six African operators assessed have documented chain selections; Cardano appears in none.

A bridge operating across dozens of chains for over eight years without a major incident lost approximately 97% of its Cardano-side reserve pool to an encoding flaw in a Cardano-side contract, where the correct Cardano primitive was present and unused.

The single integration pillar still in active development at the time of assessment is the omnichain messaging layer, which Intersect identifies as significantly more complex than the others for this reason.

Integration cost is a structural asymmetry rather than a capability gap. It bears on Gates 8 and 9 and on any assessment of which partners are commercially reachable.

Gates 3, 8 and 9. \[Confidence: High\]

**9.7 Adoption in Comparable Markets Followed Distribution, Not Capability**

The wallet leading all Ethereum Layer 2 networks on user metrics, with 16 million activated wallets and the majority of users in African markets, achieved that position by embedding within a mobile browser already installed on hundreds of millions of African devices.

The stablecoin route serving documented African remittance flows holds 28.7% of total stablecoin market capitalisation and 2.6 million daily active users, competing on cost and liquidity depth rather than on capability.

Neither outcome followed from superior infrastructure.

Section 8 establishes that the demand in this market is large, growing and currently served. On the evidence assembled, the constraint on Cardano adoption in African markets is reach and cost rather than missing Layer 2 capability. This is a hypothesis that primary research is designed to test, and it directly engages the RFP's own warning against treating infrastructure preference as deployment evidence.

Gates 1, 2 and 4. \[Confidence: Medium\]

**9.8 Consolidated Gate Mapping**

| **Finding**                     | **Gates informed** | **Confidence** |
|---------------------------------|--------------------|----------------|
| Subsidised adoption             | 4, 10              | High           |
| Willingness to pay              | 4, 9               | Medium         |
| Continuation funding bar        | 10                 | Medium         |
| Measurement stops at delivery   | 8, 10              | Medium         |
| Information not decision-usable | 2, 3               | High           |
| Integration cost asymmetry      | 3, 8, 9            | High           |
| Distribution over capability    | 1, 2, 4            | Medium         |

**10. Implications for Primary Research**

This section records what desk research established, what it could not, and how the primary research design responds. It addresses Decision Gate 11 in part, with routing to adjacent initiatives.

**10.1 What Desk Research Cannot Establish**

Three categories of evidence are structurally unavailable to desk research and are the basis for the primary research design.

Capability that no builder has publicly articulated a need for leaves no documentary trace. Section 3 distinguishes existing and discoverable capability, existing but undiscoverable capability, documented absences, and undocumented absences. Only the first three are addressed in this document. The fourth is addressable only by asking builders what they required and could not find.

Provider intent cannot be inferred from provider status. Section 4 documents six African operators with chain selections excluding Cardano. Whether Cardano was evaluated and rejected, evaluated and deferred, or never considered is not established by the selection record.

Divergence between public statements cannot be resolved from the statements themselves. Section 6 records three accounts of the oracle transition describing replacement, failure and complement. Section 4 records two cases where provider announcements and administrator or milestone status diverge materially.

**10.2 Questions Added to Interview Instruments**

Nine questions arise from desk research and were not in the instrument design at the time of the Research Design Document.

| **Question**                                                                                                                                       | **Arising from** | **Categories** |
|----------------------------------------------------------------------------------------------------------------------------------------------------|------------------|----------------|
| Would your stated Layer 2 requirement be satisfied by base-layer throughput increases of the magnitude currently in testnet                        | Section 3.7      | 1, 2           |
| What capability did you require and could not locate on Cardano                                                                                    | Section 3.1      | 1, 2           |
| Are there Cardano Layer 2 or scaling initiatives relevant to your work absent from this inventory                                                  | Section 3.14     | 2              |
| Were you aware of the integrations delivered under the Critical Integrations programme, and has that changed your architecture or deployment plans | Section 4        | 1, 2           |
| What would your infrastructure cost be if current funded free-access periods ended                                                                 | Section 9.1      | 1, 2           |
| Have you paid for infrastructure services on Cardano, and under what conditions would you                                                          | Section 9.2      | 1, 2           |
| What is your per-transaction cost, and how does it compare to alternatives available for the same workflow                                         | Section 8.6      | 1, 4           |
| Was Cardano evaluated for this deployment, and if so what determined the outcome                                                                   | Section 4.2      | 3, 4           |
| Does a foundational national identity credential create verification demand your organisation cannot currently serve                               | Section 4.4      | 1              |

**10.3 Priority Respondents**

Five respondents are elevated in priority on the basis of desk research findings.

The oracle provider entering wind-down holds direct evidence on willingness to pay, provider dependency on core team deliverables, and the oracle transition. Its leadership changed in March 2026 and the network wind-down was scheduled for 31 July 2026. Access may not persist.

The second native oracle provider can corroborate or contradict the account of cooperation requests to core entities, and holds delivery status for a self-service capability directly relevant to Section 6.

The identity maintainer community holds answers to the resolution and issuance asymmetry, the documentation path, and the publication cost finding, and maintains public community calls providing a defined access route.

The hosted API provider named in Sections 3.6 and 5.3 holds the answer to both barriers in which it appears: whether identity operation publishing is a roadmap item or an architectural constraint, and what the removal of the local node requirement for state channel operation requires.

The programme administrator holds execution status across the integrations pillars, the second-phase scope, and the contracting constraint identified in Section 7.6.

**10.4 Screening Candidates Arising**

Five organisations were identified through desk research and were not in the respondent design at the time of the Research Design Document version 1.0. Each has a documented chain selection excluding Cardano and is relevant to Gate 9. They are carried to the screening phase for assessment against the screening criteria rather than added to the respondent list.

**10.5 Effect on the Evidence Baseline**

Desk research disproved or refined positions recorded in the Preliminary VAL-Case Evidence Set.

The position that no lightweight identity resolution path exists on Cardano is withdrawn. A lightweight path exists for resolution and was verified during this research. The asymmetry between resolution and issuance is the corrected finding.

The distribution layer finding is reframed from stablecoin availability to access channel and cost structure, on the evidence in Sections 4.6 and 8.6.

The intelligence layer finding is separated by layer, on the identification of a Cardano-native alternative for agent orchestration and the absence of one for inference compute.

Provider viability is added as a dependency-risk factor not previously weighted.

These are carried in version 1.1 of that document.

**10.6 Routing to Adjacent Initiatives**

Findings outside the scope of this initiative are routed rather than expanded, consistent with the RFP's scope boundaries.

| **Finding**                                                               | **Routed to**                                   |
|---------------------------------------------------------------------------|-------------------------------------------------|
| Identity documentation path, configuration barriers, publication cost     | Developer experience workstream                 |
| Stablecoin liquidity depth and multi-chain exposure                       | Stablecoin and liquidity workstream             |
| Wallet access channel, collateral requirement for stablecoin-only holders | Wallets workstream                              |
| National identity market entry                                            | Government and emerging market entry initiative |
| Artificial intelligence commercial positioning of agent infrastructure    | Artificial intelligence positioning initiative  |
| Layer 2 stewardship transition                                            | Technical roadmap workstream                    |

Each is recorded in the Cross-RFP Handoff Memo produced in Milestone 3.

**10.7 Confidence Position Entering Primary Research**

No finding in this document is recorded above Medium confidence where it depends on a single source, and no finding derived from applicant validation work is used to establish segment-level demand.

Findings recorded at High confidence rest on primary documentation from the parties concerned, on-chain records, or first-hand testing. Findings recorded at Medium or Low confidence require triangulation and are identified as such.

Primary research is designed to raise confidence on the seven cross-cutting findings in Section 9, to establish the three categories in 10.1 that desk research cannot reach, and to test the hypothesis in 9.7 that the constraint on adoption in the target market is reach and cost rather than missing Layer 2 capability.

**11. Limitations**

**11.1 Information Not Found or Insufficient**

Four Layer 2 initiatives identified in Section 3.4 could not be status-verified from any public source. Their inclusion in the inventory reflects prior documentation only.

Outcome status could not be established for four of the ten funded Layer 2 and interoperability items traced in Section 7.2. Catalyst publishes completion counts by fund but does not publish outcome records permitting a proposal to be traced from funding to deployment or discontinuation.

African-specific adoption data could not be verified for Lisk, Hedera, Algorand or Base. No assessment of those ecosystems is offered. Polygon's African adoption is unquantified and only its announced framework is recorded.

Two of seven interoperability feature types required under Gate 5, message passing and wallet user experience, were not sufficiently evidenced. Settlement interoperability rests on a single central bank statement.

The identity platform's adopters register and use-case documentation were not retrieved. No documented African deployment of that platform was identified, and its absence is recorded as an unverified negative.

**11.2 Information Outdated or Unconfirmed**

The wind-down of an oracle provider was scheduled for 31 July 2026. Whether it proceeded is not established.

Post-subsidy performance of the tier-one stablecoin following the end of fee waiver on 28 May 2026 was not quantified.

Cardano usage of the institutional oracle since its May 2026 launch was not quantified.

Final outcomes were not established for all treasury withdrawals submitted in the 2026 budget cycle.

Delivery status was not established for the self-service oracle platform, the agent infrastructure Layer 2, or the omnichain messaging testnet support identified in Sections 6 and 7.

Whether the lightweight identity resolution component can replace the legacy indexer behind an existing agent deployment was not established. Current agent behaviour with respect to the publication cost finding in Section 5.6 was not tested.

Funding position was not independently verified for the second native oracle provider.

**11.3 Sources Not Accessed**

No proprietary datasets, paid expert calls or non-public data were used. No primary interviews were conducted.

Private information would have materially improved four areas. Provider commercial terms and integration cost, which Section 7.6 identifies as the constraint on which one integration pillar failed. Internal chain evaluation records held by the operators in Section 4.2, which would establish whether Cardano was assessed and rejected or never considered. Post-funding operational status of Catalyst recipients, which is the measurement gap identified in Section 9.4. Transaction-level cost data for African users, which would replace the modelled comparison in Section 8.6.

**11.4 Limitations of the Method**

Three sources consulted during this research were superseded within the research window. A programme progress update was four months old when consulted and behind actual execution on two pillars. A programme report was retitled and reframed within a week of publication. A provider announcement diverged materially from administrator status across two subsequent reports.

Four provider status errors were made and corrected, recorded in Section 2.5.

No single source proved sufficient for any status claim. Where corroboration could not be obtained the claim is excluded rather than qualified.

**11.5 Structural Disclosures**

The commissioning body administers the Critical Integrations Budget assessed in Sections 7 and 9, and states that it leads development and launch across a majority of approved initiatives. Contracting for both that programme and this research operates through the same legal structure.

Findings bearing on programme delivery, governance outcomes and integration status are reported on the evidence available regardless of which entity they concern. Findings that do not support Cardano infrastructure investment are reported without filtering, consistent with the commitments in the submitted proposal.

Evidence derived from the applicant's own validation work is treated as applicant-supplied conflicted evidence throughout, is separated from independent evidence, and is not used to establish segment-level demand or value-flow classifications above Low confidence without independent triangulation.

**11.6 How Limitations Are Addressed**

| **Limitation**                                 | **Response in Milestone 2**                         |
|------------------------------------------------|-----------------------------------------------------|
| Four unverifiable Layer 2 initiatives          | Confirmed through Category 2 respondents            |
| Four untraceable funding outcomes              | Direct enquiry to recipients where reachable        |
| Two unevidenced interoperability feature types | Category 1 and 3 instruments                        |
| Excluded peer ecosystems                       | Category 4 recruitment where builders are reachable |
| Provider commercial terms                      | Category 3 interviews under confidential treatment  |
| Operator chain evaluation records              | Screening candidates in Section 10.4                |
| Oracle provider status and account             | Priority respondent, time-sensitive                 |
| Identity platform open questions               | Maintainer community, public access route           |
| Post-subsidy and usage quantification          | Administrator interview                             |

Where a limitation cannot be addressed in primary research, it is carried into the final report and stated in the methodology appendix.

**Source List**

Sources are grouped by the section in which the claim appears. All URLs accessed 30 to 31 July 2026 except where stated.

**Section 3, Cardano Layer 2 and Partner-Chain Landscape**

Hydra protocol repository and release documentation, cardano-scaling organisation. Hydra adoption phase announcement, Input Output, February 2026. Ouroboros Leios testnet documentation and engineering updates, leios.cardano-scaling.org and cardano-engineering.iog.io. Intersect weekly governance updates 117 to 121, June and July 2026. Midnight network overview and state of the network publications, midnight.network. Partner Chains Toolkit repository, input-output-hk organisation. Midgard whitepaper dated 12 June 2026, Anastasia Labs. Midgard protocol documentation, midgardprotocol.com. zkFold project documentation. Mithril development updates, Input Output. Milkomeda official account profile. Catalyst Fund 8 category documentation, projectcatalyst.io.

**Section 4, Bridge, Interoperability and Infrastructure Provider Landscape**

Cardano Foundation statements on African ecosystem engagement, June 2026. Catalyst Fund 14 proposal records, projectcatalyst.io. cNGN network documentation and deployment records. Dune Analytics cNGN transfer data, November 2025. Flutterwave chain selection reporting. Zone network and NIBSS participation reporting. Routefusion supported network documentation. IOTA Foundation ADAPT announcement, May 2026. Africa Digital ID Hackathon 2026 records, ID4Africa. Chainalysis 2025 Geography of Cryptocurrency Report. BlockSec incident analysis of the Wanchain exploit, July 2026. Wanchain bridge interface, tested 30 July 2026. Rosen Bridge release notes, Watcher 6.2.2 and rosen-service 4.3.7. Cardinal bridge documentation. Bifrost technical documentation, ratified 15 July 2026. FluidTokens Bifrost communications, January 2026. LayerZero Cardano announcement, 17 March 2026. Intersect Critical Integrations Technical Progress Update, 31 March 2026. Intersect Program Status Update Report, May 2026. Circle xReserve and USDCx documentation. South African Reserve Bank commentary on distributed ledger settlement, 2026. Reltime and Swifin platform documentation. Atala PRISM discontinuation reporting, October 2024, and Charles Hoskinson's response.

**Section 5, Hyperledger Identus Resolution Status**

Hyperledger Identus documentation, hyperledger-identus.github.io, including the Quick Start Guide, Cloud Agent API documentation and Edge Agent SDK documentation. NeoPRISM component documentation and public hosted instances, neoprism.patlo.dev and neoprism-preprod.patlo.dev. Identus Technical Advisory Council update, Q3 2025. Input Output Identus roadmap statements. Cardano preprod chain records via NeoPRISM and Cardanoscan, verified 30 July 2026. Applicant validation records, github.com/zivana-labs/zivana-validation.

**Section 6, Infrastructure Provider Documentation**

Orcfax transition announcement, 27 March 2026. Orcfax protocol documentation, docs.orcfax.io. Orcfax incident repository, orcfax/incidents. Orcfax technical repositories, github.com/orcfax. Charli3 platform and developer documentation, charli3.io and portal.charli3.io. Charli3 Catalyst proposal records. Pyth Cardano integration announcements, December 2025 and May 2026. Pyth Cardano price feed documentation, pyth.network. Pyth protocol upgrade notice, 31 July 2026. Indigo Protocol integration announcement. Intersect Critical Integrations progress and status reports. Agentverse and ASI Cloud platform documentation. Masumi protocol documentation and Cardano Developer Portal entry. Masumi Catalyst Fund 14 proposal record. Input Output 2026 treasury proposal documentation.

**Section 7, Catalyst and Intersect Funding History**

Project Catalyst fund records and category documentation, projectcatalyst.io. Catalyst Fund 8, Fund 11, Fund 13 and Fund 14 proposal records. Cardano Foundation statement on Catalyst participation and Fund 13 voting allocation, December 2024. Cardano Foundation 2026 budget voting rationale, June 2026. Catalyst review process documentation. Cardano Critical Integrations Budget proposal and governance records. Intersect Critical Integrations reports, March and May 2026. On-chain governance records for treasury withdrawal actions.

**Section 8, Peer Ecosystem Benchmarking**

Chainalysis 2025 Geography of Cryptocurrency Report. World Bank Remittance Prices Worldwide, Q1 2025. YouGov Stablecoin Utility Report, February 2026. YouGov and BVNK stablecoin ownership survey. Opera MiniPay announcements, June 2026. Celo network metrics and roadmap documentation. CoinDesk Research quarterly reports, Q1 and Q2 2026. Tron protocol upgrade documentation. Stellar Development Foundation adoption fund records. Polygon Open Money Stack announcement, January 2026. Cardano Developer Portal transaction fee documentation.

**Section 9, Cross-Cutting Findings**

Sources as cited in Sections 3 to 8. No additional sources.

**Document Version History**

| **Version** | **Date**      | **Author**                    | **Change**                                            |
|-------------|---------------|-------------------------------|-------------------------------------------------------|
| 1.0         | 1 August 2026 | Abdulbasit Adigun Abdulrahman | Initial document produced for Milestone 1 submission. |
