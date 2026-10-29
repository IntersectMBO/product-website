---
title: "Milestone 3 Draft Evidence Report"
sidebar_label: "Draft Evidence Report"
sidebar_position: 14
---

![IEI logo](./assets/iei-logo.png)

# Milestone 3 — Draft Evidence Report

## Executive synthesis

**Recommendation: Conditional go.** Cardano has a credible but narrow commercial position as an assurance and conditional-settlement layer for open AI-agent services. The evidence does not support positioning Cardano as a general AI chain, a leading machine-payment network, or a competitor in model and compute markets.

Further funding should depend on independent buyer demand, open-standard interoperability, usable stablecoin and wallet distribution, and production evidence that escrow or receipts change a purchase, risk or dispute outcome.

**Do not fund.** Do not fund a proprietary Cardano agent standard, a broad AI narrative, a general compute or model marketplace, or performance claims based on Hydra without a relevant production reference.

## Evidence basis

The synthesis uses 70 public and technical source-register entries, 38 controlled claim records, 8 comparison cases, 12 Cardano cases, 12 screened use cases and 33 anonymized field records across six segments. Private contractual records and controlled interview records are not included in the public source register.

The synthesis triangulates public and technical sources with anonymized field evidence. Respondent identities, raw notes and organization-to-response mappings remain in the controlled project record. Field records vary in format and are used for qualitative triangulation, not statistical prevalence claims.

### Anonymized field-evidence key

| Reference | Agreed stakeholder segment | Qualifying records | Public treatment |
|---|---|---:|---|
| FE01 | Institutional buyers and adopters | 5 | Segment-level synthesis only |
| FE02 | AI-agent builders and platforms | 6 | Segment-level synthesis only |
| FE03 | Payments and commerce infrastructure | 6 | Segment-level synthesis only |
| FE04 | Cardano ecosystem and operators | 5 | Segment-level synthesis only |
| FE05 | Non-Cardano infrastructure and comparison cases | 5 | Segment-level synthesis only |
| FE06 | Standards, identity, security and assurance | 6 | Segment-level synthesis only |
| **Total** | **Six agreed segments** | **33** | **No respondent identities or organisation-to-response mapping published** |

These identifiers show which stakeholder segment informed each finding without exposing the exact attribution ledger. They are qualitative evidence references, not claims of statistical representativeness or organisational endorsement.

## Findings

### F1 — The market is real but the blockchain opportunity is selective

Machine payments and agentic commerce have moved into production infrastructure. Blockchain adds the clearest value when independent parties need programmable settlement, escrow, portable value or a neutral evidence anchor. Existing merchant, card, bank and private authorization systems remain stronger for many consumer and closed-enterprise workflows.

**Evidence.** x402 reports 75.41 million transactions and USD 24.24 million of 30-day volume; Stripe and Tempo support machine payments; Visa, Mastercard, Google and OpenAI use existing payment and merchant-control layers for agent commerce.

**Decision implication.** Cardano should target cross-organization failure modes rather than claim that all agent commerce requires a blockchain.

**Confidence.** High

**Evidence references.** S03-S15, S40-S45, S52, FE02, FE03

### F2 — Masumi and Sokosumi are the strongest Cardano proof point

Masumi provides a live Cardano implementation of agent registration, conditional payment, refunds and decision logging. Sokosumi makes the stack commercially legible through priced agent services and a task workflow.

**Evidence.** The Cardano directory recorded 1,421 Masumi transactions in the 30 days ending 16 October 2026. Masumi reports more than 39,000 cumulative on-chain transactions. The Serviceplan Sokosumi page reported 3,543 tasks run as of 27 September 2026. These measures show activity but do not establish paid value, unique buyers, repeat use or accepted outcomes.

**Decision implication.** Use Masumi and Sokosumi as the reference beachhead, but keep adoption claims conditional until transaction quality and independent buyer evidence are available.

**Confidence.** High for live capability; medium-low for commercial adoption

**Evidence references.** S28-S31, S50, S53-S60, S68-S70, S73, FE04

### F3 — Distribution is Cardano's decisive competitive weakness

