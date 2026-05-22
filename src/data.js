export const topics = [
  
  {
    id: "np-completeness",
    title: "NP-Completeness",
    intro: "Practice problems for reductions and NP-completeness.",
    problems: [
      {
        question: "Prove that 2-CNF-SAT is in P",
        solutionImages: [
          "/images/np-completeness/2-CNF-in-P_0.png",
          "/images/np-completeness/2-CNF-in-P_1.png",
          "/images/np-completeness/2-CNF-in-P_2.png",
          "/images/np-completeness/2-CNF-in-P_3.png",
          "/images/np-completeness/2-CNF-in-P_4.png",
          "/images/np-completeness/2-CNF-in-P_5.png",
          "/images/np-completeness/2-CNF-in-P_6.png",
        ],
      },
      {
        question: "Prove that NAE-3-CNF-SAT is NPC",
        solutionImages: [
          "/images/np-completeness/NAE-3-CNF-SAT_1.png",
          "/images/np-completeness/NAE-3-CNF-SAT_2.png",
        ],
      },
      {
        question: "Prove that IS and VC are in NPC",
        solutionImages: [
          "/images/np-completeness/IS_VC_1.png",
          "/images/np-completeness/IS_VC_2.png",
        ],
      },
      {
        question: "Prove that Clique is in NPC",
        solutionImages: [
          "/images/np-completeness/3-CNF-SAT-Clique.png",
          "/images/np-completeness/3-CNF-SAT-Clique_1.png",
          "/images/np-completeness/3-CNF-SAT-Clique_2.png",
        ],
      },
      {
        question: "(Gallai’s theorem). Prove: If G = (V, E) is a graph without isolated vertices, then α(G) + τ (G) = |V | = ν(G) + ρ(G).",
        solutionImages: [
          "/images/np-completeness/Gallai_1.png",
          "/images/np-completeness/Gallai_2.png",
          
        ],
      },
      {
        question: "Reduce Clique to IS",
        solutionImages: [
          "/images/np-completeness/clique_IS_1.png",
        ],
      },
      {
        question: "Reduce Clique to VC",
        solutionImages: [
          "/images/np-completeness/clique_VC.png",
        ],
      },
      {
        question: "Reduce Subset Sum to Partition",
        solutionImages: [
          "/images/np-completeness/subset_sum_partition_1.png",
          "/images/np-completeness/subset_sum_partition_2.png",
          "/images/np-completeness/subset_sum_partition_3.png",
        ],
      },
      {
        question: "Reduce Subset Sum to Knapsack",
        solutionImages: [
          "/images/np-completeness/subset_sum_knapsack.png",
          
        ],
      },
    ],
  },
  {
    id: "matchings-in-graphs",
    title: "Matchings in Graphs",
    intro: "Practice problems for matchings in graphs.",
    problems: [
      {
        question: "Prove: Let G be bipartite. Then G admits a perfect matching if and only if τ (G) ≥ |V (G)|/2.",
        solutionImages: [
          "/images/matchings-in-graphs/matching_in_degree_regular_1.png",
        ],
      },
      {
        question: "Prove: Let 1 ≤ d ∈ N. Bipartite degree-regular graphs admit a perfect matching.",
        solutionImages: [
          "/images/matchings-in-graphs/matching_in_degree_regular_2.png",
        ],
      },
      {
        question: "Prove: (König-Rado) Let G be bipartite without isolated vertices. Then, ρ(G) = α(G).",
        solutionImages: [
          "/images/matchings-in-graphs/matching_in_degree_regular_3.png",
        ],
      },
      {
        question: "Prove: Let n ∈ Z + be even. An n-vertex graph G satisfying δ(G) ≥ n/2 contains a perfect matching.",
        solutionImages: [
          "/images/matchings-in-graphs/perfect_matching_minimum_degree_1.png",
        ],
      },
      {
        question: "Prove: (König-Rado) Let G be bipartite without isolated vertices. Then, ρ(G) = α(G).",
        solutionImages: [
          "/images/matchings-in-graphs/matching_in_degree_regular_3.png",
        ],
      },
      {
        question: "Prove: Let G := (A ∪· B, E) be bipartite and let R ⊆ V (G). Then, there exists a matching saturating R if and only if both R ∩ A and R ∩ B satisfy the Hall-condition.",
        solutionImages: [
          "/images/matchings-in-graphs/matching_partial.png",
          "/images/matchings-in-graphs/matching_partial_1.png",
        ],
      },
      {
        question: "Prove: Let G := (A ∪· B, E) be bipartite and let M and N be two maximum matchings in G. Then, there exists a maximum matching in G saturating (V (M) ∩ A) ∪ (V (N) ∩ B).",
        solutionImages: [
          "/images/matchings-in-graphs/matching_partial_2.png",
          
        ],
      },
      {
        question: "Prove: Let G := (A ∪· B, E) be a bipartite graph. Given a maximum matching of G, a minimum vertex cover of G can be found within O(e(G)) time.",
        solutionImages: [
          "/images/matchings-in-graphs/maximum_matching_bipartite_1.png",
          "/images/matchings-in-graphs/maximum_matching_bipartite_2.png",
          "/images/matchings-in-graphs/maximum_matching_bipartite_3.png",
          
        ],
      },
      {
        question: "Prove: Let G := (X ∪· Y, E) be a bipartite graph satisfying |NG(S)| ≥ |S| − d for every S ⊆ X for some d ∈ N. Then, G has a matching covering all but at most d members of X.",
        solutionImages: [
          "/images/matchings-in-graphs/hall_extentions_1.png",
        ],
      },
      {
        question: "Let G := (X ∪· Y, E) be a bipartite graph and let r ∈ N. We say that X is K1,r-saturated in G if there exists a collection of vertex-disjoint copies of K1,r in G such that each vertex in X serves as the centre vertex of one of the copies. If r = 1, then the definition coincides with that of a matching saturating X. " + "\nProve: Let G := (X ∪· Y, E) be a bipartite graph and let r ∈ N. X is K1,r-saturated in G ⇐⇒ ∀S ⊆ X : |NG(S)| ≥ r|S|.",
        solutionImages: [
          "/images/matchings-in-graphs/hall_extentions_2.png",
          
        ],
      },
    ],
  },
  {
    id: "connectivity",
    title: "Connectivity",
    intro: "Practice problems for connectivity.",
    problems: [
      {
        question: "Prove: Let G be connected. Every minimal edge-disconnector forms an edge-cut (S, V (G) \ S) such that both G[S] and G[V (G) \ S] are connected.",
        solutionImages: [
          "/images/connectivity/observation_1.png",
          
        ],
      },
      {
        question: "Prove: Whitney ’s theorem [64]. Let G be a simple graph. Then, κ(G) ≤ κ'(G) ≤ δ(G).",
        solutionImages: [
          "/images/connectivity/whitney.png",
          
        ],
      },
      {
        question: "Prove: If ∆(G) ≤ 3, then κ(G) = κ'(G).",
        solutionImages: [
          "/images/connectivity/proposition_1.png"
          
        ],
      },
      {
        question: "Prove: Let G be an n-vertex graph. If δ(G) ≥ n − 2, then κ(G) = δ(G).",
        solutionImages: [
          "/images/connectivity/observation_2.png",
          
        ],
      },
      {
        question: "Prove: Let G be an n-vertex graph and let 1 ≤ k < n be an integer. If δ(G) ≥ (n + k − 2)/2 then κ(G) ≥ k.",
        solutionImages: [
          "/images/connectivity/proposition_2_1.png",
          "/images/connectivity/proposition_2_2.png",

          
        ],
      },
      {
        question: "Prove: A connected graph is k-edge-connected if and only if each of its blocks is k-edge-connected.",
        solutionImages: [
          "/images/connectivity/proposition_3.png",
          
        ],
      },
        
      
    ],
  },
  {
    id: "hamiltoniacy",
    title: "Hamiltoniacy",
    intro: "Practice problems for Hamiltoniany.",
    problems: [
      {
        question: "Let G be an n-vertex graph with n ≥ 3. \n (a) If e(G) ≥ n−1C2 + 2, then G is Hamiltonian.\n(b) If e(G) ≥n−1C2+ 3, then G is Hamiltonian-connected",
        solutionImages:[
          "/images/hamiltoniacy/theorem.png",
        ]

      },
      {
        question: "Rédei’s theorem. Every tournament contains a directed Hamilton path.",
        solutionImages: [
          "/images/hamiltoniacy/redei_1.png",
        ]
      },
      {
        question: "Let D be a strict digraph, and let P be an (x, y)-directed path in D of length l (length is measured in terms of edges). Let v ∈ V (D) \ V (P). \n 1. If there is no directed path P' in D satisfying V (P') = V (P)∪{v}, then deg±P (v) ≤ l+2.\n2. If P is a longest directed path in G, then deg±P(v) ≤ l.",
        solutionImages: [
          "/images/hamiltoniacy/lemma.png",
        ]
      },
    ],
  },
  {
    id: "graph-coloring",
    title: "Graph Coloring",
    intro: "Practice problems for graph coloring.",
    problems: [
      {
        question: "Let G be an n-vertex graph satisfying χ(G) ≤ 3. Then a colouring of G using at O(√n) colours can be found in polynomial time.",
        solutionImages:[
          "/images/graph-coloring/3-coloring.png"
        ]
      },
      {
        question: "Given a set of intervals we'll define an interval graph for them: Every interval will be a vertex and two vertices will be connected if their intervals intersect.\nProve: In an interval graph, 𝚾(𝑮)=𝝎(𝑮) where 𝝎(𝑮) is the maximum clique size, and 𝑿(𝑮) is the chromatic number of G.",
        solutionImages:[
          "/images/graph-coloring/interval_coloring.png",
        ]

      },
      {
        question: "Vizing's theorem. χ'(G) ≤ ∆(G) + 1.",
        solutionImages: [
          "/images/graph-coloring/vizing_proof.png",
          "/images/graph-coloring/vising_proof_1.png",
          "/images/graph-coloring/vising_proof_2.png",
          "/images/graph-coloring/vising_proof_3.png",
          "/images/graph-coloring/vising_proof_4.png",
          "/images/graph-coloring/vising_proof_5.png",
        ]
      },
      {
        question: "Let G be a graph such that every two odd cycles in it intersect at vertices. Then Χ(𝐺)≤5",
        solutionImages: [
          "/images/graph-coloring/no_odd_cycles_coloring.png",
        ]
      },
      {
        question: "For a graph G, we define the edge graph 𝐿(𝐺) as follows:\n- For each edge, we define a vertex\n- Vertices are connected if their edges have a vertex\nProperties of an edge graph:\n1. 𝚾(𝑳(𝑮))=𝚾^′ (𝑮)\n2. 𝚫(𝑳(𝑮))≤𝟐(𝚫(𝑮)−𝟏)\nWhere 𝑿′(𝑮) is a chromatic number on the edges.\nProve: Given 𝚫(𝑮)=𝟑, 𝚾′ (𝑮)≤𝟒",
        solutionImages: [
          "/images/graph-coloring/vising_specific_case.png",
        ]
      },
    ],
  },
  {
    id: "linear-programming",
    title: "Linear Programming",
    intro: "Practice problems for linear programming.",
    problems: [
      {
        question: "Formulate a linear program of the maximum matching problem. Hint: Think of a binary vector x that will tell for every edge whether it's in the matching or not.",
        solutionImages: [
          "/images/linear-programming/max_matching_linear.png",
        ]
      },
      {
        question: "Given a flow network, a source and a sink, formulate a linear program of the max flow problem. Hint: Think of the constraints of flow for every edge in the network.",
        solutionImages: [
          "/images/linear-programming/flow_network.png",
        ]
      },
      {
        question: "Given a collection of points in a plane find a line 𝑦=𝑎𝑥+𝑏 that best describes the points. What does 'describe the points' mean? That the sum of the distances of the points from the line is minimal.",
        solutionImages: [
          "/images/linear-programming/linear_regression.png",
        ]
      },
      {
        question: "Given two sets of points in a plane: 𝐴={𝑎_1,𝑎_2,…,𝑎_𝑛 }, 𝐵={𝑏_1,𝑏_2,…,𝑏_𝑚}. Objective: Find a line that separates the points, such that all points from A are above the line, and all points from B are below it.",
        solutionImages: [
          "/images/linear-programming/linear_programming_1.png",
          "/images/linear-programming/linear_programming_2.png",
        ]
      },
      {
        question: "Formulate a linear program for the max independant set problem.",
        solutionImages: [
          "/images/linear-programming/max_independant_set.png",
        ]
      },
      {
        question: "Formulate a linear program for the max matching problem in a balanced bipartite graph and prove the optimal weight in real numbers is the same as in integers.",
        solutionImages: [
          "/images/linear-programming/max_matching_optimal_integer_linear.png",
          "/images/linear-programming/max_matching_optimal_integer_linear_1.png",
        ]
      },
    ],
  },
  {
    id: "approximation-algorithms",
    title: "Approximation Algorithms",
    intro: "Practice problems for approximation algorithms.",
    problems: [
      
    ],
  },
  {
    id: "random-de-randomization-algorithms",
    title: "Random Algorithms",
    intro: "Practice problems for random algorithms.",
    problems: [
      
    ],
  },
  
  
];