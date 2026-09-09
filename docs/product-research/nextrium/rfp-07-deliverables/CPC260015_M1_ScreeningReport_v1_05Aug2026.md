---
title: "Screening Report - NexTrium Milestone 1 (CPC-26-0015)"
sidebar_label: "Screening Report"
---

**NEXTRIUM**

Global Innovations Ltd

**Screening Report**

*Use case and pathway screening, prioritisation matrix, and shortlist rationale*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D-M1-05                                                                         |
| **Version**               | 1.0                                                                             |
| **Date**                  | 5 August 2026                                                                   |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This document is deliverable D-M1-05 under the grant agreement. It records the screening model applied in Phase 2 of the research design, its application to candidate use cases and interoperability pathways, the resulting shortlist with documented rationale for every exclusion, and the market prioritisation matrix.

It should be read alongside the Research Design Document (D-M1-01), which establishes the research phases and respondent categories, and the Desk Research Summary (D-M1-04), which supplies the evidence base against which candidates were screened. Stakeholder access status is reported separately in D-M1-06.

**1. The Screening Model**

**1.1 Basis and Derivation**

Phase 2 of the research design screens all candidate use cases, pathways and respondents against a thirteen-criterion model. This section specifies that model in operational form.

The criteria are derived from three sources: the eleven decision gates in RFP 07, which determine what the research must be able to answer; the seven research hypotheses, which determine what must be tested; and the evidence standards established during desk research, which determine what can be relied upon. Each criterion traces to at least one of the three.

The derivation is stated because the model determines what enters primary research. A screening model applied without a stated basis is not auditable, and every exclusion recorded in this document rests on it.

**1.2 The Thirteen Criteria**

Criteria are grouped in three tiers. A candidate must pass all four relevance criteria to proceed. Evidence and viability criteria determine priority and confidence, not inclusion.

| **\#** | **Criterion**          | **Test**                                                                                    | **Tier**  |
|--------|------------------------|---------------------------------------------------------------------------------------------|-----------|
| 1      | Market relevance       | Does it serve or affect African informal economy participants or the builders serving them? | Relevance |
| 2      | Cardano relevance      | Does it involve Cardano deployment, integration, or a documented decision not to?           | Relevance |
| 3      | Scope relevance        | Does it concern Layer 2 capability or one of the seven interoperability feature types?      | Relevance |
| 4      | Gate relevance         | Does it inform at least one of the eleven decision gates?                                   | Relevance |
| 5      | Demand evidence        | Is there documented evidence that someone wanted to deploy and could not?                   | Evidence  |
| 6      | Evidence independence  | Does evidence exist beyond applicant-supplied validation work?                              | Evidence  |
| 7      | Non-L2 elimination     | Have the seven non-Layer 2 alternatives been tested and eliminated?                         | Evidence  |
| 8      | Evidence currency      | Is the status verifiable to a current source with a date?                                   | Evidence  |
| 9      | Blocker classification | Can the blocker be classified against the nine-type taxonomy?                               | Viability |
| 10     | Capability state       | Does the capability exist and is it discoverable, or is the absence documented?             | Viability |
| 11     | Time sensitivity       | Would base-layer throughput increases within twelve months resolve it?                      | Viability |
| 12     | Cost and reach test    | Is the constraint capability, cost, or reach?                                               | Viability |
| 13     | Provider viability     | Does any provider dependency carry documented continuity risk?                              | Viability |

**1.3 The Seven Non-Layer 2 Alternatives**

Criterion 7 requires elimination of all seven before any blocker is classified as a Layer 2 blocker: liquidity, wallet support, bridge or provider access, tooling, commercial uncertainty, compliance, and partner access.

**2. Use Case Screening**

Three input sets were screened: the six applicant-supplied VAL cases, the fourteen-initiative Layer 2 inventory, and the three documented capability absences.

**2.1 VAL Cases**

| **Case** | **Subject**                     | **Outcome**               | **Rationale**                                                                                                                                    |
|----------|---------------------------------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| VAL-001  | Aiken contract baseline         | Excluded                  | Fails criterion 3. Establishes a working baseline, not a blocker                                                                                 |
| VAL-002  | Midnight partner chain          | Included, low priority    | Passes 1 to 4. Fails 6, evidence is applicant-supplied only. Value-flow relevance to Gates 6 and 7                                               |
| VAL-003  | Identus identity stack          | Included, high priority   | Passes all four relevance criteria. Independent corroboration from Input Output roadmap. Three of nine barriers non-verifiable under criterion 8 |
| VAL-004  | Orcfax oracle schema            | Included, medium priority | Passes relevance. Fails criterion 13, the provider entered wind-down. Format survives via open source                                            |
| VAL-005  | Agent intelligence layer        | Included, split by layer  | Orchestration layer fails criterion 3, a Cardano-native alternative exists. Inference layer passes as a documented absence                       |
| VAL-006  | Access channel and wallet layer | Included, high priority   | Passes all criteria. Independently corroborated by peer benchmarking and fee structure findings                                                  |

