import pandas as pd
import sys

try:
    df = pd.read_excel('semrush-issues/kelasinovatif.com_duplicate_title_tag_20260208.xlsx')
    # Print columns to verify
    print("Columns:", df.columns.tolist())
    
    # Check if 'Page URL' and 'Title' (or similar) exist
    if 'Page URL' in df.columns:
        # Group by Title if possible, or just print relevant columns
        print(df.head(20).to_string())
    else:
        print("Required columns not found. First 5 rows:")
        print(df.head(5).to_string())
except Exception as e:
    print(f"Error reading excel: {e}")