The strongest payment protocols are open and rail-agnostic, but their adoption is pulled by wallets, facilitators, stablecoin liquidity, developer tooling and existing merchant or platform channels. Cardano has a differentiated escrow scheme but materially less visible distribution.

**Evidence.** x402 has Linux Foundation governance and broad infrastructure participation. Stripe supports MPP across multiple payment methods. Base, Solana and Tempo have stronger documented wallet, stablecoin and facilitator reach. Field discussions repeatedly identified distribution and integration as more decisive than feature completeness.

**Decision implication.** Cardano should integrate with existing standards and channels. A Cardano-specific standard would deepen rather than solve the distribution problem.

**Confidence.** High

**Evidence references.** S05-S11, S40-S45, S52, S71, FE02, FE03, FE05

### F4 — The defensible product wedge is service assurance

The strongest Cardano use case is conditional purchase of machine-delivered services where non-delivery, evaluation, refund or later dispute matters. Payment-linked identity and minimal receipts can strengthen this wedge, but are not independently unique products.

**Evidence.** Masumi implements escrow and decision logging; ERC-8183 and conventional marketplaces show that the problem is real but competitive. Security and standards evidence favors bounded authority, revocation and interpretable commitments over broad proof-of-intent claims.

**Decision implication.** Lead with escrowed service completion and accountable receipts, not generic micropayments or identity alone.

**Confidence.** Medium-high

**Evidence references.** S25, S29, S44-S45, S50, S72, FE02, FE03, FE06

### F5 — Formal methods support credibility but are not the product proposition

Cardano's deterministic execution model and engineering discipline can improve confidence in specified on-chain controls. They do not prove that an AI agent intended the right action, produced a correct off-chain result, or that every application is formally verified.

**Evidence.** Cardano documentation supports deterministic fee and script evaluation properties. Formal-verification evidence applies to defined specifications and implementation layers. Field evidence emphasizes least privilege, policy enforcement and revocation as deployable controls.

**Decision implication.** Use formal methods to substantiate specific mandate, escrow or receipt logic. Retire blanket claims that Cardano makes AI safe or verified.

**Confidence.** High

**Evidence references.** S33-S35, S51, FE01, FE06

### F6 — Public-chain evidence must remain minimal and privacy-aware

A ledger can prove ordering, integrity and settlement state, but it cannot prove the truth of off-chain data or service quality. Full prompts, decisions or personal data should not be placed on a public ledger.

**Evidence.** C2PA, verifiable credentials, OpenID and enterprise security frameworks provide strong signed or federated alternatives. Field evidence favors hashes, receipts, revocation status and selective disclosure over full public logs.

**Decision implication.** The recommended design is a minimal receipt or commitment, with confidential data and interpretation kept off-chain. Midnight is an adjacent privacy pathway, not a Cardano L1 property.

**Confidence.** High

**Evidence references.** S16-S24, S36-S37, S72, FE01, FE06

### F7 — Open standards are the route to relevance

MCP and A2A increasingly cover tools and agent communication; x402 and MPP cover payment initiation; AuthZEN, AP2, FIDO and network controls address authorization and delegated intent. Cardano's opportunity is to provide a compatible settlement and evidence function inside this stack.

**Evidence.** The Linux Foundation now hosts neutral agent and x402 governance. OpenID AuthZEN finalized its authorization API and advanced agent-era approval and MCP authorization profiles in 2026.

**Decision implication.** Prioritize adapters, conformance tests and reference architectures. Do not attempt to own agent communication, discovery or identity standards end to end.

**Confidence.** High

**Evidence references.** S03-S18, S44-S45, S71-S72, FE02, FE03, FE06

### F8 — A broad Cardano AI vertical is not supported

The evidence does not support competing directly in decentralized compute, model or inference markets, generic AI applications, or mainstream consumer checkout. Specialists have stronger supply, liquidity, distribution and product focus.

**Evidence.** Bittensor, Akash, Fetch.ai, Olas, Solana, Base, Tempo and established commerce networks already occupy these layers. Current Cardano cases outside Masumi are mainly adjacent capabilities or weak adoption signals.

