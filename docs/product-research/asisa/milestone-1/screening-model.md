---
title: "ASISA — Screening Model and Decision Gates"
sidebar_label: "Screening Model"
sidebar_position: 4
---

## Chapter 5: The Nine-Criterion Screening Model and Decision Gate Mapping

### 5.1 Design Rationale

The screening model is the core evaluative instrument. It turns the RFP 05 decision gates into a transparent, auditable rubric applied consistently to all candidates. The CPC can see why each use case is prioritised, deferred or rejected, and can challenge any criterion score. The instrument is locked before primary research begins (§6.3).

### 5.2 The Nine Criteria

| # | Criterion | What it tests | Embedded sub-tests | Evidence source |
|---|---|---|---|---|
| 1 | Problem severity / unmet need | Is the failure real, quantifiable and costly enough to drive behaviour change? | Does the industry itself recognise and cost the problem? | Desk research; underwriter and broker interviews |
| 2 | Stakeholder demand | Do institutions or end users want this, with evidence beyond stated intent? | Financial-inclusion alignment: does it widen access for the uninsured or underinsured? | Interviews; beneficiary engagement |
| 3 | Cardano fit | Does Cardano beat alternatives, including non-blockchain options? | Necessity test: could a centralised shared database or existing rail do the same more cheaply (Wüst & Gervais, 2018)? On-chain cost against product margin | Technical assessment; ecosystem evidence (weighted separately) |
| 4 | Regulatory readiness | Is the pathway clear, conditional or uncertain? | NDPA test: can the system operate without personal data on a public ledger? Licensing route | Regulatory mapping; regulator interviews |
| 5 | Infrastructure readiness | Are prerequisites met, partial, unmet or externally owned? | Oracles, identity, connectivity, off-ramps; integration with legacy core systems | Appendix D assessment |
| 6 | Counterparty access | Are required actors reachable within 12 to 24 months? | Access status per §4.4 | Recruitment outcomes |
| 7 | Delivery capacity | Can someone build, operate and support it in market? | Integration and support cost; local partners | Ecosystem and partner assessment |
| 8 | Adoption pathway | Is there a measurable route to recurring usage? | Adoption friction; unit economics; trust (Gefen et al., 2003) | Adoption signal framework |
| 9 | Risk and confidence | How sensitive is the conclusion and how strong is the evidence? | Confidence scoring across all criteria | Cross-criterion synthesis |

### 5.3 Scoring Methodology

Each criterion is scored on a four-level ordinal scale:

- **Strong (S):** clear evidence supporting viability; no significant barriers.
- **Conditional (C):** evidence supports viability subject to identifiable conditions.
- **Weak (W):** evidence is insufficient or contradictory, or identifies significant barriers.
- **Disqualifying (D):** a structural barrier that cannot be resolved within 12 to 24 months.

### 5.4 Decision Rules

> [!IMPORTANT]
> **The no-go default:** Every use case is presumed unviable until independent evidence shows otherwise. A Disqualifying score on any single criterion eliminates a use case from the priority set, however strong its other scores. This prevents weak candidates from surviving on aggregate enthusiasm.

1. **No-go default.** A use case advances only on affirmative evidence.
2. **Single-criterion elimination.** One Disqualifying score eliminates.
3. **Selection.** Up to three priority use cases are selected in Phase 6.
4. **Shortfall commitment.** If fewer than three clear the bar, the study reports that result.
5. **Separation of evidence.** Cardano ecosystem views are weighted separately and excluded from inputs to Criteria 1 and 2.

### 5.5 Scorecard Template

The scorecard is populated provisionally at Gate A ("desk evidence") and finally in Phase 6. Initial state:

| # | Use case | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | Result |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Parametric agricultural insurance | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | pending |
| 2 | Microinsurance premium collection and pooling | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | pending |
| 3 | Fraud-resistant shared claims registry | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | pending |
| 4 | Reinsurance treaty reconciliation | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | pending |
| 5 | Claims automation | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | pending |
| 6 | Beneficiary verification | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | pending |
| 7 | Identity-linked insurance services | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | pending |
| 8 | Stable-value settlement and payment rails | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | n/s | pending |

*n/s = not yet scored.*

### 5.6 Decision Gate Mapping

The RFP states that a proposal that does not map methods and deliverables to its decision gates will be considered a weak fit. The mapping is therefore explicit.

| # | RFP 05 decision gate | Method and evidence | Phase | Milestone | Deliverable |
|---|---|---|---|---|---|
| 1 | Is Nigeria a priority African entry candidate, and why? | Desk research; comparative African screen | 1, 2 | M1, M2 | Market prioritisation matrix |
| 2 | Which insurance use cases are credible entry plays? | Demand and viability evidence | 1, 4, 6 | M3, M4 | Use-case viability assessment |
| 3 | Which counterparties are reachable within 12 to 24 months? | Mapping and interviews with honest access status | 2, 4 | M2, M3 | Counterparty and partner access map |
| 4 | What regulatory conditions shape each play? | Regulatory mapping with cited sources | 3 | M2 | Regulatory landscape summaries |
| 5 | What infrastructure prerequisites must be in place? | Prerequisite assessment | 3, 4, 7 | M2 to M4 | Infrastructure prerequisite assessment |
| 6 | What partner and delivery model is required? | Delivery-capacity review | 2, 4, 7 | M3, M4 | Playbook: delivery-model section |
| 7 | What counts as adoption versus cosmetic activity? | Threshold definition | 5, 7 | M3, M4 | Adoption signal framework |
| 8 | Which plays justify pilots, funding or coordination? | Synthesis with go/no-go calls | 6 to 8 | M4, M5 | Research-to-action roadmap; decision memo |
| 9 | Which findings go to adjacent RFPs or workstreams? | Continuous; consolidated in Phase 8 | All | M5 | Cross-RFP handoff memo |
