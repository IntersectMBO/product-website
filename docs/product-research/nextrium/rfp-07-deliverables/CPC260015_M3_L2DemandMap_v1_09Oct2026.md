---
title: "L2 Demand Map - NexTrium Milestone 3 (CPC-26-0015)"
sidebar_label: "L2 Demand Map"
---

**NEXTRIUM**

Global Innovations Ltd

**L2 Demand Map**

*Applications and use cases waiting on Layer 2 or interoperability capability*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D2 (Proposal Section 13)                                                        |
| **Status**                | Draft for Milestone 3; final at Milestone 4                                     |
| **Version**               | 1.0                                                                             |
| **Date**                  | 9 October 2026                                                                  |
| **Confidentiality**       | Summary public; this full version is redacted for publication                   |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This is the draft L2 Demand Map (D2). It maps the applications and use cases in this research that are waiting on Layer 2 or interoperability capability: what workflow is blocked, what capability would unblock it, under what conditions it would deploy, and how much demand the evidence supports. It answers Decision Gates 1, 2 and 4.

Respondents who chose anonymised or confidential treatment are identified by category only.

**1. Summary**

1. **Demand waiting on Layer 2 is real but narrow.** It sits in infrastructure: oracle data publication, order-book trading and continuous sensor data.
2. **The broadest demand is for access, not Layer 2.** More builders need to reach users on mobile phones, on basic phones and without internet than need more throughput.
3. **No application waiting on Layer 2 or interoperability yet shows demand at scale.** Most are at testnet or concept stage, or serve small numbers of users. Scale is given below as indicative ranges only.
4. **Infrastructure demand is commercially fragile.** The oracle providers that need faster, cheaper publication have lost paying clients or ceased Cardano-focused operations.

**2. How to Read the Map**

