---
title: "Technical and Commercial Blocker Taxonomy - NexTrium Milestone 3 (CPC-26-0015)"
sidebar_label: "Technical and Commercial Blocker Taxonomy"
---

**NEXTRIUM**

Global Innovations Ltd

**Technical and Commercial Blocker Taxonomy**

*Reusable classification system for Layer 2 and interoperability blockers*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D10 (Proposal Section 13)                                                       |
| **Status**                | Draft, compiled progressively Milestones 1 to 3; final at Milestone 4           |
| **Version**               | 1.0                                                                             |
| **Date**                  | 9 October 2026                                                                  |
| **Confidentiality**       | Fully public                                                                    |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This taxonomy is the system we use to classify every Layer 2 and interoperability blocker in this research and route it to the right owner. It answers Decision Gate 3: which blockers are technical, commercial, ecosystem or coordination problems. Every blocker in the draft L2 Barrier Analysis (D1) and the Blocked-Demand Case Register is classified with it.

**1. What This Document Covers**

| Requirement (Proposal Section 13, D10) | Section |
|---|---|
| All nine blocker types, with definitions | 2 |
| What distinguishes each type, including Ecosystem from Tooling | 3 |
| How a blocker is classified | 4 |
| Routing: each type mapped to an action and a responsible workstream | 5 |

**2. The Nine Blocker Types**

The nine types are those in our proposal (Section 3, Phase 4). Definitions are those approved in the Research Design Document (Section 4.1).

| Type | Definition |
|---|---|
| Technical | Protocol gaps, smart contract limitations, missing cryptographic primitives, or infrastructure failures preventing deployment. |
| Commercial | Business model uncertainty, revenue risk, pricing gaps, or insufficient commercial incentive for a provider or builder to proceed. |
| Ecosystem | Missing wallet support, insufficient developer community presence, weak business development coverage, or absent partner integrations. |
| Liquidity | Insufficient on-chain liquidity, stablecoin availability gaps, or bridge liquidity depth preventing viable deployment. |
| UX | User experience barriers including wallet friction, onboarding complexity, language limitations, or interface design gaps. |
| Tooling | SDK gaps, documentation failures, developer experience issues, or missing testing infrastructure. |
| Coordination | Multi-party dependency problems where no single actor can resolve the blocker without others acting first. |
| Compliance | Regulatory uncertainty, licensing requirements, or legal constraints blocking deployment. |
| Unknown | Insufficient evidence to classify. Disclosed explicitly with the evidence limitation stated. |

Each blocker gets one type.

**3. Telling the Types Apart**

**3.1 Technical, and only after seven other explanations are ruled out**

A blocker is Technical only when none of these explains it: liquidity, wallet support, bridge or provider access, tooling, commercial uncertainty, compliance, or partner access (Research Design Document Section 4.3). This guards against treating liquidity, wallet, tooling, UX, commercial or coordination problems as Layer 2 engineering problems (RFP 07 Section 3). When respondents say what kind of problem they had, for example "a cost issue, not a technical one", we record it as they describe it.

**3.2 Ecosystem and Tooling**

| | Ecosystem | Tooling |
|---|---|---|
| What is wrong | Something the ecosystem lacks: wallet support, developer community, business development reach, partner integrations | Something builders work with is missing or weak: SDKs, documentation, developer experience, testing infrastructure |
| Usual remedy | Build the missing capability or partner for it | Improve documentation or tooling |
| Example from this research | No Cardano wallet supports sending stablecoins to a phone number (Desk Research Summary Section 3.13) | Nine Identus deployment barriers, none requiring a change to Cardano itself (Desk Research Summary Section 5.9) |

The test: if no Cardano component has failed and a capability is simply absent, the blocker is Ecosystem. If a builder's tools or documentation fall short, it is Tooling.

**3.3 Cost structures that work as designed**

When a fee or asset rule works exactly as the protocol specifies but is unfavourable to a use case, the blocker is Ecosystem or UX, not Technical, because nothing has failed. Example: the cost of small stablecoin transfers and the requirement to hold ADA as collateral (Desk Research Summary Section 8.6).

**3.4 Coordination**

When one party depends on another party's deliverable or decision, the blocker is Coordination. Example: Cardano-native oracle providers that depended on core components they could not influence (Desk Research Summary Section 6.2). Capability that exists but cannot be found is also Coordination or Ecosystem, not Technical (Desk Research Summary Sections 3.2, 9.5).

**3.5 Liquidity and Ecosystem**

Liquidity applies when there are not enough assets or market depth. When the assets exist but there is no channel to reach users, the blocker is Ecosystem. Example: Cardano has native stablecoins, but no wallet that reaches users by phone number (Preliminary VAL-Case Evidence Set v1.1, Section 6.5).

