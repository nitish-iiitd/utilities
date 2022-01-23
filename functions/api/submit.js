/**
 * POST /api/submit
 */
export async function onRequestPost(context) {
  try {
    const form_data = await context.request.formData();

    // Convert FormData to JSON
    // NOTE: Allows multiple values per key
    // let output = "";
    // let utility = form_data['utility']
    // let input_text = form_data['input_text']
    // console.log("utility: "+utility)
    // console.log("input_text: "+input_text)
    // output = utility + input_text

    //const formData = await request.formData()
    const body = {}
    for (const entry of formData.entries()) {
      body[entry[0]] = entry[1]
    }
    //return JSON.stringify(body)
    return new Response(JSON.stringify(body))

    // return new Response(output, {
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8'
    //   }
    // });
  } catch (err) {
    return new Response('Error parsing JSON content', { status: 400 });
  }
}