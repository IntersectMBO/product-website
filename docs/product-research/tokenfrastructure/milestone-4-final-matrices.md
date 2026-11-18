---
title: "Milestone 4 Final Matrices"
sidebar_label: "Final Matrices"
sidebar_position: 28
---

![IEI logo](./assets/iei-logo.png)

# Final matrices

[Download the editable twelve-tab research workbook](pathname:///files/tokenfrastructure/CPC-26-0016_Milestone_4_Final_Matrices.xlsx).

## Use-case prioritisation

Weights: demand 20 per cent; chain need 15 per cent; Cardano fit 20 per cent; evidence 15 per cent; buyer access 10 per cent; differentiation 10 per cent; feasibility 10 per cent. Scores use a 1 to 5 scale.

| ID | Use case | Demand | Chain need | Cardano fit | Evidence | Buyer access | Differentiation | Feasibility | Score | Final posture |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| U01 | Escrowed agent-service purchase | 4 | 4 | 4 | 3 | 3 | 4 | 3 | 3.65 | Priority conditional go |
| U02 | Pay-per-call API and data access with conditional protection | 5 | 4 | 3 | 3 | 3 | 3 | 3 | 3.55 | Priority validation |
| U04 | Tamper-evident agent action and payment receipts | 4 | 3 | 4 | 3 | 3 | 3 | 4 | 3.50 | Conditional test |
| U05 | AI-agent marketplace on Masumi and Sokosumi | 3 | 4 | 4 | 3 | 2 | 3 | 3 | 3.25 | Conditional test |
| U03 | Payment-linked agent identity and reputation | 4 | 4 | 3 | 2 | 3 | 3 | 3 | 3.20 | Conditional test |
| U06 | Enterprise mandate enforcement for autonomous spend | 4 | 3 | 3 | 2 | 2 | 3 | 2 | 2.85 | Monitor and test |
| U07 | Content and data provenance | 4 | 2 | 3 | 2 | 3 | 2 | 3 | 2.80 | Monitor |
| U09 | AI-enabled DeFi automation | 3 | 3 | 2 | 2 | 2 | 2 | 2 | 2.35 | Monitor |
| U08 | Privacy-preserving AI transactions | 4 | 3 | 2 | 1 | 2 | 2 | 1 | 2.30 | Adjacent handoff |
| U10 | Decentralised compute marketplace | 5 | 4 | 1 | 1 | 1 | 1 | 1 | 2.25 | No-go |
| U12 | Generic AI analytics or assistant applications | 4 | 1 | 1 | 2 | 2 | 1 | 4 | 2.15 | Exclude from vertical proof |
| U11 | Decentralised model or inference market | 4 | 4 | 1 | 1 | 1 | 1 | 1 | 2.05 | No-go |

## Priority use-case decision records

### U01 Escrowed agent-service purchase

| Requirement | Final assessment |
|---|---|
| Buyer or adopter segment | AI API providers, agent platforms, B2B service marketplaces and buyers of machine-delivered work |
| Problem | The buyer needs protection against non-delivery, unacceptable delivery or a later dispute, while the provider needs payment certainty |
| Required capability | Conditional fund lock, completion signal, refund path, interpretable evidence and dispute process |
| Cardano relevance | Masumi provides live escrow, refunds and service records on Cardano; deterministic scripts can enforce a bounded settlement state |
| Competitor or alternative | Conventional marketplace escrow, private contracts, ERC-8183, card or bank payment with platform dispute handling |
| Evidence basis | S25, S28-S31, S44-S45, S50, S53-S60, S68-S77 and FE02-FE04 |
| Delivery route | Masumi or Sokosumi, two independent service providers, wallet or facilitator, stablecoin route and external buyer channel |
| Revenue or Cardano-side value path | Service fee or marketplace fee; settlement and refund transactions; stablecoin activity; independent developer integration |
| Adoption signal | Paid external buyers, repeat use, completion, refund and dispute outcomes and buyer preference over simpler alternatives |
| Confidence | Medium-high for technical fit; medium-low for commercial adoption |
| Recommended action | Define a paid workflow and acceptance test with two providers and at least three external buyers before implementation funding |

### U02 Pay-per-call API and data access with conditional protection

| Requirement | Final assessment |
|---|---|
| Buyer or adopter segment | AI builders, data providers, API operators and autonomous-service platforms |
| Problem | Accountless or automated payment is useful, but the buyer may need protection when delivery is delayed, incomplete or non-verifiable |
| Required capability | Payment initiation, conditional release or refund, usage receipt, wallet support and low-friction integration |
| Cardano relevance | Cardano can supply a conditional-settlement option after payment initiation when service risk justifies it |
| Competitor or alternative | x402 on Base or Solana, MPP and Tempo, Stripe machine payments, prepaid credits and subscriptions |
| Evidence basis | S05-S11, S40-S45, S52, S71-S72, S78 and FE02-FE03 |
| Delivery route | Open protocol adapter, facilitator, wallet and stablecoin route with a provider whose service has measurable failure or refund risk |
| Revenue or Cardano-side value path | Pay-per-use service revenue, settlement transactions and facilitator or marketplace fees |
| Adoption signal | Buyer chooses conditional settlement over plain payment and the added control improves conversion, loss or dispute outcomes |
| Confidence | Medium |
| Recommended action | Validate one buyer decision and measure the added integration burden before further funding |

### U04 Minimal agent-action and payment receipts

| Requirement | Final assessment |
|---|---|
| Buyer or adopter segment | Institutional risk, audit and compliance owners; cross-organisation service networks |
| Problem | Parties need a shared record of approved authority, action, payment and outcome reference without exposing confidential content |
| Required capability | Minimal signed or anchored receipt, ordering, revocation reference, selective disclosure and a defined interpretation process |
| Cardano relevance | A Cardano transaction can provide neutral integrity and ordering for a bounded receipt across organisations |
| Competitor or alternative | Signed private logs, transparency services, C2PA, W3C credentials, OpenID, platform audit trails and conventional notary services |
| Evidence basis | S16-S24, S33-S37, S51, S72 and FE01, FE06 |
| Delivery route | Enterprise integrator, two control owners, privacy specialist and Cardano anchoring provider |
| Revenue or Cardano-side value path | Assurance or integration fees and anchoring transactions where an external control owner values the shared record |
| Adoption signal | Control owners accept the schema and use it in a real audit, counterparty or dispute decision |
| Confidence | Medium |
| Recommended action | Run a paper-based design review and compare the result with signed private logs before implementation |

## Adoption pathways

| Pathway | Target | Buyer value | Required partners | Minimum proof | Next action | Stop condition |
|---|---|---|---|---|---|---|
| Escrowed agent services | AI API providers, agent platforms and B2B service marketplaces | Reduce non-delivery and counterparty risk for machine-delivered work | Masumi or Sokosumi; wallet or facilitator; stablecoin route; independent buyer channel | Paid external buyers, repeat use, completion, refund and dispute outcomes and integration effort | Define one narrow service workflow and buyer acceptance test | Buyers prefer plain payment or conventional marketplace escrow and will not pay or switch for conditional settlement |
| Payment-linked identity and reputation | Open agent marketplaces and cross-platform service networks | Connect accountable principal, delegated authority, service history and payment state | Credential specialist; Masumi; authorization provider; independent validator | Revocation, Sybil resistance, privacy and measurable effect on counterparty choice | Map minimum claims to W3C, OpenID and GLEIF standards | Federated credentials meet the need at lower cost or reputation does not change decisions |
| High-assurance agent receipts | Regulated B2B networks and audit or risk owners | Provide neutral integrity and ordering for approved authority, action, payment and outcome references | Enterprise integrator; risk owner; privacy specialist; anchoring provider | Accepted minimal schema, privacy design, dispute value and operational ownership | Run a design review with two independent control owners | Signed private logs or transparency services satisfy all material requirements |
| Open-standard distribution | Non-Cardano builders, service providers and payment platforms | Reach Cardano settlement through existing agent stacks | x402 or MPP facilitator; agent tooling; wallet and stablecoin providers; Masumi | Compatibility, conformance, integration time and independent-builder use | Publish an interoperability matrix and reference requirements | Cardano integration remains materially harder without buyer benefit |
| Privacy-adjacent settlement | Confidential or regulated workflows | Combine selective disclosure with settlement or minimal anchoring | Midnight or privacy provider; buyer; interoperability specialist | End-to-end data flow, performance, governance and buyer acceptance | Hand architecture questions to the privacy workstream | Interoperability is impractical or public verifiability is unnecessary |

## Audience credibility

| Audience | Credible claim | Required proof | Main objection or disqualifier | Claim to avoid | Priority |
|---|---|---|---|---|---|
| Institutional risk, audit and compliance | Cardano can anchor a minimal record of approved authority, settlement state and service receipt across organisations | Mapped control objective, privacy assessment, accountable operator and accepted schema | A signed private log provides equal evidence with lower operational burden | Cardano proves agent intent, result correctness or compliance | High |
| AI-agent builders and platforms | Masumi can add escrow, refunds and persistent receipts without replacing the agent framework | Documented SDK path, integration time, recovery and production settlement assets | Additional wallet, liquidity and support burden outweighs the benefit | Builders must adopt a Cardano-native agent stack | High |
| Payments and commerce infrastructure | Cardano can complement payment initiation when delivery risk requires conditional release and evidence | Facilitator and wallet support, reconciliation, refunds and buyer demand | Existing PSP or marketplace dispute handling is sufficient | Cardano leads machine-payment distribution | High |
| AI API and service providers | Conditional payment may reduce non-payment and non-delivery risk for higher-value services | Paid conversion, repeat use, failure and refund rates and unit economics | Low-value calls do not justify escrow complexity | Every API call benefits from escrow or on-chain logging | High |
| Standards, identity and security communities | Cardano can serve as one interoperable settlement and evidence anchor under open standards | Standards mapping, revocation, privacy, conformance and neutral governance participation | A proprietary implementation fragments existing standards | Cardano should define a universal agent identity or authorization standard | High |
| Cardano ecosystem and governance | A focused assurance position has a live product base and may create Cardano activity if external demand is proven | External paying buyers, repeat transactions, production integrations and activity definitions | Current metrics remain concentrated, internal or provider-reported | Listings or transactions already prove a strategic AI vertical | High |
| Public sector and regulated institutions | A minimal shared receipt may support cross-organisation accountability | Legal basis, minimisation, selective disclosure, accessibility and records approval | Public-chain data creates privacy or procurement risk | Publishing full AI logs improves compliance | Medium |
| Merchants and consumer platforms | Cardano may help in narrow digital-service cases where existing rails do not manage delivery risk | Conversion or cost advantage with stable refund and support outcomes | Existing merchant and card systems already handle the problem | Mainstream agent checkout needs a public blockchain | Low |

## Use-case-specific competitive benchmark

| Use case | Buyer requirement | Cardano position | Relevant alternatives | Evidence of advantage | Evidence of weakness | Switching condition | Confidence | Strategic implication |
|---|---|---|---|---|---|---|---|---|
| Escrowed machine-delivered service | Conditional release, refund and service evidence | Conditional advantage through Masumi | Conventional marketplace escrow, private contracts, ERC-8183 | Live integrated registry, escrow, refund and receipt flow | Independent paid demand and outcome quality remain unproven | Buyer values neutral settlement or evidence enough to accept added integration | Medium-high for capability; medium-low for adoption | Test one paid workflow before funding implementation |
| Conditional API or data payment | Automated payment with protection when delivery risk matters | Complement to open payment initiation | x402, MPP, Stripe, subscriptions and prepaid credits | Cardano can add a bounded settlement state after initiation | Leading alternatives have stronger distribution and simpler developer access | Conditional protection improves conversion, loss or dispute outcomes | Medium | Interoperate; do not compete on payment transport alone |
| Minimal assurance receipt | Shared integrity and ordering across organisations with confidential content off-chain | Conditional advantage | Signed logs, transparency services, C2PA, credentials and notaries | Neutral ledger and deterministic settlement record | Ledger cannot prove off-chain truth and may create privacy or operating burden | Control owners accept the schema and non-chain alternatives fail a material requirement | Medium | Validate evidentiary value before implementation |
| Payment-linked identity and reputation | Accountable principal, revocation and portable history | Competitive feature, not a unique category | W3C VC, OpenID, GLEIF, KERI, ERC-8004 and platform identity | Can connect service history and settlement state | Mature standards and competing registries have broader distribution | Portable history changes a counterparty decision | Medium-low | Keep as an integrated feature |
| Enterprise autonomous-spend mandate | Task-level limits, approval and liability | Monitor or complement | AuthZEN, AP2, card controls, wallet policy engines and private authorization | On-chain rules can enforce a narrow settlement boundary | Policy and identity decisions usually remain off-chain | A multi-party workflow needs neutral enforcement that existing controls cannot supply | Medium-low | Do not position as a general enterprise policy system |

## Current Cardano activity evidence

| Case | Observable evidence | Cardano dependency | Commercial signal | Final assessment | Confidence | Required validation |
|---|---|---|---|---|---|---|
| Masumi | Live registry, escrow, refunds and on-chain activity; 1,852 transactions in Cardano's 21 October snapshot; provider claims more than 40,000 cumulative transactions | Direct for current settlement implementation | Activity visible, but unique external buyers, paid conversion and outcomes not public | Strongest capability proof; adoption provisional | High for capability; medium-low for adoption | Separate paid buyers, repeat use, completions, refunds, disputes and accepted outcomes |
| Sokosumi | Operating service marketplace; Serviceplan page displayed 4,229 tasks on 29 October | Uses Masumi services and Cardano settlement in the product stack | Priced services and task activity visible; buyer composition and paid conversion unclear | Strong market-facing proof point; adoption provisional | Medium | Independent buyer confirmation and consistent task definitions |
| Cardano x402 scheme | Emerging implementation and standards pathway | Direct if Cardano settlement executes the payment | Distribution and independent usage not established | Useful interoperability path, not adoption proof | Medium-low | Independent builder, facilitator, wallet and stablecoin use |
| Iagon | Storage and compute activity exists on Cardano | Direct for parts of the product | AI-specific demand and buyer reason are weakly evidenced | Adjacent infrastructure, not a proven AI vertical | Medium-low | AI buyer requirement and Cardano-dependent outcome |
| SingularityNET | Longstanding Cardano association and AI-market narrative | Current operational dependency is unclear | No source in the final cut establishes current Cardano-side AI adoption | Historical or adjacent evidence only | Low-medium | Current production flow and Cardano transaction path |
| NuNet | Compute orchestration product and prior Cardano relationship | Dependency varies by deployment | Specialised compute competition is strong | No-go as a Cardano positioning lead | Medium | Cardano-specific buyer or compliance requirement |
| Rejuve.AI | Public roadmap and product claims | Current chain dependency unclear | Adoption and revenue signals not independently verified | Weak evidence for Cardano positioning | Low-medium | Current users, paid activity and settlement path |
| Veridian | Verifiable identity capability from a Cardano-origin team | Cardano L1 dependency not established | Relevant capability; buyer conversion not evidenced | Partner or feature domain | Medium | Standards mapping, revocation and effect on buyer decisions |
| Midnight | Privacy-focused adjacent network and documentation | Separate network and interoperability path | Potential fit for confidential workflows; buyer path unproven | Cross-RFP handoff | High for adjacency; low for adoption | End-to-end architecture and buyer acceptance |
| Hydra | Scaling capability and public implementation | Cardano scaling layer | No relevant production AI-agent reference in the evidence cut | Do not use as an AI positioning proof | High | Measured workload requiring Hydra and production reference |
| UVerify and notary apps | Tamper-evident anchoring and observable notary activity | Direct for anchored records | Demand is not AI-specific | Technical analogue for receipts, not AI adoption proof | Medium | AI-specific control owner and evidentiary use |
| Bending AI and Hizz | Application or directory presence | Dependency and measurable activity unclear | Weak public adoption evidence | Do not use as proof of the vertical | Low | Source-dated usage, buyers and Cardano dependency |

## Narrative stress tests

| Positioning claim | Target audience | Required proof | Credibility response | Main objection | Evidence gap | Recommendation |
|---|---|---|---|---|---|---|
| Cardano can provide assured settlement for machine-delivered services | Buyers, service providers and Cardano governance | Paid workflow, conditional release, refund and outcome evidence | Medium-high | Conventional marketplace escrow may be simpler | Independent buyer willingness to pay | Lead claim for a bounded validation engagement |
| Cardano can provide an interoperable receipt and conditional-settlement layer for open agent services | Builders, payments and assurance audiences | Open integration, minimal receipt schema and accepted dispute use | Medium-high | Distribution and operational burden may outweigh the benefit | Independent integration and control-owner acceptance | Use with explicit conditions |
| Cardano's formal methods make AI safe or verified | General public and institutional audiences | End-to-end proof of model behaviour, intent and business truth | Low | Formal methods apply only to specified artifacts and properties | The required end-to-end proof is unavailable | Retire |
| Cardano is the chain for AI or leads machine payments | Ecosystem and market audiences | Buyer share, distribution, production volume and switching evidence | Low | Leading payment and AI networks have stronger reach and specialised focus | No evidence of leadership | Retire |

## Decision gates

| Gate | Final answer | Confidence | Decision | Main limitation |
|---|---|---|---|---|
| G1 AI commercial opportunity | Real but selective where open services need neutral settlement, conditional release or shared evidence | High | Proceed only on narrow cross-organisation workflows | Many closed and consumer workflows have stronger non-chain alternatives |
| G2 Buyer-relevant technical fit | Predictable execution and programmable escrow can support bounded settlement controls; minimal receipts may support accountability | Medium-high | Tie each technical claim to a buyer outcome and named artifact | Technical properties do not prove AI output or intent |
| G3 Current activity evidence | Masumi and Sokosumi are the clearest live beachhead; activity does not yet prove broad paid adoption | High for capability; medium-low for adoption | Use precise activity language and require transaction-quality evidence | Metrics are dynamic and provider or platform reported |
| G4 Use-case priorities | Escrowed services, conditional API payments and minimal receipts rank highest | Medium-high | Prioritise these three; keep identity integrated | Buyer willingness to pay remains unproven |
| G5 Reachable buyers | Service providers, AI platforms, payments infrastructure, integrators and selected control owners are reachable | Medium | Convert access into written buyer validation | Institutional buyer breadth is limited |
| G6 Competitive position | Cardano can compete only through a focused assurance wedge | High | Partner with open standards and avoid head-on infrastructure categories | Cardano trails on distribution |
| G7 Adoption vertical conditions | Independent paying buyers, repeat use, multiple providers, compatible integrations and Cardano-dependent outcomes | High | Use these as funding triggers | No current evidence passes all conditions |
| G8 Audience credibility | Assured services and escrowed machine-delivered work are credible; broad trusted-AI and AI-chain claims are not | High | Publish precise language and retire broad claims | Audience proof requirements differ materially |
| G9 Partner pathway | Requires service operator, wallet or facilitator, stablecoin access, buyer channel and authorization or identity interoperability | Medium-high | Require ownership and incentives before a pilot | Several partners remain unconfirmed |
| G10 Cardano-side value | Potential transaction, stablecoin and developer activity and a higher-assurance reference | Medium-low | Measure incremental Cardano-dependent value | Application use may accrue off-chain or to vendors |
| G11 Strategic posture | Conditional go for the narrow assurance and settlement wedge; no-go for compute, models and generic AI positioning | Medium-high | Advance only through three evidence-gated engagements | Recommendation depends on future buyer and integration evidence |
| G12 Cross-RFP handoffs | Route privacy, payments, identity, interoperability, delivery and broader segmentation questions to adjacent work | High | Use the cross-RFP handoff memo | Adjacent work must not be used to expand the AI scope |

## Limitations

| ID | Limitation | Effect | Treatment |
|---|---|---|---|
| L01 | The 33 field records form a purposive professional sample | The study cannot estimate population prevalence | Use qualitative convergence and avoid buyer-percentage claims |
| L02 | Field interactions include structured calls and focused professional discussions | Exact quotation and organisation-level attribution are limited | Use anonymised synthesis and retain controlled records |
| L03 | Five field records sit in the institutional buyer segment | Institutional demand has less breadth than builder and protocol evidence | Make buyer conversion a funding gate |
| L04 | Product and activity metrics are dynamic and often provider-reported | Counts may include tests, retries, internal activity or concentrated users | Date each metric and do not equate it with revenue or adoption |
| L05 | Masumi and Sokosumi do not publicly separate transaction quality | Commercial adoption remains provisional | Require paid, external, repeat and outcome data |
| L06 | Standards and products continue to change | Competitive positions may shift | Version the evidence cut and refresh before a later funding decision |
| L07 | A public ledger proves integrity, ordering and settlement state, not off-chain truth | Auditability can be overstated | Use minimal receipts and define evaluation and dispute processes |
| L08 | Formal methods apply to specified artifacts and properties | Platform-level assurance can be overstated | Name the verified artifact, property and boundary |
| L09 | Several assets are Cardano-adjacent rather than Cardano-dependent | Ecosystem association can be mistaken for Cardano value | Trace the actual settlement and data path |
| L10 | No optional deep technical audit was performed | Implementation and security claims rely on public and field evidence | Keep deployment verification outside the completion claim |
| L11 | No paid market database or six-month monitoring programme was used | Market sizing and retention estimates remain limited | Use observable decision gates rather than manufactured forecasts |
| L12 | AI tools assisted with research organisation and drafting | Automated synthesis could propagate errors | Human researchers selected sources, assessed credibility and approved the text |

Licensed under CC BY 4.0. Final evidence cut: 29 October 2026.