**Decision implication.** Treat these areas as no-go or partner domains unless new buyer evidence establishes a Cardano-specific requirement.

**Confidence.** High

**Evidence references.** S38-S48, S61-S66, FE03, FE05


## Field synthesis

| Theme | Synthesis | Strength | Cardano read-through |
| --- | --- | --- | --- |
| Identity and accountable principal | Counterparties need to know which person or organization stands behind an agent, what authority was delegated and how it can be revoked. A wallet address alone is insufficient. | Strong across standards, builders, payments and institutional segments | Use public identifiers only as anchors for interoperable credentials and revocation, not as a proprietary identity system. |
| Runtime authorization | Authentication and agent communication are increasingly standardized. Fine-grained, task-level authorization and approval remain active gaps. | Strong | On-chain rules may enforce a narrow settlement policy, but enterprise policy should remain compatible with AuthZEN, AP2 and wallet controls. |
| Payment execution | Low-level payment execution is becoming commoditized across x402, MPP, cards and stablecoin wallets. Service completion, reversals and liability remain less settled. | Strong | Differentiate after payment initiation through escrow, refund state and evidence, not on payment transport alone. |
| Evidence and disputes | Logs and receipts can support accountability, but they do not establish that an AI result was correct. Evidence must be interpretable by an agreed dispute or assurance process. | Strong | Anchor minimal commitments and lifecycle events. Keep evaluation, confidential data and remedies off-chain or selectively disclosed. |
| Distribution and integration | Builders and buyers favor infrastructure available through existing SDKs, wallets, payment providers and standards. Technical differentiation without distribution is unlikely to convert. | Strong | Make Cardano an implementation option inside open protocols rather than a separate ecosystem choice. |
| Privacy and sovereignty | Local models, edge execution and data sovereignty are important in parts of the market, but they do not automatically create a need for blockchain settlement. | Moderate | Treat local AI and privacy as adjacent design constraints. Prove the transaction-layer role separately. |
| Formal assurance | Formal verification is valuable where a precise control, contract or state transition can be specified. It does not cover open-ended model behavior or business truth. | Strong among security and assurance respondents | Apply assurance to bounded mandate and escrow logic and publish the exact verified artifact. |

## Competitive position by layer

| Layer | Leaders / reference set | Cardano position | Reason | Action |
| --- | --- | --- | --- | --- |
| Agent communication and tool access | MCP, A2A, AAIF ecosystems | Partner or irrelevant | These open protocols solve communication and tool access without a settlement chain. | Support them through adapters; do not compete. |
| Authorization and delegated intent | AuthZEN, AP2, FIDO, Mastercard, Visa, wallet policy engines | Complement | Policy and identity decisions usually occur off-chain. Cardano can enforce a narrow approved settlement state. | Define interoperable inputs and receipts for an external policy decision. |
| Machine-payment execution | x402, MPP, Stripe, Base, Solana, Tempo | Lose today on distribution | Leading rails have broader facilitator, wallet, stablecoin and platform reach. | Interoperate and target higher-value conditional transactions. |
| Conditional service settlement | Masumi, marketplace escrow, emerging ERC-8183 | Conditional advantage | Masumi has a live integrated escrow, refund and receipt flow on Cardano. | Prove independent demand, delivery outcomes and dispute value. |
| Agent identity and reputation | W3C VC, OpenID, GLEIF, KERI, ERC-8004, platform systems | Competitive feature, not unique category | Open standards and competing registries are mature or better distributed. | Link identity to service history and settlement while preserving interoperability. |
| Audit receipts and provenance | C2PA, transparency logs, signed databases, AP2 receipts | Conditional advantage | A neutral ledger may add value across organizations, but only for minimal shared evidence. | Validate the evidentiary and privacy value with risk and audit owners. |
| Consumer agent checkout | UCP, ACP, AP2, Visa, Mastercard, Shopify, existing PSPs | No-go as broad position | Existing merchant and payment infrastructure already handles checkout, fraud, refunds and customer service. | Consider only narrow cross-border or digital-service exceptions. |
| Compute and model markets | Bittensor, Akash, Fetch.ai, Olas, specialized clouds | No-go | Specialists have stronger supply, incentives, developer mindshare and live market structure. | Do not invest without a buyer requirement that is specific to Cardano. |
| Privacy-preserving transactions | Midnight, zero-knowledge systems, TEEs, encrypted platforms | Adjacent handoff | Privacy is not a native Cardano L1 property and the interoperability path remains unproven. | Coordinate with the privacy workstream; avoid inherited claims. |

