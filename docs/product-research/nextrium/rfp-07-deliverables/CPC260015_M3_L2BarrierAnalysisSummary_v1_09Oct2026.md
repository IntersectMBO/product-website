---
title: "L2 Barrier Analysis Summary - NexTrium Milestone 3 (CPC-26-0015)"
sidebar_label: "L2 Barrier Analysis Summary"
---

**NEXTRIUM**

Global Innovations Ltd

**L2 Barrier Analysis: Summary**

*Public summary of the draft L2 Barrier Analysis*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D1 (Proposal Section 13)                                                        |
| **Status**                | Draft for Milestone 3; final at Milestone 4                                     |
| **Version**               | 1.0                                                                             |
| **Date**                  | 9 October 2026                                                                  |
| **Confidentiality**       | Public summary |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This is the public summary of our draft L2 Barrier Analysis (D1). The full analysis, with every barrier's evidence and classification, is published alongside it in redacted form.

**Main findings**

1. **The most severe barriers are not Layer 2 throughput.** The highest-ranked barriers are the cost of small stablecoin transfers and the requirement to hold ADA to use smart contracts. Both are Ecosystem and UX barriers in how fees and assets work, not missing Layer 2 capability.
2. **Genuine Layer 2 barriers exist but are narrow.** They concern oracle data publication, high-frequency order matching, micropayments with native tokens, continuous sensor data and fast transactions between parties not known in advance. Most rest on infrastructure builders and providers. An independent technical review confirmed four of these claims and qualified the rest.
3. **Reach and access matter as much as capability.** Reaching users without internet or on basic phones needs significant extra work, phone-number payments exist but are not low-cost, and mobile wallet connection is fragmented.
4. **Commercial sustainability is a recurring barrier.** Native oracle and integration services are not sustainable while free or subsidised alternatives exist and builders do not pay.

**Highest-ranked barriers**

| Rank | Barrier | Type | Severity | Confidence |
|---|---|---|---|---|
| 1 | Stablecoin-only users cannot use smart contracts without holding ADA | UX | High | High |
| 2 | Small-value stablecoin transfers cost several times the routes African users already use | Ecosystem | High | Medium |
| 3 | Providers depend on core components they cannot influence | Coordination | High | Medium |
| 4 | Exchange wallet-infrastructure partners do not support Cardano | Ecosystem | High | Low |
| 4 | Bulk refunds to many recipients were not possible at the time | Technical | High | Low |
| 6 | High-frequency on-chain order matching faces concurrency and throughput limits | Technical | Medium to High | Medium |
| 7 | Native oracle and integration services are not commercially sustainable | Commercial | Medium to High | Medium |
| 8 | Mobile wallet connection for Cardano applications is fragmented | Ecosystem | Medium | Medium |
| 9 | Users without smartphones or internet cannot be reached through Cardano wallets, and phone-number payments are not low-cost | Ecosystem | Medium | Medium |

The full analysis ranks 24 barriers from independent evidence and lists 2 from our own validation work separately.

**Distribution by type**

| Type | Barriers |
|---|---|
| Ecosystem | 8 |
| Technical | 7 |
| UX | 3 |
| Tooling | 4 |
| Coordination | 2 |
| Commercial | 2 |

**Decisions this supports**

Gates 1, 2 and 3: which applications are blocked by missing Layer 2 capability, which capability matters most, and whether each blocker calls for engineering, documentation, partnerships, wallet support, commercial incentives, builder activation or no action.

**Limitations and unresolved questions**

- One bridge, interoperability or wallet provider was interviewed against a committed five to eight. Provider-side barriers are held at Low confidence.
- An independent technical review by Samir Idris confirmed four claims, qualified seven and could not assess two respondent-specific figures; the analysis reflects every verdict.
- Remaining Layer 2 barriers depend on specific roadmap items: Leios for throughput, CIP-0118 Nested Transactions for micropayments, and Midgard for fast transactions between strangers.
- Single-source barriers are held at Low confidence unless the technical review confirmed the claim.
- One blocker could not be classified because the evidence was incomplete (Unknown). It is carried as an unresolved question.

**Full analysis**

[CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md)

**AI Use Disclaimer**

AI tools were used in the analysis and drafting behind this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.
