# Architecture Animation Specification

**Interactive Data Flow & Architecture Visualization for Synap Documentation Landing Page**

---

## 📋 Executive Summary

This document specifies the requirements, design, and implementation approach for an interactive, animated visualization of the Synap backend architecture and data flow. The animation will be featured on the documentation landing page to help users understand the system at a glance.

**Goal**: Create an engaging, educational, and beautiful visualization that demonstrates:
- The event-driven architecture flow
- Data sovereignty (Data Pod as central hub)
- Hub & Spoke model with external services
- Plugin ecosystem (internal and external)
- Real-time capabilities

---

## 🎯 Objectives

1. **Educational**: Help users understand the architecture quickly
2. **Engaging**: Make the landing page visually appealing
3. **Interactive**: Allow users to explore different flows
4. **Responsive**: Work beautifully on desktop and mobile
5. **Performant**: Smooth animations, no jank
6. **Accessible**: Keyboard navigation, screen reader support

---

## 🔍 Technology Research & Recommendations

### Option 1: Framer Motion (⭐ Recommended)

**Pros**:
- ✅ Native React integration (perfect for Docusaurus)
- ✅ Excellent performance with hardware acceleration
- ✅ Declarative API, easy to maintain
- ✅ Built-in gesture support (hover, tap, drag)
- ✅ Responsive and accessible
- ✅ Small bundle size (~50KB gzipped)
- ✅ Great TypeScript support
- ✅ Active community and documentation

**Cons**:
- ⚠️ 2D only (but sufficient for our needs)
- ⚠️ Learning curve for complex animations

**Best For**: Smooth, performant 2D animations with React

### Option 2: React Three Fiber

**Pros**:
- ✅ 3D visualizations (impressive)
- ✅ WebGL performance
- ✅ Very flexible

**Cons**:
- ❌ Larger bundle size (~200KB+)
- ❌ More complex to implement
- ❌ Overkill for 2D architecture diagrams
- ❌ Mobile performance concerns
- ❌ Accessibility challenges

**Best For**: 3D visualizations (not needed here)

### Option 3: GSAP (GreenSock)

**Pros**:
- ✅ Industry-standard animation library
- ✅ Very powerful and performant
- ✅ Timeline control

**Cons**:
- ❌ Requires more manual DOM manipulation
- ❌ Less React-idiomatic
- ❌ Steeper learning curve
- ❌ Commercial license for some plugins

**Best For**: Complex timeline-based animations

### Option 4: React Flow / React DAG

**Pros**:
- ✅ Built for node-based diagrams
- ✅ Drag and drop
- ✅ Zoom and pan

**Cons**:
- ❌ Less flexible for custom animations
- ❌ May be too "diagram-like" for landing page
- ❌ Heavier bundle

**Best For**: Interactive node-based editors

### **Recommendation: Framer Motion**

**Why**: Perfect balance of performance, React integration, maintainability, and visual appeal. Ideal for creating smooth, interactive architecture visualizations on a landing page.

---

## 🎨 Design Concept

### Desktop View (≥1024px)

#### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    Hero Section                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                                                        │  │
│  │     [UI/Client] ──┐                                   │  │
│  │                    │                                   │  │
│  │     [Agent] ───────┼──→ [tRPC API]                    │  │
│  │                    │                                   │  │
│  │                    ↓                                   │  │
│  │              [Event Store]                             │  │
│  │                    │                                   │  │
│  │                    ↓                                   │  │
│  │              [Inngest Bus]                            │  │
│  │                    │                                   │  │
│  │                    ↓                                   │  │
│  │              [Workers]                                 │  │
│  │              ↙    ↓    ↘                              │  │
│  │        [Database] [Storage] [Agents]                  │  │
│  │                                                        │  │
│  │  [External Service] ←→ [Hub Protocol] ←→ [Data Pod]   │  │
│  │                                                        │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  [Play] [Pause] [Reset]  [Simple Flow] [Complex Flow]      │
└─────────────────────────────────────────────────────────────┘
```

#### Visual Design

**Color Scheme**:
- **Primary Flow**: Purple gradient (#6a0dad → #bb86fc) - Synap brand
- **Data Pod**: Central hub with glow effect
- **Events**: Animated particles flowing along paths
- **External Services**: Different color (e.g., blue) to show separation
- **Plugins**: Badge-style indicators with icons

**Animation Style**:
- **Smooth easing**: `easeInOut` for natural movement
- **Particle effects**: Small dots flowing along connection lines
- **Pulse effects**: Components "breathing" when active
- **Fade transitions**: Components appear/disappear smoothly
- **Highlight on hover**: Interactive elements respond to mouse

**Component Design**:
- **Rounded cards**: Modern, friendly appearance
- **Icons**: Simple, recognizable icons for each component
- **Labels**: Clear, readable typography
- **Connections**: Animated lines with flowing particles
- **Status indicators**: Color-coded (idle, active, processing)

### Mobile View (<1024px)

#### Layout Structure

```
┌─────────────────────┐
│   Hero Section      │
│ ┌─────────────────┐ │
│ │                 │ │
│ │   [UI/Client]   │ │
│ │        ↓        │ │
│ │   [tRPC API]    │ │
│ │        ↓        │ │
│ │  [Event Store]  │ │
│ │        ↓        │ │
│ │  [Inngest Bus]  │ │
│ │        ↓        │ │
│ │   [Workers]     │ │
│ │   ↙    ↓    ↘   │ │
│ │ [DB] [Store]    │ │
│ │                 │ │
│ └─────────────────┘ │
│                     │
│ [▶ Play] [⏸ Pause]  │
│ [Simple] [Complex]   │
└─────────────────────┘
```

#### Mobile Adaptations

- **Vertical layout**: Stack components vertically
- **Simplified connections**: Fewer visual elements
- **Touch-friendly**: Larger tap targets
- **Swipe gestures**: Navigate between flows
- **Collapsible sections**: Expandable details
- **Reduced animation**: Lighter animations for performance

---

## 🎬 Animation Flows

## 📖 Real Architecture Flow Example

### Core Principle: Input-Agnostic Architecture

**Critical Concept**: The Synap architecture is **completely input-agnostic**. The same flow executes whether the action originates from:

- **UI/User**: Manual user interaction (clicking "Create Note", typing, etc.)
- **Agent/Automation**: AI agent, scheduled task, webhook, automation rule, etc.

**The Unified Flow** (identical for both sources):

```
[Input Source: UI OR Agent] 
    ↓
[tRPC API] 
    ↓
[Event Creation: note.creation.requested] 
    ↓
[Event Store: TimescaleDB] 
    ↓
[Inngest Event Bus] 
    ↓
[Workers: NoteCreationHandler] 
    ↓
[Actions: Database + Storage + New Events]
    ↓
[Event Store: note.creation.completed]
    ↓
