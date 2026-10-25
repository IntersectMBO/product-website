---
sidebar_label: Ingest
---

# Layer 2 : Post-Interview Ingestion

After each interaction, the interviewer submits evidence through the primary-research ingestion channel (configuration TBD in Phase 2–3). The workflow follows the resolver pattern:

1. **Ingest** — timelining creates a Neo4j `Entry` from the submission (voice note, text summary, or structured form)
2. **Transcribe** — voice entries are transcribed before resolve eligibility
3. **Resolve** — the primary-research resolver extracts fields against the co-designed channel schema and writes typed graph nodes
4. **Link** — resolved nodes connect to the source entry, participant handle, region cluster, and respondent category

### Schema Co-Design (Phase 2–3)

During Phase 2 desk screening and Phase 3 field access, hub coordinators and PRISMA research leads co-design the channel schemas that define resolver extraction shape. Co-design sessions produce:

* **Respondent interaction schema** — session metadata, category, access basis, consent status, gates addressed
* **Adoption signal schema** — signal description, proposed CASS tier, evidence type, corroboration status
* **Counterparty lead schema** — entity name or archetype, role type, reachability horizon, confidence
* **Regulatory finding schema** — jurisdiction, topic, certainty tier, source type
* **Regional evidence schema** — cluster, use case, finding type, confidence

Schemas follow the same authoring pattern as other PRISMA protocols: Zod-defined node shapes consumed by resolver extraction, documented in the process-infrastructure protocol tree once finalised. See [Credential Schemas](https://docs.prisma.events/en/processes/enrolment/dids/credential-schemas) for the parallel pattern used in verifiable credential claim definitions.

> **Requires implementation:** Schema node definitions, protocol commit references, and `SchemaGraphViewer` locations will be added to this guide once Phase 2–3 co-design is complete.

### CASS Feeding

Resolved adoption signal nodes are the primary structured input for CASS classification during Phase 4 analysis. Interviewers capture:

| Field (conceptual) | Purpose |
| :---- | :---- |
| Signal description | What was observed or claimed |
| Evidence type | Primary observation / document cited / third-party report / respondent assertion |
| Proposed tier | Interviewer's evidence-supported CASS tier (1–4) |
| Tier rationale | Why the evidence does or does not support the proposed tier |
| Corroboration needed | Whether independent validation is required before tier is final |

Final CASS classification occurs in analysis (Phase 4.1), not at point of interview. Interviewers propose tiers; analysts confirm or downgrade.
