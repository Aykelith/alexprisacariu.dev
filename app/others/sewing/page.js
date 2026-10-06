export const metadata = {
  robots: { index: false, follow: false },
  title: "Sewing",
};

export default function OthersSewingPage() {
  return (
    <div id="OthersSewingPage">
      <div className="box py-12">
        <div className="flex flex-col">
          <h1 className="text-3xl font-accent mb-6">Sewing</h1>
          <div className="post-content mb-6">
            <BrotherSewingNeedleFabricTable />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrotherSewingNeedleFabricTable() {
  return (
    <div>
      <table className="w-full border-collapse border border-muted-foreground/30 bg-card [&_th]:border [&_td]:border [&_th]:border-muted-foreground/30 [&_td]:border-muted-foreground/30 [&_th]:p-2 [&_td]:p-2">
        <thead className="bg-foreground-accent/15">
          <tr>
            <th colSpan="2" rowSpan="2">
              Fabric Type/Application
            </th>
            <th colSpan="2">Thread</th>
            <th rowSpan="2">Size of needle</th>
            <th rowSpan="2">
              Stitch length
              <br />
              mm (inch)
            </th>
          </tr>
          <tr>
            <th>Type</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {/* Lightweight */}
          <tr>
            <td className="cat" rowSpan="2">
              Lightweight fabrics
            </td>
            <td className="examples" rowSpan="2">
              Lawn, georgette, challis, organdy, crepe, chiffon, voile, gauze,
              tulle, lining, etc.
            </td>
            <td>Polyester thread</td>
            <td>60 - 90</td>
            <td rowSpan="2">65/9 - 75/11</td>
            <td rowSpan="2">
              Fine stitches
              <br />
              1.8 - 2.5
              <br />
              (1/16 - 3/32)
            </td>
          </tr>
          <tr>
            <td>
              Cotton thread,
              <br />
              Silk thread
            </td>
            <td>50 - 80</td>
          </tr>

          {/* Medium weight */}
          <tr>
            <td className="cat" rowSpan="2">
              Medium weight fabrics
            </td>
            <td className="examples" rowSpan="2">
              Broadcloth, taffeta, gabardine, flannel, seersucker, double gauze,
              linen, terry cloth, waffle weave, sheeting, poplin, cotton twill,
              satin, quilting cotton, etc.
            </td>
            <td>Polyester thread</td>
            <td>60 - 90</td>
            <td rowSpan="2">75/11 - 90/14</td>
            <td rowSpan="2">
              Regular stitches
              <br />
              2.0 - 3.0
              <br />
              (1/16 - 1/8)
            </td>
          </tr>
          <tr>
            <td>
              Cotton thread,
              <br />
              Silk thread
            </td>
            <td>50 - 60</td>
          </tr>

          {/* Heavyweight */}
          <tr>
            <td className="cat" rowSpan="3">
              Heavyweight fabrics
            </td>
            <td className="examples">
              Denim (12 ounces or more), canvas, etc.
            </td>
            <td>
              Polyester thread,
              <br />
              Cotton thread
            </td>
            <td>30</td>
            <td>100/16</td>
            <td rowSpan="3">
              Coarse stitches
              <br />
              2.5 - 4.0
              <br />
              (3/32 - 3/16)
            </td>
          </tr>
          <tr>
            <td className="examples" rowSpan="2">
              Denim (12 ounces or more), canvas, tweed, corduroy, velour, melton
              wool, vinyl-coated fabric, etc.
            </td>
            <td>Polyester thread</td>
            <td>60</td>
            <td rowSpan="2">90/14 - 100/16</td>
          </tr>
          <tr>
            <td>
              Cotton thread,
              <br />
              Silk thread
            </td>
            <td>30 - 50</td>
          </tr>

          {/* Stretch */}
          <tr>
            <td className="cat">Stretch fabrics (knit fabrics, etc.)</td>
            <td className="examples">
              Jersey, tricot, T-shirt fabric, fleece, interlock, etc.
            </td>
            <td>
              Polyester thread,
              <br />
              Cotton thread,
              <br />
              Silk thread
            </td>
            <td>50</td>
            <td>
              Ball point needle
              <br />
              75/11 - 90/14
            </td>
            <td>Setting appropriate for the fabric thickness</td>
          </tr>

          {/* Top-stitching */}
          <tr>
            <td className="cat" colSpan="2" rowSpan="2">
              For top-stitching
            </td>
            <td rowSpan="2">
              Polyester thread,
              <br />
              Cotton thread
            </td>
            <td>30</td>
            <td>90/14 - 100/16</td>
            <td rowSpan="2">Setting appropriate for the fabric thickness</td>
          </tr>
          <tr>
            <td>50 - 60</td>
            <td>75/11 - 90/14</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
