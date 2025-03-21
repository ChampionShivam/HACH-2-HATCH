import spacy

nlp = spacy.load("en_core_web_sm")

def extract_keywords(query):
    doc = nlp(query)
    keywords = [token.lemma_ for token in doc if token.pos_ in ["NOUN", "VERB", "ADJ"]]
    return keywords

search_query = "Looking for an AI mentor with fundraising experience"
print(extract_keywords(search_query))