---
title: "Milestone 4 Cross RFP Handoff Memo"
sidebar_label: "Cross RFP Handoff"
sidebar_position: 25
---

![IEI logo](./assets/iei-logo.png)

# Cross RFP handoff memo

## Purpose

This memo routes findings that affect adjacent Product Research Initiative workstreams. It does not expand RFP 09 into a stablecoin strategy, privacy architecture, enterprise-readiness assessment, delivery-partner programme, interoperability roadmap or general Cardano brand study.

## Handoff summary

| Adjacent workstream | Finding from RFP 09 | Why it belongs there | Requested next question | Boundary retained by RFP 09 |
|---|---|---|---|---|
| Stablecoins and payments | Distribution depends on usable settlement assets, wallets, facilitators, reconciliation and refund handling | RFP 09 tested the AI use case, not liquidity design or payment-market incentives | Which stablecoin, wallet and facilitator routes can support low-friction conditional agent payments on Cardano? | No stablecoin incentive, market-maker or venue strategy |
| Privacy and Midnight | Public-chain receipts must remain minimal; regulated workflows may require selective disclosure or confidential execution | Privacy architecture and Midnight interoperability require separate technical and buyer validation | Can Midnight or another privacy layer support confidential evidence and settlement while preserving operational usability? | No claim that privacy is a Cardano L1 property and no full privacy design |
| Identity and authorization | Buyers need an accountable principal, bounded authority and revocation; a wallet address alone is insufficient | Identity governance, credential assurance and policy integration span broader work than AI positioning | Which W3C, OpenID, GLEIF, AP2, AuthZEN or related standards should Cardano implementations support? | No proprietary universal agent identity or reputation standard |
| L2 and interoperability | Open-standard access matters more than a Cardano-specific agent stack; scaling claims require a relevant production need | Cross-chain, L2 and protocol integration decisions need technical requirements outside this study | What adapters, conformance tests and settlement interfaces make Cardano reachable from existing agent and payment stacks? | No bridge strategy, full L2 demand study or Hydra roadmap |
| Enterprise and RWA | Institutional buyers require privacy, authorization, liability, reconciliation and accountable operators | Full enterprise readiness, procurement, compliance and service-level requirements extend beyond RFP 09 | Which enterprise workflows need neutral conditional settlement rather than existing policy and payment controls? | No enterprise production-readiness certification or RWA strategy |
| Delivery partners | A credible pathway requires a service operator, wallet or facilitator, stablecoin route, buyer channel and assurance owner | Partner qualification, incentives and network development require a dedicated delivery programme | Which organisations can own integration, buyer recruitment, operations, disputes and measurement? | No partner certification model or network design |
| Brand and communications | Credible claims are narrow and evidence-bound; broad AI-chain claims create risk | A general Cardano brand study covers audiences and perception beyond AI | How should approved evidence be expressed within Cardano's broader positioning without overstating adoption? | No campaign, media plan, brand redesign or awareness study |
| Customer segmentation and use cases | The strongest reachable segments are agent-service providers, AI platforms, payments infrastructure, integrators and selected risk or audit owners | Wider segmentation and use-case portfolio choices exceed the AI-specific brief | Which segment has a funded problem, reachable buying process and delivery owner for the first validation engagement? | No general Cardano customer-segmentation study |

## Stablecoins and payments

RFP 09 found that conditional settlement has little value if users cannot reach it through familiar wallets, facilitators and settlement assets. Leading machine-payment approaches benefit from stablecoin liquidity and broad developer access. The AI study cannot determine which asset, venue or incentive model Cardano should use.

The payments workstream should test operational availability, reconciliation, refunds, cross-border restrictions and settlement-asset acceptance. A useful output would identify a practical route for one buyer-backed machine service and compare its integration burden with x402, MPP, Stripe or conventional subscription billing.

## Privacy and Midnight

The research supports data minimisation. A public record can establish integrity, ordering and settlement state. It should not contain full prompts, personal data, confidential decisions or proprietary outputs. Midnight or another privacy layer may support selective disclosure, but ecosystem adjacency does not establish Cardano L1 value.

The privacy workstream should map the end-to-end data flow, disclosure policy, key management, performance, governance and settlement boundary. It should also test whether buyers need public verifiability or whether signed private logs satisfy the requirement.

## Identity and authorization

Field evidence converged on accountable principals, delegated authority, least privilege and revocation. Open standards already cover important parts of identity, credentials and authorization. Cardano can enforce a bounded settlement rule or anchor a minimal receipt, but should not attempt to define the whole agent identity or authorization stack.

The adjacent work should identify the minimum claims required for an agent-service transaction, the responsible issuer and verifier, revocation handling and privacy treatment. It should measure whether the identity information changes a counterparty or risk decision.

## L2 and interoperability

Cardano's distribution weakness will not be solved by a new proprietary standard. The relevant technical question is whether Cardano settlement can appear as one implementation choice inside existing agent, payment and authorization flows.

The interoperability workstream should produce a standards map, reference interface and conformance tests. It should measure integration time, failure recovery, wallet support and stablecoin access with at least one independent non-Cardano builder. Hydra should enter the design only when a measured workload requires it.

## Enterprise and RWA

Institutional control owners require clear authority, privacy, liability, reconciliation, operator responsibility and evidence that can be interpreted during a dispute. A blockchain receipt does not resolve those requirements by itself.

The enterprise workstream should identify one cross-organisation process where no party should control the settlement or evidence record. It should compare the Cardano approach with policy engines, card controls, signed databases and conventional escrow. The output should name the accountable operator and legal or procurement blockers.

## Delivery partners

The first validation engagement needs more than a protocol provider. It needs access to external buyers, a service operator, payment and wallet support, a dispute or assurance process and an independent evaluator. RFP 09 identifies these roles but does not select or certify partners.

The delivery-partner workstream should assess role clarity, commercial incentives, operating support, data access and the ability to recruit external buyers. A partner network should not be built before a buyer-backed use case is selected.

## Brand and communications

The evidence supports precise claims about conditional settlement, escrow, refunds and minimal receipts. It does not support claims that Cardano makes AI safe, leads agent payments or has proven a broad AI adoption vertical.

The brand workstream should use only claims tied to a specific artifact and outcome. It should preserve the conditions and limitations and avoid turning Masumi or Sokosumi into proof of ecosystem-wide adoption.

## Handoff priority

1. **Payments and interoperability:** required before any buyer-backed validation can run.
2. **Identity, authorization and privacy:** required to define an acceptable assurance design.
3. **Delivery partners and enterprise readiness:** required after a use case and buyer channel are selected.
4. **Brand and broader segmentation:** useful only after the evidence thresholds produce a position that can be stated without qualification drift.

These handoffs should retain the RFP 09 stop conditions. If independent buyers do not value the Cardano-dependent control, adjacent work should not be used to keep the AI thesis alive.

Licensed under CC BY 4.0. Final evidence cut: 29 October 2026.
