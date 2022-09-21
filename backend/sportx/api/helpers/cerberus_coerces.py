import re


def to_lower(value):
    if isinstance(value, str):
        # Replace extra spaces to single space
        value = re.sub(' +', ' ', value)

        # Remove space
        value = value.strip()
        return value.lower()

    # Other case
    if (value is None):
        return None

    # Undefined case
    raise ValueError("Unspected value")

def to_int(value):
    if isinstance(value, str):
        value = int(value)
        return value
    
    # Other case
    if (value is None):
        return None
    
    # Undefined case
    raise ValueError("Unspected value")