- Each entry is built from the [Blocked-Demand Case Register](https://github.com/Nextrium/cpc-product-website/blob/milestone-2-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M2_BlockedDemandCaseRegister_v1_09Oct2026.md) and the [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md) (D1), and covers the nine dimensions in our proposal (Section 13, D2) plus the current workaround (RFP 07 Appendix C) and the user type, transaction pattern and value pathway (RFP 07 Section 6, Gate 4).
- **Only entries supported by more than self-reported demand are in the map** (Section 3). Entries resting on one respondent, or describing a historical case, are listed in Section 4.
- **Scale** is an indicative range with its assumption stated. Market statistics are context, not evidence of Cardano demand.
- Confidence follows the [Research Design Document](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_ResearchDesignDocument_v1.1_01Aug2026.md) (Section 6.2). Provider-side entries are held at Low because one Category 3 provider was interviewed against a committed five to eight.
- Entries from our own validation work are listed separately in Section 5.

**Overview**

| # | Application or use case | Capability needed | Stage | Confidence |
|---|---|---|---|---|
| 1 | Oracle data services | Faster, cheaper data publication; an off-chain data consensus layer | Providers inactive or exited | Medium |
| 2 | Order-book trading | On-chain order matching beyond one match per transaction | Batcher workaround in use; one prototype waiting | Medium |
| 3 | Sensor data for agricultural value chains | High-frequency, low-cost state updates | Concept; no users | Medium |
| 4 | Mobile access to Cardano applications | Native mobile wallet connection | Testnet | Medium |
| 5 | Basic-phone and offline access to payments | Wallet and access layer reaching users by phone number or USSD | Planned by several builders; built at application level by two | Medium |
| 6 | Cross-chain bridging for a partner chain | Robust bridging and messaging | Live tokens; waiting on a Cardano-side integration | Low |

**3. Demand Map**

### 1. Oracle data services

| Dimension | Detail |
|---|---|
| Application or use-case category | Oracle data for DeFi and enterprise applications |
| Blocked workflow | Publishing derivative, lower-latency and high-volume price feeds; enterprise-grade feeds |
| Required capability | Faster and cheaper data publication, and a layer that collects and agrees data off Layer 1 before publishing to Cardano (E-105, E-113). One provider cites the need for Layer 2 partner chains (E-085). |
| Current workaround | Publishing on Layer 1 within its limits. Many builders use free centralised data sources instead of decentralised oracles (E-111), or the subsidised institutional oracle ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 6.5). |
| Deployment condition | Lower publication cost and latency, and a paying client base. The commercial barrier is separate and ranked in D1. |
| Users and transaction pattern | DeFi protocols and enterprise clients consuming frequent price updates |
| Expected adoption pathway | DeFi protocols integrating feeds. The institutional oracle's first Cardano integration was a DeFi protocol ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 6.5). |
| Indicative scale range | A small number of client protocols today, from none to a few: one provider lost its last paying client (E-100) and one project used a native feed at the time of a 2024 outage ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 6.2). Assumption: future growth depends on DeFi activity, which this research does not quantify. |
| Value pathway | Oracle fees. One provider considers about 500 US dollars a month a sustainable price for many clients (E-120). |
| Timing assumptions | Ouroboros Leios, targeted for mainnet in late 2026, may lower cost and latency ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 3.7). Free access to the institutional oracle ends around June 2027 (Section 6.5). |
| Confidence | Medium |
| Source basis | Two independent oracle providers and desk research. Cases 004 and 010; E-080, E-085, E-089, E-099, E-100, E-104, E-105, E-111, E-113, E-120; [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 3.7, 6.1 to 6.5 |
| Respondents | R-005 Robert Hever (Charli3, Category 2); R-006 Ross Spencer (Orcfax, Category 2) |
| Technical review (Samir Idris) | Items A1 and A2, pending |

### 2. Order-book trading

| Dimension | Detail |
|---|---|
| Application or use-case category | DeFi trading |
| Blocked workflow | Fully on-chain order matching |
| Required capability | An execution path that supports order matching beyond one match per transaction (E-126, E-127) |
| Current workaround | Centralised off-chain batchers that bundle and match orders (E-126, E-136) |
| Deployment condition | Order matching on-chain without a batcher. One order-book DEX prototype is waiting on Leios (E-426); another respondent states a 30 to 65 times throughput increase would not change application architecture (E-137). |
| Users and transaction pattern | Traders placing and cancelling orders at high frequency |
| Expected adoption pathway | Existing batcher-based DEXs and new order-book DEXs |
| Indicative scale range | Batchers were adopted by essentially all Cardano projects one consultant encountered (E-136); one order-book prototype is waiting (E-426). Trading volume affected is not quantified in this research. |
| Value pathway | Trading fees and activity retained on Cardano |
| Timing assumptions | Leios (late 2026) and Midgard (end of 2026) are the dated items; whether either resolves the matching constraint is disputed by respondents. |
| Confidence | Medium |
| Source basis | Two independent respondents. Case-005; E-126, E-127, E-136, E-137, E-426 |
| Respondents | R-007 Vladimir Kalnitsky (Category 2); R-027 (Category 2, anonymised) |
| Technical review (Samir Idris) | Item A3, pending |

### 3. Sensor data for agricultural value chains

| Dimension | Detail |
|---|---|
| Application or use-case category | Agricultural supply chain (poultry value chain, northern Ghana) |
| Blocked workflow | Recording continuous sensor readings on-chain |
| Required capability | High-frequency, low-cost state updates |
| Current workaround | A hybrid design with an off-chain microcontroller, considered but not built (E-348) |
| Deployment condition | Funding to continue development (routed in D1 as a non-Layer 2 barrier) and a hybrid or Layer 2 design for sensor data |
| Users and transaction pattern | Small and medium poultry farmers, hatchers and buyers; frequent small data writes |
| Expected adoption pathway | Farmers verifying chick source, breed and health (E-343) |
| Indicative scale range | Concept stage with no users; an earlier testnet phase was paused (E-346). Separately, an oracle provider reports builder requests for real-time sensor data such as weather and temperature (E-099, E-102). Assumption: no user-scale estimate is possible at this stage. |
| Value pathway | Not established in this research |
| Timing assumptions | No dated capability identified for this workflow; Leios may help throughput. |
| Confidence | Medium |
| Source basis | A builder and an independent infrastructure provider. Case-013; E-099, E-102, E-343, E-346, E-348 |
| Respondents | R-022 Solomon Salifu (Smart Hatch, Category 1; seeking funding); R-006 Ross Spencer (Orcfax, Category 2) |
| Technical review (Samir Idris) | Item A7, pending |

### 4. Mobile access to Cardano applications

| Dimension | Detail |
|---|---|
| Application or use-case category | Consumer marketplaces and applications |
| Blocked workflow | Users connecting to Cardano applications from a mobile phone |
| Required capability | A native mobile wallet connection path for application builders (E-038, E-071) |
| Current workaround | Desktop-only access (E-038). One builder offers social login and an SDK supporting Android and iOS for its own users (E-060, E-070). |
| Deployment condition | A mobile wallet connection path that application builders can use |
| Users and transaction pattern | Phone-first buyers and sellers; escrow transactions between them |
| Expected adoption pathway | Marketplace users moving from informal trading on messaging apps to escrow-backed trading (E-029) |
| Indicative scale range | Testnet stage with active testers (E-031); user numbers not stated. Another builder's mainnet product has about seven daily users (E-062). |
| Value pathway | Not established in this research |
| Timing assumptions | No dated roadmap item identified |
| Confidence | Medium |
| Source basis | Three builders. Case-014; E-029, E-031, E-038, E-060, E-062, E-070, E-071, E-432 |
| Respondents | R-002 Olivier Mwatsimulamo (Wednesday, Category 1; seeking funding); R-004 Emmanuel Asaolu (UTXOS, Category 1); R-027 (Category 2, anonymised) |
| Technical review (Samir Idris) | Item C1, pending |

### 5. Basic-phone and offline access to payments

| Dimension | Detail |
|---|---|
| Application or use-case category | Payments and services for informal-economy users without smartphones or internet |
| Blocked workflow | Reaching users by phone number or USSD |
| Required capability | A wallet or access layer that reaches users by phone number or USSD |
| Current workaround | Two builders built USSD access in their own applications (E-256, E-489). Another routes payments through a mobile money aggregator (E-009, E-017). |
| Deployment condition | An access channel that does not require each builder to build its own USSD layer. Users holding only stablecoins also face the ADA collateral and fee requirements ranked in D1. |
| Users and transaction pattern | Farmers, informal traders and other users on basic phones; frequent small transfers |
| Expected adoption pathway | Entering existing mobile money behaviour ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 8.7). A peer wallet grew by embedding in a browser already on users' phones (Section 8.3). |
| Indicative scale range | Among builders: six of the fifteen Category 1 builders interviewed want or plan this access (E-022, E-041, E-237, E-257, E-276, E-351) and two have built it in their own applications (E-256, E-489); one builder is in both groups. Among end users: not evidenced for Cardano. Context only: a peer wallet reports 16 million activated wallets, mostly in African markets (Section 8.3). |
| Value pathway | Payment and transfer activity on Cardano |
| Timing assumptions | No dated roadmap item identified |
| Confidence | Medium |
| Source basis | Seven builders and desk research. E-009, E-017, E-022, E-041, E-237, E-256, E-257, E-276, E-351, E-489; [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 3.13, 8.3, 8.7 |
| Respondents | R-001 Paul Mupenda; R-002 Olivier Mwatsimulamo; R-016 (Category 1, anonymised); R-017 Issah Abagna; R-018 Ishmeal Mihsin; R-022 Solomon Salifu; R-031 Kamal Aliyu (all Category 1) |
| Technical review (Samir Idris) | Not in review scope |

### 6. Cross-chain bridging for a partner chain

| Dimension | Detail |
|---|---|
| Application or use-case category | Partner chain and bridge |
| Blocked workflow | Robust movement of assets and messages between a partner chain, Cardano and other chains |
| Required capability | Robust bridging and messaging. The respondent also prioritises Chainlink and Circle's Cross-Chain Transfer Protocol (E-480, E-482). |
| Current workaround | The partner chain is integrating LayerZero on its own side (E-473). |
| Deployment condition | The Cardano-side LayerZero integration, in active development ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 4.9) |
| Users and transaction pattern | Holders moving the project's tokens across Cardano applications (E-467) |
| Expected adoption pathway | The project's tokens are already live on Cardano DEXs and a lending platform (E-467) |
| Indicative scale range | Not quantified. The respondent says comparatively little demand originates within Cardano itself (E-474). |
| Value pathway | Cross-chain liquidity; direction of value flow is assessed in the Value-Flow Assessment (D4) |
| Timing assumptions | No confirmed date for the Cardano-side integration ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 4.9) |
| Confidence | Low (provider-side finding; one Category 3 interview) |
| Source basis | One provider and desk research. Case-015; E-467, E-473, E-474, E-480, E-482; [Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Sections 4.8, 4.9 |
| Respondents | R-030 Jerry Fragiskatos (Apex Fusion, Category 3) |
| Technical review (Samir Idris) | Item B2, pending |

**4. Cases Not in the Map**

These cases tie to a named Layer 2 workflow but do not meet the map's evidence requirement. They remain in the [Blocked-Demand Case Register](https://github.com/Nextrium/cpc-product-website/blob/milestone-2-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M2_BlockedDemandCaseRegister_v1_09Oct2026.md) and the [L2 Barrier Analysis](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md).

| Case | Workflow | Why it is not in the map |
|---|---|---|
| Case-006 | Micropayments carrying native tokens (DripDropz) | Demand rests on one respondent, although the product has been live on mainnet since 2022 (E-313) |
| Case-011 | Fast transactions between parties not known in advance (UTXOS) | Demand rests on one respondent |
| Case-012 | Bulk refunds to many contributors (8pod) | Historical; no application is waiting |

The four cases routed as non-Layer 2 blockers in the case register (Cases 003, 007, 008 and 009) are not in the map because they do not wait on Layer 2 or interoperability capability.

**5. Entries From Our Own Validation Work**

These come from our own protocol validation. We disclose them as conflicted evidence and keep them separate from the map.

| Dimension | Decentralised identity credentials (VAL-003, Case-001) | Last-mile stablecoin distribution (VAL-006, Case-002) |
|---|---|---|
| Blocked workflow | Issuing credentials without running a full node | Paying recipients by phone number at sub-cent cost |
| Required capability | A lightweight issuance path; resolution already has one ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 5.3) | A wallet or access layer reaching users by phone number |
| Current workaround | Running a full node, wallet and database | Distributions routed to Celo MiniPay |
| Deployment condition | Lightweight issuance support from the hosted API provider or the maintainers | A comparable Cardano access path |
| Indicative scale range | Not estimable from our validation work | Not estimable from our validation work |
| Timing assumptions | Lightweight infrastructure is a named Input Output priority, undated (Section 5.7) | No dated item identified |
| Confidence | Medium for the pipeline (independently reproduced); Low for the issuance gap | Low |
| Independent signal | One builder wants reusable digital identity for onboarding (E-493); African identity work is happening on other chains (Section 4.4) | Map entry 5 (basic-phone and offline access) |

