export const normalizeData = (data)=>{
    let normalizedList = []

    for(let result of data){
        normalizedList.push({
            id: result.id ?? result.new_source_id,
            username: result.author ?? "Unknown",
            createdAt: result.created_at,
            source: result.categories,
            profilePicture: result.media[0].url,
            tag: result.tags[0],
            views: result.like ?? 0,
            headline: result.title,
            summary: result.summary,
            caption: result.content,
        })
    }

    return normalizedList;
}