import { stripe } from '@/stripe'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { lineItems } = await request.json()

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: lineItems,
      mode: 'payment',
      return_url: `${request.headers.get('origin')}/return?session_id={CHECKOUT_SESSION_ID}`,
    })

    return NextResponse.json({
      id: session.id,
      client_secret: session.client_secret,
    })
  } catch (err: unknown) {
    console.log(err)
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 400 })
    }
    return NextResponse.json(
      { message: 'An unknown error occurred' },
      { status: 500 },
    )
  }
}
