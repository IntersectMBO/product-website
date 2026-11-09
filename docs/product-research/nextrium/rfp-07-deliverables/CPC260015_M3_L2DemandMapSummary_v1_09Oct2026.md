---
title: "L2 Demand Map Summary - NexTrium Milestone 3 (CPC-26-0015)"
sidebar_label: "L2 Demand Map Summary"
---

**NEXTRIUM**

Global Innovations Ltd

**L2 Demand Map: Summary**

*Public summary of the draft L2 Demand Map*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D2 (Proposal Section 13)                                                        |
| **Status**                | Draft for Milestone 3; final at Milestone 4                                     |
| **Version**               | 1.0                                                                             |
| **Date**                  | 9 October 2026                                                                  |
| **Confidentiality**       | Public summary                                                                  |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This is the public summary of our draft L2 Demand Map (D2). The full map, with every entry's evidence, is published alongside it in redacted form.

**Main findings**

1. **Demand waiting on Layer 2 is real but narrow.** It sits in infrastructure: oracle data publication, order-book trading and continuous sensor data.
2. **The broadest demand is for access, not Layer 2.** More builders need to reach users on mobile phones, on basic phones and without internet than need more throughput. Phone-number payments and mobile wallet connection exist on Cardano, but at a cost or with uneven support.
3. **No application waiting on Layer 2 or interoperability yet shows demand at scale.** Most are at testnet or concept stage, or serve small numbers of users.
4. **Infrastructure demand is commercially fragile.** The oracle providers that need faster, cheaper publication have lost paying clients or ceased Cardano-focused operations.

**The map**

| # | Application or use case | Capability needed | Stage | Confidence |
|---|---|---|---|---|
| 1 | Oracle data services | Faster, cheaper data publication; an off-chain data consensus layer | Providers inactive or exited | Medium |
| 2 | Order-book trading | Higher concurrency and throughput for high-frequency order matching | Batcher and router workarounds in use; one prototype waiting | Medium |
| 3 | Sensor data for agricultural value chains | High-frequency, low-cost state updates | Concept; no users | Medium |
| 4 | Mobile access to Cardano applications | Consistent mobile wallet connection across wallets | Testnet | Medium |
| 5 | Basic-phone and offline access to payments | Low-cost phone-number payments, and USSD access without building it per application | Planned by several builders; built at application level by two | Medium |
| 6 | Cross-chain bridging for a partner chain | Robust bridging and messaging | Live tokens; waiting on a Cardano-side integration | Low |

Three further cases tie to a named Layer 2 workflow but rest on one respondent or describe a historical case, so they are listed outside the map. Two entries from our own validation work are shown separately.

**Decisions this supports**

Gates 1, 2 and 4: which applications are blocked by missing Layer 2 capability, which capability would unlock the most immediate adoption value, and whether any waiting application represents demand at scale. On current evidence none does yet.

**Limitations**

- Provider-side entries are held at Low confidence: one Category 3 provider was interviewed against a committed five to eight.
- Scale rests on what respondents reported and was not independently verified.
- An independent technical review by Samir Idris confirmed or qualified every technical claim behind the map; entries reflect the verdicts.
- Ouroboros Leios, targeted for late 2026, raises throughput but, per the technical review, does not resolve oracle latency or order-matching constraints.

**Full map**

[CPC260015_M3_L2DemandMap_v1_09Oct2026.md](./CPC260015_M3_L2DemandMap_v1_09Oct2026.md)

**AI Use Disclaimer**

AI tools were used in the analysis and drafting behind this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.