**3.6 Compliance**

Regulation, licensing and legal constraints. This research classifies and routes them but does not draw legal conclusions, which are outside its scope (RFP 07 Section 7).

**3.7 Unknown**

Used when the evidence is not enough to classify. The gap is stated and confidence is Low.

**4. How a Blocker Is Classified**

**4.1 Relevance first**

A blocker is recorded only if it directly blocks a named Layer 2 or interoperability workflow (Proposal Section 3, Phase 4). Interoperability workflows fall within the seven feature types: asset bridging, message passing, liquidity routing, partner-chain integration, wallet user experience, identity and data portability, and settlement interoperability. General complaints not tied to such a workflow are routed to the Cross-RFP Handoff Memo.

**4.2 The seven alternatives and where each points**

| If the blocker is explained by | It is classified as |
|---|---|
| Liquidity gaps | Liquidity |
| Wallet support gaps | Ecosystem if support is missing; UX if support exists but is hard to use |
| Bridge or provider access gaps | Ecosystem |
| Tooling failures | Tooling |
| Commercial uncertainty | Commercial |
| Compliance constraints | Compliance |
| Partner access barriers | Coordination |
| None of the above | Technical |

**4.3 What is recorded for each blocker**

Eight dimensions (Proposal Section 3, Phase 4):

| Dimension | Recorded as |
|---|---|
| Type | One of the nine |
| Severity | High, Medium or Low |
| Adoption impact | A short description of what adoption is prevented or delayed, and for whom |
| Urgency | High, Medium or Low (RFP 07 Appendix D) |
| Owner or workstream | Named (Section 5) |
| Evidence confidence | High, Medium or Low (Research Design Document Section 6.2) |
| Affected use case | The named application or workflow |
| Evidence source | Interview extract, test or document reference |

**5. Routing**

Each blocker receives one action from our action set: fund engineering, improve documentation, pursue wallet support, establish bridge or provider partnerships, coordinate liquidity, provide commercial incentives, activate builders, or reject (Proposal Section 3, Phase 4). Owners and workstreams are those named in the proposal for this research and its handoffs (Proposal Section 13, D12).

| Type | Usual action | Usual owner or workstream |
|---|---|---|
| Technical | Fund engineering, or reject | Technical roadmap workstream |
| Commercial | Provide commercial incentives, or reject | Grant allocators and business development teams; RFP 02 (use-case landscape and competitive positioning) where relevant |
| Ecosystem | Pursue wallet support, or establish bridge or provider partnerships | Wallets workstream; business development teams |
| Liquidity | Coordinate liquidity | Liquidity workstream; RFP 03 (stablecoin liquidity incentive and activation) |
| UX | Pursue wallet support | Wallets workstream |
| Tooling | Improve documentation | DevX workstream |
| Coordination | The closest action in the set, most often establish bridge or provider partnerships | The party the dependency rests on, named for each blocker; governance where relevant |
| Compliance | Reject within this research, and route | RFP 05 (government and emerging markets entry) |
| Unknown | No action until evidenced; recorded as an unresolved question | Not assigned |

Findings that belong to another initiative or workstream go to the Cross-RFP Handoff Memo rather than being expanded here (RFP 07 Section 7).

**6. Use So Far (Milestones 1 and 2)**

The taxonomy has been applied in 105 tests: 103 on interview blocker claims and 2 on cases from our own validation work.

| Type | Tests |
|---|---|
| Tooling | 27 |
| Commercial | 21 |
| Technical | 15 |
| Coordination | 15 |
| Ecosystem | 9 |
| Compliance | 8 |
| Liquidity | 5 |
| UX | 3 |
| Unknown | 1 |
| Recorded with two types, resolved to one in the L2 Barrier Analysis | 1 |

In 15 of 105 tests (14%), no other explanation fitted and the blocker was classified Technical. This supports our Hypothesis 3: many apparent Layer 2 blockers are something else.

**7. Change Register**

| Earlier statement | Where | Now | Reason |
|---|---|---|---|
| Identus barriers counted as "four tooling, two documentation, two coordination and one ecosystem" | Desk Research Summary Section 5.9 | The two "documentation" barriers are counted as Tooling. The finding is unchanged. | Documentation failures fall under Tooling in the approved definitions (Research Design Document Section 4.1). |

**8. AI Use Disclaimer**

AI tools were used in drafting this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.

**Document Version History**

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 9 October 2026 | Abdulbasit Adigun Abdulrahman | Draft compiled from Milestones 1 and 2 for Milestone 3 |
