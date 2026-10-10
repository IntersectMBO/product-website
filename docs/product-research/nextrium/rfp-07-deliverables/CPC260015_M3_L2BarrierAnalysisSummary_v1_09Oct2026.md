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
2. **Genuine Layer 2 barriers exist but are narrow.** They concern oracle data publication, on-chain order matching, micropayments with native tokens, continuous sensor data and permissionless fast transactions. Most rest on infrastructure builders and providers, and their technical review is pending.
3. **Reach and access matter as much as capability.** Reaching users by phone number, without internet, or on mobile is blocked or needs significant extra work.
4. **Commercial sustainability is a recurring barrier.** Native oracle and integration services are not sustainable while free or subsidised alternatives exist and builders do not pay.

**Highest-ranked barriers**

| Rank | Barrier | Type | Severity | Confidence |
|---|---|---|---|---|
| 1 | Stablecoin-only users cannot use smart contracts without holding ADA | UX | High | High |
| 2 | Small-value stablecoin transfers cost several times the routes African users already use | Ecosystem | High | Medium |
| 3 | Providers depend on core components they cannot influence | Coordination | High | Medium |
| 4 | Exchange wallet-infrastructure partners do not support Cardano | Ecosystem | High | Low |
| 4 | Bulk refunds to many recipients were not possible at the time | Technical | High | Low |
| 6 | Users cannot be reached by phone number or without internet through Cardano wallets | Ecosystem | Medium to High | Medium |
| 7 | Order matching on-chain conflicts with deterministic transactions | Technical | Medium to High | Medium |
| 8 | Native oracle and integration services are not commercially sustainable | Commercial | Medium to High | Medium |
| 9 | No native mobile wallet integration path for Cardano applications | Ecosystem | Medium | Medium |

The full analysis ranks 24 barriers from independent evidence and lists 2 from our own validation work separately.

**Distribution by type**

| Type | Barriers |
|---|---|
| Ecosystem | 9 |
| Technical | 7 |
| UX | 3 |
| Tooling | 3 |
| Coordination | 2 |
| Commercial | 2 |

**Decisions this supports**

Gates 1, 2 and 3: which applications are blocked by missing Layer 2 capability, which capability matters most, and whether each blocker calls for engineering, documentation, partnerships, wallet support, commercial incentives, builder activation or no action.

**Limitations and unresolved questions**

- One bridge, interoperability or wallet provider was interviewed against a committed five to eight. Provider-side barriers are held at Low confidence.
- The technical review of provider claims (Samir Idris) is pending for 12 barriers. Their technical classification may change in the final version.
- Several Layer 2 barriers may be affected by Ouroboros Leios, targeted for mainnet in late 2026 ([Desk Research Summary](https://github.com/Nextrium/cpc-product-website/blob/milestone-1-deliverables/docs/product-research/nextrium/rfp-07-deliverables/CPC260015_M1_DeskResearchSummary_v1_01Aug2026.md) Section 3.7). They are re-tested before the final version.
- Single-source barriers are held at Low confidence.
- One blocker could not be classified because the evidence was incomplete (Unknown). It is carried as an unresolved question.

**Full analysis**

[CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md](./CPC260015_M3_L2BarrierAnalysis_v1_09Oct2026.md)

**AI Use Disclaimer**

AI tools were used in the analysis and drafting behind this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.
