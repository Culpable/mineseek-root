/**
 * Component that displays contact information with a focus on booking demos
 * Includes email contact details for business enquiries
 */
export function ContactDetails() {
  return (
    <div>
      {/* <h2 className="text-2xl font-medium tracking-tight">
        Book A Demo
      </h2> */}
      <p className="mt-6 text-base text-neutral-600">
        Want to see how Mine Seek can accelerate your exploration process?
      </p>
      <p className="mt-2 text-base text-neutral-600">
        Schedule a personalised demo to discover how you can analyse and interpret geological data faster than ever before.
      </p>

      <div className="mt-16 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
        <h2 className="text-2xl font-medium tracking-tight">
          Email Us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-neutral-950">Business Enquiries</dt>
            <dd>
              <a
                href="mailto:solutions@mineseek.com.au"
                className="text-neutral-600 hover:text-neutral-950"
              >
                solutions@mineseek.com.au
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
} 