[Real-time: WebSocket notification]
```

**Why This Matters**: The animation must visually demonstrate that UI and Agent converge to the same flow, emphasizing the unified event-driven architecture where the source doesn't matter.

---

### Real Example: Creating a Note (Step-by-Step)

**Scenario**: User wants to create a note with content "Meeting notes from today"

#### Option A: User Input (UI)

1. **User Action** (0ms):
   - User types note in app UI
   - User clicks "Save" button
   - **Source**: `'api'` (from UI)

#### Option B: Agent Input (Automation)

1. **Agent Action** (0ms):
   - AI agent analyzes conversation: "User mentioned meeting notes"
   - Agent decides to create note automatically
   - **Source**: `'automation'` (from agent)

#### Unified Flow (Same for Both)

2. **SDK Call** (50ms):
   ```typescript
   // Both UI and Agent use the same SDK
   await synapClient.notes.create.mutate({
     content: "Meeting notes from today",
     title: "Meeting Notes"
   });
   ```

3. **tRPC API** (100ms):
   - **Router**: `packages/api/src/routers/notes.ts`
   - **Procedure**: `notes.create` (protectedProcedure)
   - **Validation**: Zod schema validates input
   - **Event Creation**:
     ```typescript
     const event = createSynapEvent({
       type: EventTypes.NOTE_CREATION_REQUESTED,
       userId: ctx.userId,
       aggregateId: entityId, // UUID generated
       data: { content, title },
       source: 'api' | 'automation', // ← Only difference!
       requestId: randomUUID(),
       correlationId: randomUUID(),
     });
     ```

4. **Event Store** (150ms):
   - **Repository**: `packages/database/src/repositories/event-repository.ts`
   - **Action**: `eventRepo.append(event)`
   - **Storage**: Event stored in TimescaleDB `events_v2` table
   - **Result**: Event is now immutable, part of history

5. **Inngest Publication** (200ms):
   - **Function**: `publishEvent('api/event.logged', eventData)`
   - **Event Bus**: Inngest receives event
   - **Trigger**: Inngest dispatches to registered handlers

6. **Worker Dispatch** (250ms):
   - **Dispatcher**: `packages/jobs/src/functions/event-dispatcher.ts`
   - **Handler Selection**: Routes to `NoteCreationHandler` (matches `NOTE_CREATION_REQUESTED`)
   - **Handler**: `packages/jobs/src/handlers/note-creation-handler.ts`

7. **Worker Processing** (300ms):
   - **Step 1 - Storage Upload**:
     ```typescript
     const storagePath = storage.buildPath(userId, 'note', entityId, 'md');
     await storage.upload(storagePath, content, { contentType: 'text/markdown' });
     ```
     - Content uploaded to R2/MinIO
     - File metadata returned (path, size, checksum, URL)

   - **Step 2 - Database Insert**:
     ```typescript
     await db.insert(entities).values({
       id: entityId,
       userId,
       type: 'note',
       title: noteTitle,
       preview: content.slice(0, 500),
       fileUrl: fileMetadata.url,
       filePath: fileMetadata.path,
       fileSize: fileMetadata.size,
       // ... other fields
     });
     ```
     - Entity record created in PostgreSQL `entities` table
     - This is the "projection" (read-optimized view)

   - **Step 3 - Completion Event**:
     ```typescript
     const completionEvent = createSynapEvent({
       type: EventTypes.NOTE_CREATION_COMPLETED,
       userId,
       aggregateId: entityId,
       data: { entityId, fileUrl, filePath },
       source: 'worker',
     });
     await eventRepo.append(completionEvent);
     await publishEvent('note.creation.completed', completionEvent);
     ```

8. **New Event Cycle** (350ms):
   - Completion event stored in Event Store
   - Inngest dispatches completion event
   - Other workers can react (e.g., embedding generation)

9. **Real-time Notification** (400ms):
   - WebSocket connection sends update to client
   - UI receives: `{ type: 'note.creation.completed', entityId, ... }`
   - UI updates to show new note

10. **Idle State** (450ms):
    - All components return to idle
    - Ready for next action

**Key Points**:
- ✅ **Same flow** whether from UI or Agent
- ✅ **Events are the source of truth** (immutable history)
- ✅ **Workers handle all business logic** (not API layer)
- ✅ **Workers can create new events** (event cascade)
- ✅ **Real-time updates** notify all connected clients

---

### Architecture Flow Principle (Agnostic Input)

**Key Concept**: The architecture is **input-agnostic**. Whether the action comes from:
- **UI/User**: Manual user interaction (click, type, etc.)
- **Agent/Automation**: AI agent, scheduled task, webhook, etc.

The flow is **identical**:
```
[Input Source] → [tRPC API] → [Event Creation] → [Event Store] → [Inngest] → [Workers] → [Actions]
                                                                                            ↓
                                                                                    [Database | Storage | New Events]