VAL-005 is the only case screened as split. The agent orchestration layer is excluded because Masumi Network provides a Cardano-native equivalent, making the original selection an architectural preference rather than a capability gap. The inference compute layer is included because no Cardano-native equivalent was identified.

**2.2 Layer 2 Initiatives**

| **Initiative**             | **Outcome**                    | **Rationale**                                                                                      |
|----------------------------|--------------------------------|----------------------------------------------------------------------------------------------------|
| Hydra                      | Included                       | Adoption phase, documented constraints, roadmap targets a persistent barrier                       |
| Ouroboros Leios            | Included, controlling variable | Passes all criteria. Determines criterion 11 for every other candidate                             |
| Midgard                    | Included                       | First Cardano optimistic rollup, eUTxO isomorphic, mainnet targeted end 2026                       |
| zkFold                     | Included                       | Rollup milestone completed July 2026, addresses transaction size limit                             |
| Masumi agent-settlement L2 | Included                       | Layer 2 with Cardano L1 settlement, identified during desk research, not in the original inventory |
| Peras                      | Included, low priority         | Fast-finality overlay, relevant to settlement interoperability                                     |
| Mithril                    | Included, low priority         | Partial mitigation of the infrastructure barrier, already in production use                        |
| Midnight                   | Excluded from L2 screening     | Partner chain, not a Layer 2 settling on Cardano. Retained for value-flow assessment               |
| Materios                   | Excluded                       | Fails criterion 1. No African market relevance identified                                          |
| Partner Chains Toolkit     | Excluded from L2 screening     | Framework rather than capability. Retained for value-flow under Gates 6 and 7                      |
| Milkomeda C1               | Excluded                       | Deprecated September 2025. Retained as historical negative-case evidence for Gate 9                |
| Gummiworm                  | Excluded                       | Fails criterion 8. Status not verifiable from public sources                                       |
| Eryx                       | Excluded                       | Fails criterion 8. Status not verifiable from public sources                                       |
| Hydrozoa                   | Excluded                       | Fails criterion 8. Status not verifiable from public sources                                       |
| Mamba                      | Excluded                       | Fails criterion 8. Status not verifiable from public sources                                       |

Four initiatives are excluded solely on criterion 8. Their exclusion reflects the absence of verifiable current status, not an assessment of merit. All four are carried to primary research for confirmation through Category 2 respondents.

**2.3 Documented Capability Absences**

| **Absence**                                                       | **Outcome**                | **Rationale**                                                                                                        |
|-------------------------------------------------------------------|----------------------------|----------------------------------------------------------------------------------------------------------------------|
| Phone-number-addressed stablecoin distribution with sub-cent fees | Included, highest priority | Passes all thirteen. Independently evidenced by peer benchmarking, fee structure analysis and VAL-006                |
| Lightweight DID resolution for credential issuance                | Included, high priority    | Passes all thirteen. Asymmetry between resolution and issuance is documented and named as a priority by Input Output |
| Tier-one omnichain messaging on Cardano testnets                  | Included, medium priority  | Passes relevance. Criterion 13 flag: mainnet endpoints announced while testnet support remained an unfunded proposal |

**2.4 Shortlist**

Eleven use cases proceed to primary research. Four VAL cases in whole or part, four Layer 2 initiatives at priority, and the three documented capability absences.

Nine candidates are excluded: one VAL case, four Layer 2 initiatives on status verifiability, and four on scope or market relevance. Every exclusion carries a stated rationale above.

**3. Interoperability Pathway Screening**

**3.1 Feature Type Coverage**

Decision Gate 5 requires assessment of all seven interoperability feature types. Screening establishes evidence position for each rather than excluding any, since a feature type with no evidence is a research gap rather than an absence of demand.

| **Feature type**              | **Desk research position**                        | **Screening outcome**                                 |
|-------------------------------|---------------------------------------------------|-------------------------------------------------------|
| Asset bridging                | Substantively evidenced across seven providers    | Proceed with provider interviews                      |
| Identity and data portability | Evidenced; African work occurring on other chains | Proceed with priority                                 |
| Liquidity routing             | Partially evidenced through stablecoin position   | Proceed, gap noted                                    |
| Settlement interoperability   | Single central bank source only                   | Proceed as primary research priority                  |
| Message passing               | Insufficiently evidenced                          | Primary research priority, no desk conclusion         |
| Wallet user experience        | Insufficiently evidenced                          | Primary research priority, Variant B instrument added |
| Partner-chain integration     | Evidenced; no lock-in mechanism documented        | Proceed for value-flow only                           |

**3.2 Pathway Candidates**

Preliminary value-flow classifications from desk research, carried forward at low confidence pending triangulation. No pathway is excluded on classification. Gates 6 and 7 require dependency-risk and value-leakage pathways to be assessed, not filtered.

