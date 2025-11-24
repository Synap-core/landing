'use client'

import type { Metadata } from 'next'
import { YStack, XStack, H1, H2, H3, Paragraph, Button, Text } from 'tamagui'
import { ArrowLeft, Terminal, Database, Shield, Zap, Code2, GitBranch, Globe } from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'

// Note: metadata export doesn't work in client components, handled in layout
// But we can add it via next/head if needed

export default function DevelopersPage() {
  return (
    <>
      <Navigation />
      <YStack backgroundColor="#050505" minHeight="100vh" padding="$4" paddingTop={100 /* Account for fixed nav */}>
      <YStack maxWidth={1200} marginHorizontal="auto" width="100%" paddingTop="$8">
        
        {/* Navigation */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <XStack alignItems="center" gap="$2" marginBottom="$8" opacity={0.7} hoverStyle={{ opacity: 1 }}>
            <ArrowLeft size={20} color="#fff" />
            <Paragraph color="#fff">Back to Home</Paragraph>
          </XStack>
        </Link>

        {/* Hero */}
        <YStack gap="$6" marginBottom="$12">
          <H1 color="#fff" fontSize={64} fontWeight="800" letterSpacing={-2} lineHeight={72}>
            Stop building <br/>
            <span style={{ color: '#10B981' }}>infrastructure.</span>
          </H1>
          <Paragraph color="rgba(255,255,255,0.7)" fontSize={24} maxWidth={800} lineHeight={36}>
            You spend 80% of your time on auth, databases, and compliance. 
            Synap Core handles the plumbing so you can focus on the features.
          </Paragraph>
        </YStack>

        {/* Pain Points Grid */}
        <YStack gap="$8" marginBottom="$12">
          <H2 color="#fff" fontSize={36} fontWeight="600">The Infrastructure Tax</H2>
          <XStack flexWrap="wrap" gap="$4">
            <FeatureCard 
              icon={<Database size={32} color="#EF4444" />}
              title="No More Database Management"
              description="Users bring their own data pod. You just read/write events via a universal API."
            />
            <FeatureCard 
              icon={<Shield size={32} color="#EF4444" />}
              title="Zero Liability Compliance"
              description="GDPR/CCPA is handled at the pod level. You don't store user data, so you don't carry the risk."
            />
            <FeatureCard 
              icon={<Terminal size={32} color="#EF4444" />}
              title="Universal API"
              description="One standard API for all data types. No more custom backend endpoints for every feature."
            />
          </XStack>
        </YStack>

        {/* Technical Architecture Deep Dive */}
        <YStack gap="$8" marginBottom="$12">
          <H2 color="#fff" fontSize={36} fontWeight="600">How It Works</H2>
          
          {/* Event Sourcing */}
          <YStack padding="$6" backgroundColor="rgba(255,255,255,0.05)" borderRadius="$6" borderWidth={1} borderColor="rgba(255,255,255,0.1)">
            <H3 color="#10B981" marginBottom="$4" fontSize={24}>1. Event-Sourced Architecture</H3>
            <Paragraph color="rgba(255,255,255,0.7)" marginBottom="$4">
              All state changes are captured as immutable events in TimescaleDB. Every action becomes an auditable, replayable event.
            </Paragraph>
            <YStack backgroundColor="#000" padding="$4" borderRadius="$4">
              <Text color="#10B981" style={{ fontFamily: "monospace" }}>const</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}> event = {'{'}</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}>{'  '}type: <Text color="#F59E0B">&apos;task.created&apos;</Text>,</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}>{'  '}data: {'{ title: '}</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}><Text color="#F59E0B">&apos;Call John&apos;</Text>, dueDate: <Text color="#F59E0B">&apos;2025-05-15&apos;</Text> {'}'},</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}>{'  '}userId: <Text color="#F59E0B">&apos;user-123&apos;</Text></Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}>{'}'}</Text>
              <Text color="rgba(255,255,255,0.5)" style={{ fontFamily: "monospace" }} marginTop="$2">
                {'> '}<Text color="#10B981">await</Text> pod.events.append(event) {/* Immutable append-only log */}
              </Text>
            </YStack>
          </YStack>

          {/* Universal API */}
          <YStack padding="$6" backgroundColor="rgba(255,255,255,0.05)" borderRadius="$6" borderWidth={1} borderColor="rgba(255,255,255,0.1)">
            <H3 color="#10B981" marginBottom="$4" fontSize={24}>2. Universal API (tRPC)</H3>
            <Paragraph color="rgba(255,255,255,0.7)" marginBottom="$4">
              Type-safe, auto-generated APIs for all data operations. No more REST boilerplate.
            </Paragraph>
            <YStack backgroundColor="#000" padding="$4" borderRadius="$4">
              <Text color="#10B981" style={{ fontFamily: "monospace" }}>const</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}> tasks = <Text color="#10B981">await</Text> client.tasks.list.query({'({'}</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}>{'  '}filters: {'{ status: '}<Text color="#F59E0B">&apos;pending&apos;</Text> {'}'},</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}>{'  '}limit: <Text color="#F59E0B">10</Text></Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}>{'}) '}
                {/* Type-safe, auto-generated */}
              </Text>
            </YStack>
          </YStack>

          {/* Hub Protocol */}
          <YStack padding="$6" backgroundColor="rgba(255,255,255,0.05)" borderRadius="$6" borderWidth={1} borderColor="rgba(255,255,255,0.1)">
            <H3 color="#10B981" marginBottom="$4" fontSize={24}>3. Hub Protocol (AI Integration)</H3>
            <Paragraph color="rgba(255,255,255,0.7)" marginBottom="$4">
              Secure AI-to-pod communication with scoped access tokens and audit trails.
            </Paragraph>
            <YStack backgroundColor="#000" padding="$4" borderRadius="$4">
              <Text color="#10B981" style={{ fontFamily: "monospace" }}>const</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}> token = <Text color="#10B981">await</Text> pod.hub.generateAccessToken({'({'}</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}>{'  '}scope: [<Text color="#F59E0B">&apos;notes&apos;</Text>, <Text color="#F59E0B">&apos;tasks&apos;</Text>, <Text color="#F59E0B">&apos;calendar&apos;</Text>],</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}>{'  '}expiresIn: <Text color="#F59E0B">300</Text> {/* 5 minutes */}</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}>{'})'}  </Text>
            </YStack>
          </YStack>
        </YStack>

        {/* Deployment */}
        <YStack gap="$8" marginBottom="$12">
          <H2 color="#fff" fontSize={36} fontWeight="600">Deploy in 5 Minutes</H2>
          <YStack backgroundColor="rgba(255,255,255,0.05)" padding="$8" borderRadius="$6" borderWidth={1} borderColor="rgba(255,255,255,0.1)">
            <YStack backgroundColor="#000" padding="$4" borderRadius="$4">
              <Text color="#10B981" style={{ fontFamily: "monospace" }}># 1. Start the pod (PostgreSQL + MinIO + Redis)</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}>$ docker compose up -d</Text>
              <Text color="rgba(255,255,255,0.5)" style={{ fontFamily: "monospace" }} marginTop="$2">Initializing Event Store...</Text>
              <Text color="rgba(255,255,255,0.5)" style={{ fontFamily: "monospace" }}> Starting Universal API...</Text>
              <Text color="rgba(255,255,255,0.5)" style={{ fontFamily: "monospace" }}><Text color="#10B981">✓</Text> Ready on localhost:3000</Text>
              
              <Text color="#10B981" style={{ fontFamily: "monospace" }} marginTop="$4"># 2. Run migrations</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}>$ cd packages/database && pnpm db:migrate</Text>
              
              <Text color="#10B981" style={{ fontFamily: "monospace" }} marginTop="$4"># 3. Start API server</Text>
              <Text color="rgba(255,255,255,0.9)" style={{ fontFamily: "monospace" }}>$ pnpm dev</Text>
              <Text color="rgba(255,255,255,0.5)" style={{ fontFamily: "monospace" }} marginTop="$2"> Your personal data pod is live ✓</Text>
            </YStack>
          </YStack>
        </YStack>

        {/* Capabilities */}
        <YStack gap="$8" marginBottom="$12">
          <H2 color="#fff" fontSize={36} fontWeight="600">What You Get Out-of-the-Box</H2>
          <XStack flexWrap="wrap" gap="$4">
            <CapabilityCard 
              icon={<Code2 size={24} color="#10B981" />}
              title="Event Sourcing"
              items={[
                'TimescaleDB hypertable for immutable events',
                'Row-Level Security for multi-user isolation',
                'Optimistic concurrency with versioning'
              ]}
            />
            <CapabilityCard 
              icon={<Zap size={24} color="#10B981" />}
              title="Vector Search"
              items={[
                'pgvector for semantic search',
                'Embeddings via OpenAI or deterministic fallback',
                'Hybrid search: keyword + semantic'
              ]}
            />
            <CapabilityCard 
              icon={<GitBranch size={24} color="#10B981" />}
              title="AI Integration"
              items={[
                'LangGraph state machines for multi-step reasoning',
                'Hub Protocol for secure AI↔Pod communication',
                'Vercel AI SDK for LLM calls (provider-agnostic)'
              ]}
            />
            <CapabilityCard 
              icon={<Globe size={24} color="#10B981" />}
              title="Storage Abstraction"
              items={[
                'Cloudflare R2 (production) or MinIO (dev)',
                'Hybrid storage: metadata in PostgreSQL, content in R2',
                'Signed URLs for secure content access'
              ]}
            />
          </XStack>
        </YStack>

        {/* Business Model Comparison */}
        <YStack gap="$8" marginBottom="$12">
          <H2 color="#fff" fontSize={36} fontWeight="600">The Business Case</H2>
          <YStack backgroundColor="rgba(255,255,255,0.05)" padding="$8" borderRadius="$6" borderWidth={1} borderColor="rgba(255,255,255,0.1)">
            <XStack gap="$12" $sm={{ flexDirection: 'column' }}>
              <YStack flex={1} gap="$3">
                <Text color="#EF4444" fontSize={18} fontWeight="600">Traditional SaaS</Text>
                <Text color="rgba(255,255,255,0.7)">• $500/month AWS costs</Text>
                <Text color="rgba(255,255,255,0.7)">• GDPR compliance team needed</Text>
                <Text color="rgba(255,255,255,0.7)">• Data breach liability risk</Text>
                <Text color="rgba(255,255,255,0.7)">• Vendor lock-in reputation</Text>
              </YStack>
              <YStack width={1} backgroundColor="rgba(255,255,255,0.2)" $sm={{ width: '100%', height: 1 }} />
              <YStack flex={1} gap="$3">
                <Text color="#10B981" fontSize={18} fontWeight="600">Sovereign Stack</Text>
                <Text color="rgba(255,255,255,0.7)">• $0 infrastructure (users self-host)</Text>
                <Text color="rgba(255,255,255,0.7)">• $0 compliance (user&apos;s responsibility)</Text>
                <Text color="rgba(255,255,255,0.7)">• $0 data breach risk</Text>
                <Text color="rgba(255,255,255,0.7)">• Trust-first positioning</Text>
              </YStack>
            </XStack>
          </YStack>
        </YStack>

        {/* CTAs */}
        <YStack gap="$6" marginBottom="$12" alignItems="center">
          <H2 color="#fff" fontSize={36} fontWeight="600" textAlign="center">Ready to Build?</H2>
          <XStack gap="$4" flexWrap="wrap" justifyContent="center">
            <Button variant="primary" size="$5" borderRadius="$10" href="https://github.com/synap/core" tag="a" target="_blank"
            style={{
              textDecoration: 'none',
            }}>
              View on GitHub
            </Button>
            <Button variant="outline" size="$5" borderRadius="$10" borderColor="rgba(255,255,255,0.2)" href="https://discord.gg/synap" tag="a" target="_blank"
            style={{
              textDecoration: 'none',
            }}>
              Join Discord
            </Button>
          </XStack>
        </YStack>

      </YStack>
    </YStack>
    <Footer />
  </>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <YStack 
      width={350} 
      padding="$6" 
      backgroundColor="rgba(255,255,255,0.03)" 
      borderRadius="$6" 
      borderWidth={1} 
      borderColor="rgba(255,255,255,0.1)"
    >
      <YStack marginBottom="$4">{icon}</YStack>
      <H2 fontSize={20} color="#fff" marginBottom="$2">{title}</H2>
      <Paragraph color="rgba(255,255,255,0.6)">{description}</Paragraph>
    </YStack>
  )
}

function CapabilityCard({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) {
  return (
    <YStack 
      width={280}
      padding="$6" 
      backgroundColor="rgba(255,255,255,0.03)" 
      borderRadius="$6" 
      borderWidth={1} 
      borderColor="rgba(255,255,255,0.1)"
      gap="$3"
    >
      <XStack gap="$3" alignItems="center">
        {icon}
        <H3 fontSize={18} color="#fff">{title}</H3>
      </XStack>
      <YStack gap="$2">
        {items.map((item, i) => (
          <Text key={i} color="rgba(255,255,255,0.6)" fontSize={14}>• {item}</Text>
        ))}
      </YStack>
    </YStack>
  )
}