```

**Why This Matters**: The animation should show that both UI and Agent can trigger the same flow, emphasizing the unified event-driven architecture.

---

### Flow 1: Simple Entity Creation (Default)

**Real Example: Creating a Note**

**Input Source Options** (shown as branching):
- **Option A - UI**: User types note in app, clicks "Save"
- **Option B - Agent**: AI agent automatically creates note from conversation

**Unified Flow** (same for both):

1. **Action Input** (0s): 
   - UI path: User icon appears, typing animation
   - Agent path: Agent icon appears, thinking animation
   - Both converge to tRPC API

2. **API Call** (0.5s): 
   - Arrow animates from input source to tRPC API
   - Particles flow along connection
   - API component highlights

3. **Event Creation** (1s): 
   - API validates input
   - Creates `SynapEvent`: `{ type: 'note.creation.requested', data: { content, title } }`
   - Event particle appears at API

4. **Event Storage** (1.5s): 
   - Event flows to Event Store (TimescaleDB)
   - Event particle enters store, visual "stored" feedback
   - Event Store component pulses

5. **Inngest Trigger** (2s): 
   - Event Store publishes to Inngest Bus
   - Inngest component activates
   - Connection line brightens

6. **Worker Dispatch** (2.5s): 
   - Inngest dispatches event to registered handler
   - Arrow animates to Workers
   - Workers component activates

7. **Worker Processing** (3s): 
   - Worker handler (`NoteCreationHandler`) processes event
   - Workers component pulses, shows processing state
   - Multiple actions can happen in parallel:

8a. **Storage Action** (3.5s): 
   - Worker uploads note content to Storage (R2/MinIO)
   - Arrow to Storage, upload animation
   - Storage component highlights

8b. **Database Action** (4s): 
   - Worker creates entity record in Database
   - Arrow to Database, insert animation
   - Database component highlights

9. **Completion Event** (4.5s): 
   - Worker creates new event: `note.creation.completed`
   - Event flows back to Event Store
   - Cycle can continue (new event → new worker → new actions)

10. **Real-time Notification** (5s): 
    - Event triggers real-time update
    - Arrow back to UI/Agent
    - Notification animation
    - UI updates or Agent receives confirmation

11. **Idle State** (5.5s): 
    - All components return to idle
    - Connections dim
    - Ready for next cycle

**Duration**: ~6 seconds
**Loop**: Yes, with 2-second pause between loops
**Key Message**: "Same flow, different entry points"

---

### Flow 2: Complex Multi-Event Flow with External Service

**Real Example: Planning a Trip (AI Request)**

**Input**: User asks "Plan my trip to Lisbon in May"

**Sequence**:

1. **User Input** (0s): UI component, chat message appears

2. **Local Agent Analysis** (0.5s): 
   - Agent component activates
   - Analyzes intent: "This is a complex planning task"
   - Decision: Need external expertise

3. **Hub Protocol Initiation** (1s): 
   - Agent calls External Service via Hub Protocol
   - Connection appears between Data Pod and External Service
   - Hub Protocol badge/icon appears

4. **Token Generation** (1.5s): 
   - External Service requests access token
   - Data Pod validates API key
   - Generates JWT (5 min TTL)
   - Token particle flows to External Service

5. **Data Request** (2s): 
   - External Service requests user data (preferences, calendar)
   - Arrow with data particles flows from Data Pod
   - Data Pod component shows "read-only access" indicator

6. **External Processing** (2.5s): 
   - External Service processes with AI
   - External Service component pulses
   - AI brain icon animation

7. **Insight Return** (3s): 
   - External Service returns structured insight (HubInsight)
   - Insight particle flows back to Data Pod
   - Insight contains multiple actions

8. **Event Transformation** (3.5s): 
   - Data Pod transforms insight into multiple events:
     - `project.creation.requested`
     - `task.creation.requested` (x3)
   - Multiple event particles created
   - Visual transformation effect

9. **Event Storage** (4s): 
   - All events stored in Event Store
   - Multiple particles enter store
   - Event Store shows multiple events

10. **Worker Processing** (4.5s): 
    - Inngest dispatches all events
    - Multiple workers activate in parallel
    - Workers component shows parallel processing

11. **Parallel Actions** (5s): 
    - Worker 1: Creates project in Database
    - Worker 2: Creates task 1 in Database
    - Worker 3: Creates task 2 in Database
    - Worker 4: Creates task 3 in Database
    - All happen simultaneously (visual: multiple arrows)

12. **Completion Events** (5.5s): 
    - Each worker creates completion events
    - Events flow back to Event Store
    - Cascade of events

13. **Real-time Notification** (6s): 
    - All completion events trigger notifications
    - UI receives updates
    - User sees trip plan appear

14. **Idle State** (6.5s): 
    - All components return to idle
    - Ready for next request

**Duration**: ~7 seconds
**Loop**: Yes, with 2-second pause
**Key Message**: "Complex flows create multiple events, processed in parallel"

---

### Flow 3: Background Processing (Continuous)

**Real Example: Embedding Generation**

**Trigger**: Event already in store (from previous flow)

**Sequence**:

1. **Event Exists** (0s): Event Store shows existing event (`entity.created`)

2. **Scheduled Processing** (0.5s): 
   - Inngest triggers background worker
   - No user input needed
   - Automatic processing

3. **Worker Activation** (1s): 
   - `EmbeddingGeneratorHandler` activates
   - Workers component highlights

4. **AI Processing** (1.5s): 
   - Worker calls AI service (OpenAI embeddings)
   - Connection to AI service (if shown)
   - Processing animation

5. **Vector Storage** (2s): 
   - Embeddings stored in Database (pgvector)
   - Database component highlights
   - Vector icon appears

6. **Completion** (2.5s): 
   - New event created: `entity.embedding.generated`
   - Event flows to Event Store
   - Cycle can continue

**Duration**: ~3 seconds
**Key Message**: "Background workers process events automatically"

---

### Flow 4: Plugin Ecosystem (Interactive)

**Shows**: How plugins integrate into the system

**Features**:
- **Internal Plugins**: Appear as extensions to Workers/API
- **External Services**: Appear as separate nodes connected via Hub Protocol
- **Hover to Explore**: See plugin details
- **Click to Focus**: Highlight plugin's integration points

**Visual**:
- Plugin badges on components
- Connection lines showing integration
- Animated "plugin activation" when used

**Features**:
- **Hover to explore**: Hover over plugin badges to see details
- **Click to focus**: Click a plugin to highlight its integration points
- **Animated connections**: Show how plugins connect to the system
- **Plugin types**: Visual distinction between internal and external plugins

---

## 🎯 Interactive Features

### Controls

1. **Play/Pause Button**: Start/stop animation
2. **Reset Button**: Return to initial state
3. **Flow Selector**: Switch between Simple, Complex, and Plugin flows
4. **Speed Control**: Adjust animation speed (0.5x, 1x, 2x)
5. **Component Details**: Click components to see tooltips with details

### Interactions

1. **Hover Effects**: 
   - Components scale up slightly
   - Connection lines brighten
   - Tooltip appears with component info

2. **Click Actions**:
   - Component details modal
   - Focus on specific flow path
   - Highlight related components

3. **Keyboard Navigation**:
   - `Space`: Play/Pause
   - `R`: Reset
   - `1/2/3`: Switch flows
   - `Tab`: Navigate components
   - `Enter`: Activate component

4. **Touch Gestures** (Mobile):
   - Tap: Activate component
   - Swipe: Navigate flows
   - Pinch: Zoom (if implemented)

---

## 📐 Technical Specifications

### Component Structure

```typescript
<ArchitectureAnimation>
  <AnimationCanvas>
    <ComponentNode id="ui" type="client" />
    <ComponentNode id="api" type="server" />
    <ComponentNode id="eventStore" type="database" />
    <ComponentNode id="inngest" type="service" />
    <ComponentNode id="workers" type="service" />
    <ComponentNode id="database" type="database" />
    <ComponentNode id="storage" type="storage" />
    <ComponentNode id="externalService" type="external" />
    
    <ConnectionLine from="ui" to="api" />
    <ConnectionLine from="api" to="eventStore" />
    <ConnectionLine from="eventStore" to="inngest" />
    <ConnectionLine from="inngest" to="workers" />
    <ConnectionLine from="workers" to="database" />
    <ConnectionLine from="workers" to="storage" />
    <ConnectionLine from="externalService" to="api" />
    
    <ParticleFlow connection="ui-api" />
    <ParticleFlow connection="api-eventStore" />
    // ... more particle flows
  </AnimationCanvas>
  
  <Controls>
    <PlayPauseButton />
    <ResetButton />
    <FlowSelector />
    <SpeedControl />
  </Controls>
