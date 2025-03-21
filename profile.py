from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

profiles = [
    "AI expert with fundraising and mentoring experience",
    "Blockchain developer in Web3 startups",
    "Marketing strategist for SaaS startups"
]

vectorizer = TfidfVectorizer()
vectors = vectorizer.fit_transform([search_query] + profiles)
similarity_scores = cosine_similarity(vectors[0], vectors[1:])

matched_profiles = sorted(zip(profiles, similarity_scores[0]), key=lambda x: x[1], reverse=True)
print(matched_profiles)