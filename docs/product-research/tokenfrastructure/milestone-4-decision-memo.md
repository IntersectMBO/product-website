---
title: "Milestone 4 Decision Memo"
sidebar_label: "Decision Memo"
sidebar_position: 22
---

![IEI logo](./assets/iei-logo.png)

# Decision memo

## Decision

**Adopt a conditional-go posture for a narrow Cardano position in assurance and conditional settlement for open AI-agent services.** Focus on machine-delivered services where independent parties need bounded authority, conditional release, refunds or a durable shared receipt. Do not treat AI as a broad Cardano strategic vertical until external buyers, distribution and production outcomes pass the conditions below.

The evidence supports three priority use cases:

1. escrowed purchase of machine-delivered services;
2. pay-per-call API or data access where delivery risk justifies conditional protection; and
3. minimal agent-action and payment receipts for cross-organisation assurance.

Payment-linked identity can support these use cases. It does not provide a separate defensible category without evidence that portable identity or reputation changes a buyer decision.

## Evidence confidence

The research base contains 75 public and technical source entries, 38 controlled claim records, 8 comparison cases, 12 Cardano or Cardano-adjacent cases, 12 scored use cases and 33 qualifying field records across six stakeholder segments.

Confidence is high that machine payments and agent commerce are commercially active, that Cardano currently trails leading networks on distribution, and that broad AI-chain, compute-market and model-market positions lack support. Confidence is medium-high that conditional service settlement is Cardano's strongest product wedge. Confidence remains medium-low on independent commercial adoption because public activity data does not identify unique external buyers, paid conversion, repeat use or outcome quality.

## Why this position survives the evidence

Masumi and Sokosumi provide the strongest Cardano proof point. They combine agent registration, conditional payment, refunds and service records in a live workflow. The Cardano app profile showed 1,852 Masumi on-chain transactions in the 30 days captured by its 21 October 2026 snapshot. Masumi reported more than 40,000 cumulative on-chain transactions. The Sokosumi Serviceplan page displayed 4,229 tasks when accessed on 29 October 2026 while labelling its profile data 27 September 2026.

These figures establish capability and activity. They do not establish broad paid adoption. The metrics use different definitions and may include tests, retries, internal tasks or concentrated users. No public source in the final evidence cut separates external buyers, completed paid work, repeat use, refunds, disputes and accepted outcomes.

Cardano also has relevant technical properties. Predictable script execution and programmable escrow can support bounded settlement controls. A public ledger can provide integrity and ordering for minimal receipts. Those properties create buyer value only when a real workflow needs neutral enforcement or evidence across organisations. They do not prove the correctness of an AI output, the intent of an agent, regulatory compliance or the truth of off-chain data.

The main competitive weakness is distribution. x402, MPP, Stripe, Base, Solana, Tempo and card-network initiatives reach developers, wallets, stablecoins and merchant channels more directly. Open standards increasingly cover agent communication, payment initiation, identity and authorization. Cardano should integrate into that stack and compete only where conditional settlement or shared evidence adds a measurable benefit.

## Conditions for further investment

| Condition | Minimum evidence before material funding | Owner or audience | Stop condition |
|---|---|---|---|
| Independent demand | At least three external buyers and two independent service providers define a paid workflow, acceptance criteria and reason to prefer conditional settlement | CPC, Cardano Foundation, Masumi or Sokosumi and buyer-channel partner | Buyers prefer simple payment, subscription or conventional marketplace escrow and will not switch or pay for the added control |
| Open interoperability | A documented path connects the service to an existing agent framework, payment protocol, wallet or facilitator and stablecoin route without a proprietary Cardano agent standard | Masumi or Cardano developer team, wallet and payment partners | Cardano integration remains materially harder than alternatives without a compensating buyer benefit |
| Production outcomes | Reporting separates paid and unpaid tasks, unique external buyers, completed work, repeat use, refunds, disputes and accepted outcomes | Service operator and independent evaluator | Activity remains internal, test-driven or concentrated and does not show a valued outcome |
| Assurance value | Two independent risk, audit or control owners accept a minimal receipt schema, privacy boundary and dispute process | Institutional control owners and delivery partner | Signed private logs or existing transparency services satisfy the material requirement at lower cost |
| Cardano dependency | The evaluation identifies the transaction, control or evidence outcome that depends on Cardano rather than ecosystem association | CPC and evaluator | The same outcome is achieved more simply without Cardano and no buyer values the difference |

## Recommended actions