## Draft decision gates

| Gate | Question | Answer | Confidence | Decision |
| --- | --- | --- | --- | --- |
| G1 | Is there a real AI-commercial opportunity where blockchain matters? | Yes, selectively, for open services needing neutral settlement, conditional release or shared evidence. | High | Proceed only on narrow cross-organization workflows. |
| G2 | Where does Cardano technical fit create buyer value? | Predictable execution and programmable escrow can support bounded settlement controls; receipts can support accountability. | Medium-high | Attach every technical claim to a buyer outcome and a named artifact. |
| G3 | What current Cardano activity qualifies as adoption evidence? | Masumi and Sokosumi are the clearest live beachhead. Current activity is real but does not yet prove broad paid adoption. | High for capability; medium-low for adoption | Use precise activity language and request transaction-quality evidence. |
| G4 | Which use cases are most credible? | Escrowed agent services, conditional API payments and minimal agent-action or payment receipts. | Medium-high | Prioritize these three; keep identity as an integrated feature. |
| G5 | Which buyers are reachable? | Agent-service providers, AI platforms, payment infrastructure, integrators and selected risk or audit owners are reachable through the field base. | Medium | Convert research access into written buyer validation before implementation funding. |
| G6 | Can Cardano compete with specialized AI and payment networks? | Only through a focused assurance wedge. Cardano does not currently lead distribution, compute, models or consumer checkout. | High | Partner with open standards and avoid head-on infrastructure categories. |
| G7 | What would make AI a real Cardano adoption vertical? | Independent paying buyers, repeat use, multiple providers, standards-compatible integrations and measurable Cardano-dependent outcomes. | High | Use the proposed funding triggers rather than transaction counts alone. |
| G8 | Which narratives are credible? | Assured agent services and escrowed machine-delivered work are credible. Broad trusted-AI and AI-chain narratives are not. | High | Use the recommended narratives and retire the broad claims. |
| G9 | What partner pathway is required? | Masumi or Sokosumi, a wallet or facilitator, stablecoin access, an independent buyer channel, and identity or authorization interoperability. | Medium-high | Require ownership and incentives across all parties before a pilot. |
| G10 | What value could the pathway create for Cardano? | Potential transaction activity, stablecoin use, independent developer integrations and a higher-assurance enterprise reference. | Medium-low until validated | Measure incremental Cardano-dependent activity and avoid attributing all application use to the chain. |
| G11 | What is the current recommendation? | Conditional go for a narrow assurance and settlement wedge; monitor adjacent identity and mandate uses; no-go for compute, models and generic AI positioning. | Medium-high | Advance only through the three proposed evidence-gated engagements. |
| G12 | What should transfer to adjacent RFP work? | Privacy and Midnight, stablecoin and wallet distribution, identity standards, L2 or interoperability, delivery partners and implementation design. | High | Use a concise cross-RFP handoff in Milestone 4. |

## Public summary

The evidence supports a conditional-go recommendation for a narrow Cardano position in AI-agent services. Cardano's strongest current proof point is Masumi and Sokosumi: a live combination of agent registration, conditional payment, refunds and service receipts. The opportunity is not to compete for AI models, compute or mainstream checkout. It is to provide assurance when independent agents or organizations buy machine-delivered services and need bounded authority, conditional release and a durable receipt. The market is moving toward open, rail-agnostic standards, so Cardano must integrate with existing agent, authorization and payment protocols. Further funding should require independent paying buyers, repeat production use, usable wallet and stablecoin distribution, and evidence that the Cardano-based control changes a real purchase, risk or dispute outcome.