| **Pathway**             | **Preliminary class**              | **Criterion 13 flag**                         | **Outcome**                |
|-------------------------|------------------------------------|-----------------------------------------------|----------------------------|
| Rosen Bridge            | Mutual-value                       | None                                          | Proceed                    |
| Cardinal                | Mutual-value                       | None                                          | Proceed                    |
| Bifrost                 | Mutual-value, pending delivery     | 1 of 6 milestones against three passed dates  | Proceed, flagged           |
| LayerZero               | Neutral-access, pending delivery   | Announcement and administrator status diverge | Proceed, flagged           |
| Circle USDCx            | Value-accretive, subsidy-dependent | Fee subsidy ended 28 May 2026                 | Proceed, flagged           |
| Wanchain                | Dependency-risk                    | Cardano bridge offline since 21 July 2026     | Proceed, highest priority  |
| Celo MiniPay            | Dependency-risk to value-leakage   | Distribution layer external to Cardano        | Proceed                    |
| Masumi agent settlement | Unclassified                       | 1 of 6 milestones                             | Proceed for classification |

**4. Market Prioritisation Matrix**

Derived mechanically from screening. Priority is a function of evidence strength, gate coverage, and whether the constraint is capability, cost or reach. It is not a recommendation, which is a Milestone 3 output.

**4.1 Priority Tiers**

| **Tier** | **Candidate**                          | **Constraint type**  | **Gates**  | **Evidence position**                                      |
|----------|----------------------------------------|----------------------|------------|------------------------------------------------------------|
| 1        | Access channel and wallet layer        | Reach and cost       | 1, 2, 4, 5 | Independently corroborated from three directions           |
| 1        | Identity issuance infrastructure       | Capability and cost  | 1, 2, 3, 5 | Applicant evidence plus Input Output roadmap corroboration |
| 2        | Small-value transaction cost structure | Cost                 | 2, 4       | Three structural findings from primary documentation       |
| 2        | Omnichain messaging on testnets        | Capability           | 3, 5, 8    | Administrator status plus funding record                   |
| 2        | Oracle continuity after subsidy        | Commercial           | 4, 9, 10   | Provider primary account plus governance data              |
| 3        | Optimistic rollup readiness            | Capability           | 2, 3       | Whitepaper and milestone record                            |
| 3        | Inference compute absence              | Capability           | 2, 3       | Applicant evidence, no independent corroboration           |
| 3        | Base-layer throughput sufficiency      | Controlling variable | 2          | Testnet live, mainnet targeted late 2026                   |

**4.2 Reading the Matrix**

Tier 1 candidates carry independent corroboration and inform four or more decision gates. Tier 2 carry documented evidence but from fewer directions. Tier 3 carry single-source or applicant-only evidence and require primary research before any recommendation.

Base-layer throughput sufficiency appears as a controlling variable rather than a candidate. If Leios delivers at the magnitude currently in testnet, several Tier 2 and Tier 3 candidates change status. Every instrument carries a question testing this.

**4.3 Constraint Distribution**

Of eight prioritised candidates, three are capability constraints, two are cost constraints, one is reach and cost, one is commercial, and one is a controlling variable. Capability constraints do not dominate. This is the screening-level expression of Hypothesis 3.

**5. Screening Limitations**

- The screening model is specified in operational form in Section 1.1. Its derivation is stated and open to review.

- Four Layer 2 initiatives were excluded on status verifiability alone. Exclusion is not an assessment of merit.

- Two of seven interoperability feature types proceed with no desk research conclusion.

- Preliminary value-flow classifications rest on desk research and carry low confidence pending triangulation.

- Criterion 7, non-Layer 2 elimination, can only be fully applied during interviews. At screening it is applied to documented cases only.

- The matrix reflects evidence position at 3 August 2026. Provider status changed four times during desk research and may change again.

**6. Carry-Forward to Primary Research**

| **Item**                                   | **Action**                                                      |
|--------------------------------------------|-----------------------------------------------------------------|
| Four unverifiable Layer 2 initiatives      | Confirm status through Category 2 respondents                   |
| Message passing and wallet UX              | Primary evidence required; no desk conclusion exists            |
| Settlement interoperability                | Single source; corroboration required                           |
| All preliminary value-flow classifications | Triangulate through Category 3 and Category 4 interviews        |
| Criterion 7 elimination                    | Apply in full during every interview where a blocker is claimed |
| Criterion 11 Leios test                    | Apply to every claimed Layer 2 blocker                          |

**Document Version History**

| **Version** | **Date**      | **Author**                    | **Change**                                                                                                 |
|-------------|---------------|-------------------------------|------------------------------------------------------------------------------------------------------------|
| 1.0         | 5 August 2026 | Abdulbasit Adigun Abdulrahman | Initial issue. Screening model specified and applied to candidate use cases and interoperability pathways. |