### Define one buyer-backed escrowed service test

**Action.** Fund a short design and buyer-validation engagement for one machine-delivered service where non-delivery, refund or dispute risk is material. Do not fund production implementation until the buyer test passes.

**Relevant owners.** CPC or Cardano Foundation as sponsor, Masumi or Sokosumi as the service infrastructure, two independent service providers and at least three external buyers.

**Evidence.** Masumi provides live escrow and refund capability. Field evidence identifies service completion and liability as less settled than basic payment initiation. Conventional marketplace escrow and ERC-8183 provide credible alternatives.

**Uncertainty.** Buyers may value speed and distribution more than conditional settlement. The public record does not show willingness to pay for the added control.

**What changes the recommendation.** Written buyer acceptance criteria and paid production use would strengthen it. Consistent preference for simple payment or conventional escrow would move it to no-go.

**What cannot be concluded.** Current transaction or task counts do not prove independent demand or product-market fit.

### Publish an open integration and conformance path

**Action.** Specify how a Cardano conditional-settlement service interoperates with current agent, authorization and payment standards. Measure integration effort and recovery behaviour with at least one non-Cardano builder.

**Relevant owners.** Masumi and Cardano developer teams, an x402 or MPP facilitator, wallet and stablecoin providers and a non-Cardano builder.

**Evidence.** Market distribution follows open protocols, SDKs, wallets and payment channels. Cardano has a coherent settlement feature but weaker documented reach.

**Uncertainty.** An adapter may still leave builders with additional wallet, liquidity and operational burdens.

**What changes the recommendation.** A low-friction reference integration used by an independent builder would strengthen the position. Persistently higher integration effort without buyer benefit would weaken it.

**What cannot be concluded.** Technical compatibility alone does not establish adoption.

### Test a minimal assurance receipt

**Action.** Run a paper-based design review with two independent risk or audit owners. Define the smallest useful record of authority, action, settlement and outcome reference, with confidential data held off-chain.

**Relevant owners.** Institutional control owners, an enterprise integrator, a privacy specialist and a Cardano anchoring provider.

**Evidence.** Field evidence supports least privilege, revocation and interpretable receipts. Public standards offer mature signed and federated alternatives, so a ledger must prove incremental value.

**Uncertainty.** Existing signed logs, transparency services or credentials may meet the requirement without a public ledger.

**What changes the recommendation.** Acceptance of the schema and evidence that it improves a dispute, audit or counterparty decision would strengthen it. A complete non-chain substitute would move it to monitor or no-go.

**What cannot be concluded.** A ledger receipt cannot prove the correctness of an AI result or regulatory compliance.

## Areas to monitor or hand off

- **Payment-linked identity and reputation:** monitor as a feature within service assurance and align with W3C, OpenID, GLEIF and related standards.
- **Enterprise mandate enforcement:** monitor where a multi-party workflow needs neutral settlement enforcement beyond existing policy engines and card controls.
- **Privacy-preserving transactions:** hand off to the privacy and Midnight workstream. Privacy is not a native Cardano L1 property.
- **Stablecoin and wallet distribution:** hand off to the payments workstream. Distribution is a prerequisite, not an output of this research.
- **Delivery partner development:** hand off to the relevant partner workstream after a buyer-backed use case exists.

## Areas not to fund under an AI positioning thesis

- a proprietary Cardano agent communication, identity or payment standard;
- a general decentralised compute, model or inference market;
- broad consumer agent checkout without a specific unmet delivery-risk problem;
- generic AI assistants or analytics that do not depend on a blockchain;
- a marketing claim that Cardano makes AI safe, verified or compliant;
- performance claims based on Hydra without a relevant production reference;
- public storage of full prompts, decisions, personal data or confidential business records;
- grants justified by directory listings or transaction totals without buyer and outcome evidence.

## Next decision point

The next Product Committee decision should occur after the three recommended evidence-building engagements report against their minimum thresholds. The committee should then choose among four postures:

- **Go:** independent paid demand, open integration and Cardano-dependent outcomes are demonstrated.
- **Conditional go:** some thresholds pass and remaining gaps have a named owner, short timetable and explicit stop condition.
- **Monitor:** the capability remains credible but buyer demand or delivery access is too weak for implementation funding.
- **No-go:** buyers prefer simpler alternatives, integration remains materially harder or no Cardano-dependent value can be shown.

No product build or broad AI campaign should be approved before that decision.

Licensed under CC BY 4.0. Final evidence cut: 29 October 2026.
