---
sidebar_label: Verify
---

# Layer 3: Verification and Data Quality

Resolved graph contributions pass through two verification mechanisms before entering synthesis workflows.

### Evaluate — Pruning and Quality Control

The [Evaluate](https://evaluate.prisma.events) interface reads the same Neo4j embeddings that timelining writes. For CPC primary research, evaluate will be configured to:

* Retrieve resolved primary-research subgraphs via RAG presets
* Flag duplicate, contradictory, or low-confidence entries for reviewer pruning
* Remove unnecessary or erroneous nodes before they feed RARF revision and CASS finalisation

Evaluate is a **downstream consumer** of the ingestion pipeline — it does not replace interviewer discipline at Layer 1 or schema compliance at Layer 2. Designated reviewers (from the hub team) operate evaluate to clean the evidence base before Phase 4 synthesis.

> **Requires implementation:** CPC-specific evaluate presets, pruning rules, and write-back of `evaluation` nodes are planned upgrades; configuration is a Phase 3 deliverable.

### Prisma DIDs — Batch Contribution Verification

Each accepted atomic contribution is linked to a **registered holder DID** (`did:cardano:…`) — a verified Cardano wallet holder who conducted or attested to the interview contribution. The [Prisma DIDs](https://docs.prisma.events/en/processes/enrolment/dids/overview) VC mechanism provides:

| Step | Action |
| :---- | :---- |
| Holder registration | Interviewer (or designated hub coordinator) holds a registered DID via CIP-30 wallet |
| Contribution attestation | Accepted graph entries are batch-verified and issued as contribution credentials |
| On-chain anchoring | VC events anchored via CIP-20 metadata (L_VC label) for auditability |
| Verification | Reviewers and analysts verify credentials via the [VC Interface](https://docs.prisma.events/en/processes/enrolment/dids/fork-vc-interface) before treating entries as confirmed evidence |

This creates an auditable chain: **Entry → resolved nodes → evaluate acceptance → VC attestation → registered DID**. Findings without VC linkage remain provisional in the Stakeholder Access Register until the verification batch completes.

> **Requires implementation:** CPC-specific `ContributionCredential` claim fields (e.g. `projectId`, `contributionType`, evidence URL pointing to anonymised entry reference), issuer DID authorisation, and batch verification schedule are co-designed in Phase 2–3 alongside hub counterparties.

# Minimum Checks
The following minimum checks are required.

1. Consent recorded
2. Required fields complete
3. Data quality: discrepencies flagged and duplicated removed