**6. Answers to the Decision Gates (preliminary)**

| Gate | Preliminary answer | Confidence |
|---|---|---|
| 1. Which applications are actually blocked by missing Layer 2 capability? | Oracle data services, order-book trading and sensor data for agricultural value chains. | Medium |
| 2. What Layer 2 capability would unlock the most immediate adoption value? | Lower-cost, higher-frequency data and state updates for infrastructure. For informal-economy builders, access channels matter more than throughput. | Medium |
| 4. Which applications waiting on Layer 2 represent meaningful demand at scale? | None yet. Waiting applications are pre-launch or small, and the infrastructure providers involved are commercially fragile. | Medium |

**7. Limitations**

- One bridge, interoperability or wallet provider was interviewed against a committed five to eight, so provider-side entries are held at Low.
- Scale rests on what respondents reported; this research did not verify user numbers independently.
- Our proposal named the Zivana Sovela application and the Balogun Market operator network as starting demand cases (Proposal Section 4, Gate 4). No Balogun Market operators were interviewed, so no entry is recorded for them.
- The technical review by Samir Idris is pending for five entries.
- Leios (late 2026) may change the position of entries 1 to 3 before the final version.

**8. AI Use Disclaimer**

AI tools were used in the analysis and drafting behind this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.

**Document Version History**

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 9 October 2026 | Abdulbasit Adigun Abdulrahman | Draft for Milestone 3 |
