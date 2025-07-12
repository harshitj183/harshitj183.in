# Repository Social Preview API Route

This API route fetches GitHub repository social preview images using the Microlink API service.

## How It Works

1. The client sends a GET request to `/api/proxy?url=https://github.com/username/repo`
2. The server uses Microlink API (`https://api.microlink.io/`) to fetch the page metadata
3. It extracts the social preview image URL from the Microlink response
4. Returns the image URL to the client to display the repository's social preview

## Why Microlink API?

- **No CORS Issues**: Microlink handles the HTML fetching server-side
- **Better Meta Tag Extraction**: Microlink specializes in extracting meta tags and social media previews
- **Reliability**: More reliable than manual HTML parsing
- **Additional Metadata**: Also provides title, description, and author information

## Security Considerations

- The API only allows fetching from GitHub URLs for security reasons
- It uses proper HTTP headers to avoid being blocked
- Validates that the returned image is from GitHub's repository images CDN
- No caching to ensure we always get the latest social preview image

## Example Response

```json
{
  "twitterImageUrl": "https://repository-images.githubusercontent.com/814677070/96c5a330-5ecd-4540-8de2-44bce752bcec",
  "status": "success",
  "message": "GitHub repository social preview image found",
  "microlinkData": {
    "title": "GitHub - harshitj183/MultiSearch.Extension: Browser extension for enhanced search",
    "description": "Browser extension for enhanced search functionality across multiple platforms",
    "author": "harshitj183"
  }
}
```

## Error Handling

If there's an error, the API will return a JSON response with an error message and appropriate status code:

```json
{
  "error": "Failed to fetch from Microlink: Not Found",
  "status": "error",
  "statusCode": 404,
  "message": "Not Found"
}
```

## Implementation Notes

This approach is more efficient and reliable than direct HTML parsing because:

1. **Microlink API Excellence**: Microlink specializes in extracting social media previews
2. **No CORS Issues**: Server-side fetching eliminates browser CORS restrictions
3. **Better Error Handling**: Microlink provides detailed error responses
4. **Additional Metadata**: Get title, description, and author information as bonus
5. **Format Validation**: Ensures we get the correct `repository-images.githubusercontent.com` URLs
