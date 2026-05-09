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
        question: "Write the following optimization problem as a linear program...",
        solutionImage: "/images/lp-solution-1.png",
      },
      {
        question: "Solve the linear program graphically...",
        solutionImage: "/images/lp-solution-2.png",
      },
    ],
  },
  {
    id: "hamiltoniacy",
    title: "Hamiltoniacy",
    intro: "Practice problems for Hamiltoniany.",
    problems: [
      {
        question: "Write the following optimization problem as a linear program...",
        solutionImage: "/images/lp-solution-1.png",
      },
      {
        question: "Solve the linear program graphically...",
        solutionImage: "/images/lp-solution-2.png",
      },
    ],
  },
  {
    id: "graph-coloring",
    title: "Graph Coloring",
    intro: "Practice problems for Hamiltoniany.",
    problems: [
      {
        question: "Write the following optimization problem as a linear program...",
        solutionImage: "/images/lp-solution-1.png",
      },
      {
        question: "Solve the linear program graphically...",
        solutionImage: "/images/lp-solution-2.png",
      },
    ],
  },
  {
    id: "linear-programming",
    title: "Linear Programming",
    intro: "Practice problems for linear programming.",
    problems: [
      {
        question: "Write the following optimization problem as a linear program...",
        solutionImage: "/images/lp-solution-1.png",
      },
      {
        question: "Solve the linear program graphically...",
        solutionImage: "/images/lp-solution-2.png",
      },
    ],
  },
  {
    id: "approximation-algorithms",
    title: "Approximation algorithms",
    intro: "Practice problems for Approximation algorithms.",
    problems: [
      {
        question: "Write the following optimization problem as a linear program...",
        solutionImage: "/images/lp-solution-1.png",
      },
      {
        question: "Solve the linear program graphically...",
        solutionImage: "/images/lp-solution-2.png",
      },
    ],
  },
  
];