</ArchitectureAnimation>
```

### Performance Targets

- **60 FPS**: Smooth animations
- **Initial Load**: < 2 seconds
- **Bundle Size**: < 100KB (gzipped) for animation code
- **Memory**: < 50MB during animation
- **Battery**: Efficient on mobile devices

### Accessibility Requirements

- **ARIA Labels**: All interactive elements labeled
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Descriptive text for animations
- **Reduced Motion**: Respect `prefers-reduced-motion`
- **Color Contrast**: WCAG AA compliance
- **Focus Indicators**: Clear focus states

---

## 🎨 Visual Design Details

### Component Styling

**Data Pod (Central Hub)**:
- Large, prominent card
- Purple gradient background
- Glow effect (pulsing)
- Icon: Database/server icon
- Label: "Data Pod"

**UI/Client**:
- Card with app icon
- Blue accent color
- Label: "Client App"

**tRPC API**:
- Card with API icon
- Purple accent
- Label: "tRPC API"

**Event Store**:
- Card with event icon
- Orange accent
- Label: "Event Store"

**Inngest Bus**:
- Card with bus/queue icon
- Green accent
- Label: "Inngest"

**Workers**:
- Card with worker icon
- Yellow accent
- Label: "Workers"

**Database**:
- Card with database icon
- Blue accent
- Label: "PostgreSQL"

**Storage**:
- Card with storage icon
- Teal accent
- Label: "R2/MinIO"

**External Service**:
- Card with plugin icon
- Different style (dashed border?)
- Blue accent
- Label: "External Service"

### Connection Lines

- **Thickness**: 2-3px
- **Style**: Smooth curves (not straight lines)
- **Color**: Gradient matching source component
- **Animation**: Particles flow along line
- **State**: 
  - Idle: Dimmed (30% opacity)
  - Active: Full brightness with particles
  - Highlighted: Brighter with glow

### Particle Effects

- **Size**: 4-6px circles
- **Color**: Matching connection color
- **Speed**: Smooth, consistent
- **Density**: 3-5 particles per connection
- **Trail**: Optional subtle trail effect

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
  - Vertical layout
  - Simplified animations
  - Larger touch targets
  - Reduced particle count

- **Tablet**: 768px - 1023px
  - Hybrid layout
  - Medium complexity
  - Touch + mouse support

- **Desktop**: ≥ 1024px
  - Full layout
  - All features enabled
  - Hover interactions

- **Large Desktop**: ≥ 1440px
  - Enhanced spacing
  - More detailed animations

---

## 🚀 Implementation Phases

### Phase 1: Core Animation (MVP)
- Basic component nodes
- Simple connections
- One flow (Simple Note Creation)
- Play/Pause controls
- Desktop only

### Phase 2: Enhanced Interactions
- Multiple flows
- Hover effects
- Component details
- Keyboard navigation
- Mobile responsive

### Phase 3: Advanced Features
- Plugin ecosystem visualization
- Interactive flow selection
- Speed controls
- Accessibility enhancements
- Performance optimizations

---


## ✅ Validation Criteria

The animation is successful if:

1. ✅ **Visual Appeal**: Looks professional and matches Synap branding
2. ✅ **Performance**: Runs at 60 FPS on modern devices
3. ✅ **Responsive**: Works beautifully on mobile and desktop
4. ✅ **Accessible**: Full keyboard navigation and screen reader support
5. ✅ **Educational**: Users understand the architecture after viewing
6. ✅ **Interactive**: Users can explore and control the animation
7. ✅ **Maintainable**: Code is clean and well-documented

---

## 📚 References

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Performance Best Practices](https://react.dev/learn/render-and-commit)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Docusaurus Custom Pages](https://docusaurus.io/docs/creating-pages)

---

**Next Steps**: Review this specification, approve the approach, then use the AI prompt to generate the implementation.

